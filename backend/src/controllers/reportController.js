const Report = require("../models/report");
const Staff = require("../models/Staff");
const { validationResult } = require("express-validator");

/**
 * @desc    Generate attendance report
 * @route   POST /api/reports/attendance
 * @access  Public
 */
const generateAttendanceReport = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const {
      startDate,
      endDate,
      department,
      employeeIds,
      format = "pdf", // 'pdf', 'excel', 'csv'
      includeDetails = true,
      groupBy = "employee", // 'employee', 'department', 'date'
    } = req.body;

    const report = await reportService.generateAttendanceReport({
      startDate,
      endDate,
      department,
      employeeIds,
      format,
      includeDetails,
      groupBy,
      requestedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Attendance report generated successfully",
      data: report,
    });
  } catch (error) {
    console.error("Error generating attendance report:", error);
    res.status(500).json({
      success: false,
      message: "Failed to generate attendance report",
      error: error.message,
    });
  }
};

/**
 * @desc    Generate payroll report
 * @route   POST /api/reports/payroll
 * @access  Public
 */
const generatePayrollReport = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const {
      startDate,
      endDate,
      department,
      employeeIds,
      format = "pdf",
      includeBreakdown = true,
      includeDeductions = true,
      groupBy = "employee",
    } = req.body;

    const report = await reportService.generatePayrollReport({
      startDate,
      endDate,
      department,
      employeeIds,
      format,
      includeBreakdown,
      includeDeductions,
      groupBy,
      requestedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Payroll report generated successfully",
      data: report,
    });
  } catch (error) {
    console.error("Error generating payroll report:", error);
    res.status(500).json({
      success: false,
      message: "Failed to generate payroll report",
      error: error.message,
    });
  }
};

/**
 * @desc    Generate employee summary report
 * @route   POST /api/reports/employees
 * @access  Public
 */
const generateEmployeeReport = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const {
      department,
      status = "active",
      includePersonalInfo = true,
      includeSalaryInfo = true,
      includeAttendanceSummary = true,
      format = "pdf",
    } = req.body;

    const report = await reportService.generateEmployeeReport({
      department,
      status,
      includePersonalInfo,
      includeSalaryInfo,
      includeAttendanceSummary,
      format,
      requestedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Employee report generated successfully",
      data: report,
    });
  } catch (error) {
    console.error("Error generating employee report:", error);
    res.status(500).json({
      success: false,
      message: "Failed to generate employee report",
      error: error.message,
    });
  }
};

/**
 * @desc    Generate custom report
 * @route   POST /api/reports/custom
 * @access  Public
 */
const generateCustomReport = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const {
      reportType,
      filters,
      columns,
      format = "pdf",
      groupBy,
      sortBy,
      sortOrder = "asc",
    } = req.body;

    const report = await reportService.generateCustomReport({
      reportType,
      filters,
      columns,
      format,
      groupBy,
      sortBy,
      sortOrder,
      requestedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Custom report generated successfully",
      data: report,
    });
  } catch (error) {
    console.error("Error generating custom report:", error);
    res.status(500).json({
      success: false,
      message: "Failed to generate custom report",
      error: error.message,
    });
  }
};

/**
 * @desc    Get all generated reports
 * @route   GET /api/reports
 * @access  Public
 */
const getReports = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      type,
      status,
      startDate,
      endDate,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query;

    const reports = await reportService.getReports({
      page: parseInt(page),
      limit: parseInt(limit),
      type,
      status,
      startDate,
      endDate,
      sortBy,
      sortOrder,
    });

    res.status(200).json({
      success: true,
      data: reports,
    });
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch reports",
      error: error.message,
    });
  }
};

/**
 * @desc    Get specific report by ID
 * @route   GET /api/reports/:id
 * @access  Public
 */
const getReport = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await reportService.getReportById(id);

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found",
      });
    }

    res.status(200).json({
      success: true,
      data: report,
    });
  } catch (error) {
    console.error("Error fetching report:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch report",
      error: error.message,
    });
  }
};

/**
 * @desc    Download report file
 * @route   GET /api/reports/:id/download
 * @access  Public
 */
const downloadReport = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await reportService.getReportById(id);

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found",
      });
    }

    if (report.status !== "completed") {
      return res.status(400).json({
        success: false,
        message: "Report is not ready for download",
      });
    }

    // Set appropriate headers for file download
    res.setHeader("Content-Type", report.mimeType);
    res.setHeader("Content-Disposition", `attachment; filename="${report.filename}"`);

    // Stream the file to response
    const fileStream = await reportService.getReportFileStream(report.filePath);
    fileStream.pipe(res);
  } catch (error) {
    console.error("Error downloading report:", error);
    res.status(500).json({
      success: false,
      message: "Failed to download report",
      error: error.message,
    });
  }
};

/**
 * @desc    Delete report
 * @route   DELETE /api/reports/:id
 * @access  Public
 */
const deleteReport = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await reportService.deleteReport(id, req.user.id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Report not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Report deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting report:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete report",
      error: error.message,
    });
  }
};

/**
 * @desc    Get report templates
 * @route   GET /api/reports/templates
 * @access  Public
 */
const getReportTemplates = async (req, res) => {
  try {
    const templates = await reportService.getReportTemplates();

    res.status(200).json({
      success: true,
      data: templates,
    });
  } catch (error) {
    console.error("Error fetching report templates:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch report templates",
      error: error.message,
    });
  }
};

/**
 * @desc    Schedule recurring report
 * @route   POST /api/reports/schedule
 * @access  Public
 */
const scheduleReport = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const {
      reportType,
      schedule, // 'daily', 'weekly', 'monthly'
      dayOfWeek, // for weekly
      dayOfMonth, // for monthly
      time, // HH:MM format
      emailRecipients,
      reportConfig,
    } = req.body;

    const scheduledReport = await reportService.scheduleReport({
      reportType,
      schedule,
      dayOfWeek,
      dayOfMonth,
      time,
      emailRecipients,
      reportConfig,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Report scheduled successfully",
      data: scheduledReport,
    });
  } catch (error) {
    console.error("Error scheduling report:", error);
    res.status(500).json({
      success: false,
      message: "Failed to schedule report",
      error: error.message,
    });
  }
};

/**
 * @desc    Get report statistics
 * @route   GET /api/reports/stats
 * @access  Public
 */
const getReportStats = async (req, res) => {
  try {
    const { startDate, endDate, type } = req.query;

    const stats = await reportService.getReportStats({
      startDate,
      endDate,
      type,
    });

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error("Error fetching report stats:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch report statistics",
      error: error.message,
    });
  }
};

module.exports = {
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
};
