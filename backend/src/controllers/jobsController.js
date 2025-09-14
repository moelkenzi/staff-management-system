const Job = require("../models/job");
const Staff = require("../models/Staff");
const Department = require("../models/department");
const { validationResult } = require("express-validator");

/**
 * @desc    Get all jobs with pagination and filtering
 * @route   GET /api/jobs
 * @access  Public
 */
const listJobs = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      department,
      status = "active",
      search,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query;

    const filters = {
      department,
      status,
      search,
    };

    // Build query
    let query = {};
    if (filters.department) {
      const department = await Department.findOne({ name: filters.department });
      if (department) {
        query.departmentId = department._id;
      }
    }
    if (filters.status) {
      query.status = filters.status;
    }
    if (filters.search) {
      query.$or = [
        { title: { $regex: filters.search, $options: "i" } },
        { description: { $regex: filters.search, $options: "i" } },
      ];
    }

    // Get jobs with pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const jobs = await Job.find(query)
      .populate("departmentId", "name")
      .populate("postedBy", "name email")
      .sort({ [sortBy]: sortOrder === "desc" ? -1 : 1 })
      .skip(skip)
      .limit(parseInt(limit));

    const totalJobs = await Job.countDocuments(query);
    const totalPages = Math.ceil(totalJobs / parseInt(limit));

    const result = {
      jobs,
      currentPage: parseInt(page),
      totalPages,
      totalJobs,
      hasNext: parseInt(page) < totalPages,
      hasPrev: parseInt(page) > 1,
    };

    res.status(200).json({
      success: true,
      data: result.jobs,
      pagination: {
        currentPage: result.currentPage,
        totalPages: result.totalPages,
        totalJobs: result.totalJobs,
        hasNext: result.hasNext,
        hasPrev: result.hasPrev,
      },
    });
  } catch (error) {
    console.error("Error listing jobs:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
      error: error.message,
    });
  }
};

/**
 * @desc    Get single job by ID
 * @route   GET /api/jobs/:id
 * @access  Public
 */
const getJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id)
      .populate("departmentId", "name")
      .populate("postedBy", "name email");

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    console.error("Error fetching job:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch job",
      error: error.message,
    });
  }
};

/**
 * @desc    Create new job
 * @route   POST /api/jobs
 * @access  Public
 */
const createJob = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const jobData = req.body;
    const job = new Job(jobData);
    await job.save();

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: job,
    });
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create job",
      error: error.message,
    });
  }
};

/**
 * @desc    Update job
 * @route   PUT /api/jobs/:id
 * @access  Public
 */
const updateJob = async (req, res) => {
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

    const job = await Job.findByIdAndUpdate(id, updateData, { new: true, runValidators: true })
      .populate("departmentId", "name")
      .populate("postedBy", "name email");

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      data: job,
    });
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update job",
      error: error.message,
    });
  }
};

/**
 * @desc    Delete job
 * @route   DELETE /api/jobs/:id
 * @access  Public
 */
const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Job.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete job",
      error: error.message,
    });
  }
};

/**
 * @desc    Assign employee to job
 * @route   POST /api/jobs/:id/assign
 * @access  Public
 */
const assignJob = async (req, res) => {
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
    const { staffId, startDate, endDate, notes } = req.body;

    // Verify staff exists
    const staff = await Staff.findById(staffId);
    if (!staff) {
      return res.status(404).json({
        success: false,
        message: "Staff member not found",
      });
    }

    // For now, just return success - job assignment logic can be added later
    const assignment = {
      jobId: id,
      staffId,
      startDate,
      endDate,
      notes,
      assignedAt: new Date(),
    };

    res.status(201).json({
      success: true,
      message: "Employee assigned to job successfully",
      data: assignment,
    });
  } catch (error) {
    console.error("Error assigning job:", error);
    res.status(500).json({
      success: false,
      message: "Failed to assign job",
      error: error.message,
    });
  }
};

/**
 * @desc    Unassign employee from job
 * @route   DELETE /api/jobs/:id/unassign
 * @access  Public
 */
const unassignJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { staffId, endDate, reason } = req.body;

    // For now, just return success - job unassignment logic can be added later
    const result = {
      jobId: id,
      staffId,
      endDate,
      reason,
      unassignedAt: new Date(),
    };

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Job assignment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee unassigned from job successfully",
    });
  } catch (error) {
    console.error("Error unassigning job:", error);
    res.status(500).json({
      success: false,
      message: "Failed to unassign job",
      error: error.message,
    });
  }
};

/**
 * @desc    Get job assignments
 * @route   GET /api/jobs/:id/assignments
 * @access  Public
 */
const getJobAssignments = async (req, res) => {
  try {
    const { id } = req.params;
    const { page = 1, limit = 20, status } = req.query;

    // For now, return empty assignments - can be implemented later
    const assignments = {
      assignments: [],
      pagination: {
        currentPage: parseInt(page),
        totalPages: 0,
        totalAssignments: 0,
        hasNext: false,
        hasPrev: false,
      },
    };

    res.status(200).json({
      success: true,
      data: assignments,
    });
  } catch (error) {
    console.error("Error fetching job assignments:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch job assignments",
      error: error.message,
    });
  }
};

/**
 * @desc    Get employee job history
 * @route   GET /api/jobs/staff/:staffId
 * @access  Public
 */
const getEmployeeJobHistory = async (req, res) => {
  try {
    const { staffId } = req.params;
    const { page = 1, limit = 20, status } = req.query;

    // For now, return empty history - can be implemented later
    const history = {
      jobs: [],
      pagination: {
        currentPage: parseInt(page),
        totalPages: 0,
        totalJobs: 0,
        hasNext: false,
        hasPrev: false,
      },
    };

    res.status(200).json({
      success: true,
      data: history,
    });
  } catch (error) {
    console.error("Error fetching employee job history:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch employee job history",
      error: error.message,
    });
  }
};

/**
 * @desc    Get job statistics
 * @route   GET /api/jobs/stats
 * @access  Public
 */
const getJobStats = async (req, res) => {
  try {
    const { department, startDate, endDate } = req.query;

    // Basic stats implementation
    const totalJobs = await Job.countDocuments();
    const activeJobs = await Job.countDocuments({ status: "active" });

    const stats = {
      totalJobs,
      activeJobs,
      inactiveJobs: totalJobs - activeJobs,
      department: department || "All",
    };

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error("Error fetching job stats:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch job statistics",
      error: error.message,
    });
  }
};

module.exports = {
  listJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  assignJob,
  unassignJob,
  getJobAssignments,
  getEmployeeJobHistory,
  getJobStats,
};
