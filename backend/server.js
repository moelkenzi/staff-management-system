const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import routes
const staffRoutes = require("./src/routes/staffRoutes");
const attendanceRoutes = require("./src/routes/attendanceRoutes");
const jobRoutes = require("./src/routes/jobRoutes");
const payrollRoutes = require("./src/routes/payrollRoutes");
const reportRoutes = require("./src/routes/reportRoutes");
const departmentRoute = require("./src/routes/departmentRoute");
const managerRouter = require("./src/routes/managerRouter");

const app = express();
const PORT = process.env.  PORT || 6000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/staff-ms")
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });

// Routes
app.get("/health", (req, res) => {
  res.json({
    message: "Server is running",
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/api/staff", staffRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/payroll", payrollRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/departments", departmentRoute);
app.use("/api/Manager", managerRouter);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📋 Health check: http://localhost:${PORT}/health`);
  console.log(`👥 Staff API: http://localhost:${PORT}/api/staff`);
  console.log(`⏰ Attendance API: http://localhost:${PORT}/api/attendance`);
  console.log(`💼 Jobs API: http://localhost:${PORT}/api/jobs`);
  console.log(`💰 Payroll API: http://localhost:${PORT}/api/payroll`);
  console.log(`📊 Reports API: http://localhost:${PORT}/api/reports`);
});
