const Attendance = require("../models/attendance");
const Staff = require("../models/Staff");
const { validationResult } = require("express-validator");

/**
 * @desc    Mark attendance (clock-in/clock-out)
 * @route   POST /api/attendance/mark
 * @access  Public
 */
const markAttendance = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const { staffId, type, location, notes } = req.body;

    // Verify staff exists
    const staff = await Staff.findById(staffId);
    if (!staff) {
      return res.status(404).json({
        success: false,
        message: "Staff member not found",
      });
    }

    const attendance = new Attendance({
      employeeId: staffId,
      date: new Date(),
      checkInTime: new Date().toTimeString().split(" ")[0],
      status: type === "clock-in" ? "on time" : "on time",
    });

    await attendance.save();

    res.status(201).json({
      success: true,
      message: `${type} recorded successfully`,
      data: attendance,
    });
  } catch (error) {
    console.error("Error marking attendance:", error);
    res.status(500).json({
      success: false,
      message: "Failed to mark attendance",
      error: error.message,
    });
  }
};

/**
 * @desc    Get attendance records for an employee
 * @route   GET /api/attendance/employee/:employeeId
 * @access  Private (Employee/HR/Admin)
 */
const getEmployeeAttendance = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const {
      startDate,
      endDate,
      page = 1,
      limit = 30,
      status, // 'present', 'absent', 'late', 'half-day'
    } = req.query;

    const attendance = await attendanceService.getEmployeeAttendance(employeeId, {
      startDate,
      endDate,
      page: parseInt(page),
      limit: parseInt(limit),
      status,
    });

    res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    console.error("Error fetching employee attendance:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch attendance records",
      error: error.message,
    });
  }
};

/**
 * @desc    Get today's attendance summary
 * @route   GET /api/attendance/today
 * @access  Public
 */
const getTodayAttendance = async (req, res) => {
  try {
    const { department, status } = req.query;
    const today = new Date().toISOString().split("T")[0];

    const attendance = await attendanceService.getTodayAttendance({
      date: today,
      department,
      status,
    });

    res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    console.error("Error fetching today's attendance:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch today's attendance",
      error: error.message,
    });
  }
};

/**
 * @desc    Get attendance dashboard data
 * @route   GET /api/attendance/dashboard
 * @access  Public
 */
const getAttendanceDashboard = async (req, res) => {
  try {
    const {
      startDate,
      endDate,
      department,
      groupBy = "day", // 'day', 'week', 'month'
    } = req.query;

    const dashboard = await attendanceService.getAttendanceDashboard({
      startDate,
      endDate,
      department,
      groupBy,
    });

    res.status(200).json({
      success: true,
      data: dashboard,
    });
  } catch (error) {
    console.error("Error fetching attendance dashboard:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch attendance dashboard",
      error: error.message,
    });
  }
};

/**
 * @desc    Manual attendance adjustment by HR
 * @route   PUT /api/attendance/:id/adjust
 * @access  Public
 */
const adjustAttendance = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const { id } = req.params;
    const { clockInTime, clockOutTime, status, reason, approvedBy } = req.body;

    const attendance = await attendanceService.adjustAttendance(id, {
      clockInTime,
      clockOutTime,
      status,
      reason,
      approvedBy,
    });

    if (!attendance) {
      return res.status(404).json({
        success: false,
        message: "Attendance record not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Attendance adjusted successfully",
      data: attendance,
    });
  } catch (error) {
    console.error("Error adjusting attendance:", error);
    res.status(500).json({
      success: false,
      message: "Failed to adjust attendance",
      error: error.message,
    });
  }
};

/**
 * @desc    Approve/reject attendance requests
 * @route   PATCH /api/attendance/:id/approve
 * @access  Public
 */
const approveAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const { action, reason } = req.body; // action: 'approve' or 'reject'

    if (!["approve", "reject"].includes(action)) {
      return res.status(400).json({
        success: false,
        message: "Invalid action. Must be approve or reject",
      });
    }

    const attendance = await attendanceService.approveAttendance(id, {
      action,
      reason,
      approvedBy: req.user.id,
    });

    if (!attendance) {
      return res.status(404).json({
        success: false,
        message: "Attendance record not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `Attendance ${action}d successfully`,
      data: attendance,
    });
  } catch (error) {
    console.error("Error approving attendance:", error);
    res.status(500).json({
      success: false,
      message: "Failed to approve attendance",
      error: error.message,
    });
  }
};

/**
 * @desc    Get attendance statistics
 * @route   GET /api/attendance/stats
 * @access  Public
 */
const getAttendanceStats = async (req, res) => {
  try {
    const { startDate, endDate, department, employeeId } = req.query;

    const stats = await attendanceService.getAttendanceStats({
      startDate,
      endDate,
      department,
      employeeId,
    });

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error("Error fetching attendance stats:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch attendance statistics",
      error: error.message,
    });
  }
};

/**
 * @desc    Get pending attendance approvals
 * @route   GET /api/attendance/pending
 * @access  Public
 */
const getPendingApprovals = async (req, res) => {
  try {
    const { page = 1, limit = 20, department } = req.query;

    const pending = await attendanceService.getPendingApprovals({
      page: parseInt(page),
      limit: parseInt(limit),
      department,
    });

    res.status(200).json({
      success: true,
      data: pending,
    });
  } catch (error) {
    console.error("Error fetching pending approvals:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch pending approvals",
      error: error.message,
    });
  }
};

/**
 * @desc    Bulk attendance operations
 * @route   POST /api/attendance/bulk
 * @access  Public
 */
const bulkAttendanceOperation = async (req, res) => {
  try {
    const { operation, employeeIds, data } = req.body;

    if (!["mark-present", "mark-absent", "approve-all", "reject-all"].includes(operation)) {
      return res.status(400).json({
        success: false,
        message: "Invalid operation",
      });
    }

    const result = await attendanceService.bulkAttendanceOperation({
      operation,
      employeeIds,
      data,
      performedBy: req.user.id,
    });

    res.status(200).json({
      success: true,
      message: "Bulk operation completed",
      data: result,
    });
  } catch (error) {
    console.error("Error performing bulk operation:", error);
    res.status(500).json({
      success: false,
      message: "Failed to perform bulk operation",
      error: error.message,
    });
  }
};

module.exports = {
  markAttendance,
  getEmployeeAttendance,
  getTodayAttendance,
  getAttendanceDashboard,
  adjustAttendance,
  approveAttendance,
  getAttendanceStats,
  getPendingApprovals,
  bulkAttendanceOperation,
};
