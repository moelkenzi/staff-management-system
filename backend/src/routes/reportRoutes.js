const express = require("express");
const {
  generateAttendanceReport,
  generatePayrollReport,
  generateEmployeeReport,
  generateCustomReport,
  getReports,
  getReport,
  downloadReport,
  deleteReport,
  getReportTemplates,
  scheduleReport,
  getReportStats,
} = require("../controllers/reportController");

const router = express.Router();

// Report routes
router.get("/", getReports);
router.get("/stats", getReportStats);
router.get("/templates", getReportTemplates);
router.get("/:id", getReport);
router.get("/:id/download", downloadReport);
router.post("/attendance", generateAttendanceReport);
router.post("/payroll", generatePayrollReport);
router.post("/employees", generateEmployeeReport);
router.post("/custom", generateCustomReport);
router.post("/schedule", scheduleReport);
router.delete("/:id", deleteReport);

module.exports = router;
