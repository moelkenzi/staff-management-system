const express = require("express");
const {
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
} = require("../controllers/jobsController");

const router = express.Router();

// Job routes
router.get("/", listJobs);
router.get("/stats", getJobStats);
router.get("/staff/:staffId", getEmployeeJobHistory);
router.get("/:id", getJob);
router.get("/:id/assignments", getJobAssignments);
router.post("/", createJob);
router.post("/:id/assign", assignJob);
router.put("/:id", updateJob);
router.delete("/:id/unassign", unassignJob);
router.delete("/:id", deleteJob);

module.exports = router;
