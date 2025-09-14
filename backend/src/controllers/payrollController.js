const Payroll = require("../models/payroll");
const Staff = require("../models/Staff");
const { validationResult } = require("express-validator");

/**
 * @desc    Create payroll run for a specific period
 * @route   POST /api/payroll/runs
 * @access  Public
 */
const createPayrollRun = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const { month, year, employeeIds, includeBonuses = true, includeDeductions = true } = req.body;

    const payrollRun = await payrollService.createPayrollRun({
      month: parseInt(month),
      year: parseInt(year),
      employeeIds,
      includeBonuses,
      includeDeductions,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Payroll run created successfully",
      data: payrollRun,
    });
  } catch (error) {
    console.error("Error creating payroll run:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create payroll run",
      error: error.message,
    });
  }
};

/**
 * @desc    Get payroll runs with pagination
 * @route   GET /api/payroll/runs
 * @access  Public
 */
const getPayrollRuns = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      month,
      year,
      status,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query;

    const payrollRuns = await payrollService.getPayrollRuns({
      page: parseInt(page),
      limit: parseInt(limit),
      month: month ? parseInt(month) : undefined,
      year: year ? parseInt(year) : undefined,
      status,
      sortBy,
      sortOrder,
    });

    res.status(200).json({
      success: true,
      data: payrollRuns,
    });
  } catch (error) {
    console.error("Error fetching payroll runs:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch payroll runs",
      error: error.message,
    });
  }
};

/**
 * @desc    Get specific payroll run details
 * @route   GET /api/payroll/runs/:id
 * @access  Public
 */
const getPayrollRun = async (req, res) => {
  try {
    const { id } = req.params;
    const payrollRun = await payrollService.getPayrollRunById(id);

    if (!payrollRun) {
      return res.status(404).json({
        success: false,
        message: "Payroll run not found",
      });
    }

    res.status(200).json({
      success: true,
      data: payrollRun,
    });
  } catch (error) {
    console.error("Error fetching payroll run:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch payroll run",
      error: error.message,
    });
  }
};

/**
 * @desc    Update payroll run status
 * @route   PATCH /api/payroll/runs/:id/status
 * @access  Public
 */
const updatePayrollRunStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    if (!["draft", "processing", "completed", "cancelled"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    const payrollRun = await payrollService.updatePayrollRunStatus(id, {
      status,
      notes,
      updatedBy: req.user.id,
    });

    if (!payrollRun) {
      return res.status(404).json({
        success: false,
        message: "Payroll run not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Payroll run status updated successfully",
      data: payrollRun,
    });
  } catch (error) {
    console.error("Error updating payroll run status:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update payroll run status",
      error: error.message,
    });
  }
};

/**
 * @desc    Get employee payroll records
 * @route   GET /api/payroll/employee/:employeeId
 * @access  Public
 */
const getEmployeePayroll = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const { startDate, endDate, page = 1, limit = 12, status } = req.query;

    const payroll = await payrollService.getEmployeePayroll(employeeId, {
      startDate,
      endDate,
      page: parseInt(page),
      limit: parseInt(limit),
      status,
    });

    res.status(200).json({
      success: true,
      data: payroll,
    });
  } catch (error) {
    console.error("Error fetching employee payroll:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch employee payroll",
      error: error.message,
    });
  }
};

/**
 * @desc    Update payroll entry
 * @route   PUT /api/payroll/entries/:id
 * @access  Public
 */
const updatePayrollEntry = async (req, res) => {
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
    const updateData = req.body;

    const payrollEntry = await payrollService.updatePayrollEntry(id, {
      ...updateData,
      updatedBy: req.user.id,
    });

    if (!payrollEntry) {
      return res.status(404).json({
        success: false,
        message: "Payroll entry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Payroll entry updated successfully",
      data: payrollEntry,
    });
  } catch (error) {
    console.error("Error updating payroll entry:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update payroll entry",
      error: error.message,
    });
  }
};

/**
 * @desc    Generate payslip
 * @route   POST /api/payroll/payslips/generate
 * @access  Public
 */
const generatePayslip = async (req, res) => {
  try {
    const { payrollEntryId, format = "pdf" } = req.body;

    if (!["pdf", "html"].includes(format)) {
      return res.status(400).json({
        success: false,
        message: "Invalid format. Must be pdf or html",
      });
    }

    const payslip = await payrollService.generatePayslip(payrollEntryId, {
      format,
      generatedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Payslip generated successfully",
      data: payslip,
    });
  } catch (error) {
    console.error("Error generating payslip:", error);
    res.status(500).json({
      success: false,
      message: "Failed to generate payslip",
      error: error.message,
    });
  }
};

/**
 * @desc    Get payslip by ID
 * @route   GET /api/payroll/payslips/:id
 * @access  Public
 */
const getPayslip = async (req, res) => {
  try {
    const { id } = req.params;
    const payslip = await payrollService.getPayslipById(id);

    if (!payslip) {
      return res.status(404).json({
        success: false,
        message: "Payslip not found",
      });
    }

    res.status(200).json({
      success: true,
      data: payslip,
    });
  } catch (error) {
    console.error("Error fetching payslip:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch payslip",
      error: error.message,
    });
  }
};

/**
 * @desc    Bulk generate payslips
 * @route   POST /api/payroll/payslips/bulk-generate
 * @access  Public
 */
const bulkGeneratePayslips = async (req, res) => {
  try {
    const { payrollRunId, format = "pdf" } = req.body;

    const result = await payrollService.bulkGeneratePayslips(payrollRunId, {
      format,
      generatedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Bulk payslip generation initiated",
      data: result,
    });
  } catch (error) {
    console.error("Error bulk generating payslips:", error);
    res.status(500).json({
      success: false,
      message: "Failed to bulk generate payslips",
      error: error.message,
    });
  }
};

/**
 * @desc    Get payroll dashboard data
 * @route   GET /api/payroll/dashboard
 * @access  Public
 */
const getPayrollDashboard = async (req, res) => {
  try {
    const { startDate, endDate, department, groupBy = "month" } = req.query;

    const dashboard = await payrollService.getPayrollDashboard({
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
    console.error("Error fetching payroll dashboard:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch payroll dashboard",
      error: error.message,
    });
  }
};

/**
 * @desc    Get payroll statistics
 * @route   GET /api/payroll/stats
 * @access  Public
 */
const getPayrollStats = async (req, res) => {
  try {
    const { startDate, endDate, department, employeeId } = req.query;

    const stats = await payrollService.getPayrollStats({
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
    console.error("Error fetching payroll stats:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch payroll statistics",
      error: error.message,
    });
  }
};

/**
 * @desc    Process payroll run (calculate all entries)
 * @route   POST /api/payroll/runs/:id/process
 * @access  Public
 */
const processPayrollRun = async (req, res) => {
  try {
    const { id } = req.params;
    const { recalculate = false } = req.body;

    const result = await payrollService.processPayrollRun(id, {
      recalculate,
      processedBy: req.user.id,
    });

    res.status(200).json({
      success: true,
      message: "Payroll run processing initiated",
      data: result,
    });
  } catch (error) {
    console.error("Error processing payroll run:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process payroll run",
      error: error.message,
    });
  }
};

module.exports = {
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
};
