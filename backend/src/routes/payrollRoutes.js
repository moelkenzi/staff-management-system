const express = require("express");
const {
  createPayrollRun,
  getPayrollRuns,
  getPayrollRun,
  updatePayrollRunStatus,
  getEmployeePayroll,
  updatePayrollEntry,
  generatePayslip,
  getPayslip,
  bulkGeneratePayslips,
  getPayrollDashboard,
  getPayrollStats,
  processPayrollRun,
} = require("../controllers/payrollController");

const router = express.Router();

// Payroll routes
router.get("/dashboard", getPayrollDashboard);
router.get("/stats", getPayrollStats);
router.get("/runs", getPayrollRuns);
router.get("/runs/:id", getPayrollRun);
router.get("/staff/:staffId", getEmployeePayroll);
router.get("/payslips/:id", getPayslip);
router.post("/runs", createPayrollRun);
router.post("/runs/:id/process", processPayrollRun);
router.post("/payslips/generate", generatePayslip);
router.post("/payslips/bulk-generate", bulkGeneratePayslips);
router.put("/entries/:id", updatePayrollEntry);
router.patch("/runs/:id/status", updatePayrollRunStatus);

module.exports = router;
