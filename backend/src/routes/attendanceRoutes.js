const express = require("express");
const {
  markAttendance,
  getEmployeeAttendance,
  getTodayAttendance,
  getAttendanceDashboard,
  adjustAttendance,
  approveAttendance,
  getAttendanceStats,
  getPendingApprovals,
  bulkAttendanceOperation,
} = require("../controllers/attendanceController");

const router = express.Router();

// Attendance routes
router.post("/mark", markAttendance);
router.get("/staff/:staffId", getEmployeeAttendance);
router.get("/today", getTodayAttendance);
router.get("/dashboard", getAttendanceDashboard);
router.put("/:id/adjust", adjustAttendance);
router.patch("/:id/approve", approveAttendance);
router.get("/stats", getAttendanceStats);
router.get("/pending", getPendingApprovals);
router.post("/bulk", bulkAttendanceOperation);

module.exports = router;
