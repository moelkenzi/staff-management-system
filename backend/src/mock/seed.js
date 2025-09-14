const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// Import all models
const Staff = require("../models/Staff");
const Department = require("../models/department");
const Job = require("../models/job");
const Attendance = require("../models/attendance");
const Payroll = require("../models/payroll");
const Report = require("../models/report");

// Read mock data
const departmentDataPath = path.join(__dirname, "departmentData.json");
const staffDataPath = path.join(__dirname, "staffData.json");
const jobDataPath = path.join(__dirname, "jobData.json");
const attendanceDataPath = path.join(__dirname, "attendanceData.json");
const payrollDataPath = path.join(__dirname, "payrollData.json");
const reportDataPath = path.join(__dirname, "reportData.json");

const departmentData = JSON.parse(fs.readFileSync(departmentDataPath, "utf8"));
const staffData = JSON.parse(fs.readFileSync(staffDataPath, "utf8"));
const jobData = JSON.parse(fs.readFileSync(jobDataPath, "utf8"));
const attendanceSettings = JSON.parse(fs.readFileSync(attendanceDataPath, "utf8"));
const payrollSettings = JSON.parse(fs.readFileSync(payrollDataPath, "utf8"));
const reportData = JSON.parse(fs.readFileSync(reportDataPath, "utf8"));

// Helper function to generate random data
const generateRandomTime = () => {
  const hours = Math.floor(Math.random() * 3) + 8; // 8-10 AM
  const minutes = Math.floor(Math.random() * 60);
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
};

const generateRandomSalary = (position) => {
  const baseSalaries = payrollSettings.salaryRanges;
  const base = baseSalaries[position] || 50000;
  return base + Math.floor(Math.random() * payrollSettings.salaryVariance);
};

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/staff-ms");
    console.log("✅ Connected to MongoDB");

    // Clear existing data
    console.log("🗑️  Clearing existing data...");
    await Department.deleteMany({});
    await Staff.deleteMany({});
    await Job.deleteMany({});
    await Attendance.deleteMany({});
    await Payroll.deleteMany({});
    await Report.deleteMany({});

    // 1. Seed Departments
    console.log("🏢 Seeding departments...");
    const departments = await Department.insertMany(departmentData);
    console.log(`✅ Seeded ${departments.length} departments`);

    // Create department lookup map
    const departmentMap = {};
    departments.forEach((dept) => {
      departmentMap[dept.name] = dept._id;
    });

    // 2. Seed Staff with department references
    console.log("👥 Seeding staff...");
    const staffWithDeptIds = staffData.map((staff) => ({
      ...staff,
      departmentId: departmentMap[staff.department],
    }));

    const staff = await Staff.insertMany(staffWithDeptIds);
    console.log(`✅ Seeded ${staff.length} staff members`);

    // 3. Seed Jobs
    console.log("💼 Seeding jobs...");

    // Map job data with department IDs and posted by staff
    const jobsWithReferences = jobData.slice(0, 3).map((job, index) => ({
      ...job,
      departmentId: departmentMap[job.department] || departmentMap["Engineering"],
      postedBy: staff[index % staff.length]._id,
    }));

    const jobs = await Job.insertMany(jobsWithReferences);
    console.log(`✅ Seeded ${jobs.length} job postings`);

    // 4. Seed Attendance
    console.log("⏰ Seeding attendance records...");
    const attendanceData = [];
    const today = new Date();
    const settings = attendanceSettings.settings;

    for (const employee of staff) {
      for (let i = 0; i < settings.workingDays; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);

        // Skip weekends if configured
        if (settings.skipWeekends && (date.getDay() === 0 || date.getDay() === 6)) continue;

        const onTimeChance = settings.onTimePercentage / 100;
        attendanceData.push({
          employeeId: employee._id,
          date: date,
          checkInTime: generateRandomTime(),
          status: Math.random() > onTimeChance ? "late" : "on time",
        });
      }
    }

    const attendance = await Attendance.insertMany(attendanceData);
    console.log(`✅ Seeded ${attendance.length} attendance records`);

    // 5. Seed Payroll
    console.log("💰 Seeding payroll records...");
    const payrollData = [];
    const settings = payrollSettings.settings;

    for (const employee of staff) {
      for (const month of settings.months) {
        const salary = generateRandomSalary(employee.position);
        const bonusChance = settings.bonusChance / 100;
        const bonuses =
          Math.random() > bonusChance ? Math.floor(salary * (settings.bonusPercentage / 100)) : 0;
        const deductions = Math.floor(salary * (settings.deductionPercentage / 100));
        const netPay = salary + bonuses - deductions;

        payrollData.push({
          employeeId: employee._id,
          month: month,
          salary: salary,
          bonuses: bonuses,
          deductions: deductions,
          netPay: netPay,
        });
      }
    }

    const payroll = await Payroll.insertMany(payrollData);
    console.log(`✅ Seeded ${payroll.length} payroll records`);

    // 6. Seed Reports
    console.log("📊 Seeding reports...");

    // Map report data with generated by staff IDs
    const reportsWithReferences = reportData.slice(0, 2).map((report, index) => {
      // Find appropriate staff member based on role
      let generatedBy;
      if (report.generatedByRole === "HR Manager") {
        generatedBy = staff.find((s) => s.position === "HR Manager")?._id || staff[0]._id;
      } else if (report.generatedByRole === "Financial Analyst") {
        generatedBy = staff.find((s) => s.position === "Financial Analyst")?._id || staff[0]._id;
      } else {
        generatedBy = staff[index % staff.length]._id;
      }

      return {
        type: report.type,
        fromDate: new Date(report.fromDate),
        toDate: new Date(report.toDate),
        generatedBy: generatedBy,
      };
    });

    const reports = await Report.insertMany(reportsWithReferences);
    console.log(`✅ Seeded ${reports.length} reports`);

    // Display comprehensive summary
    console.log("\n🎉 Database seeding completed successfully!");
    console.log("\n📊 Summary:");
    console.log(`   🏢 Departments: ${departments.length}`);
    console.log(`   👥 Staff Members: ${staff.length}`);
    console.log(`   💼 Job Postings: ${jobs.length}`);
    console.log(`   ⏰ Attendance Records: ${attendance.length}`);
    console.log(`   💰 Payroll Records: ${payroll.length}`);
    console.log(`   📊 Reports: ${reports.length}`);

    // Staff summary by department
    console.log("\n👥 Staff by Department:");
    const departmentCount = {};
    staff.forEach((emp) => {
      const deptName = emp.department;
      departmentCount[deptName] = (departmentCount[deptName] || 0) + 1;
    });

    Object.entries(departmentCount).forEach(([dept, count]) => {
      console.log(`   ${dept}: ${count} staff`);
    });
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    // Close the database connection
    await mongoose.connection.close();
    console.log("🔌 Database connection closed");
  }
};

// Run the seed function
seedDatabase();
