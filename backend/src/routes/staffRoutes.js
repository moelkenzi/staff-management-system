const express = require("express");
const {
  getAllStaff,
  getStaffById,
  createStaff,
  updateStaff,
  deleteStaff,
} = require("../controllers/staffController");

const router = express.Router();

// Routes
router.get("/", getAllStaff); // GET /api/staff
router.get("/:id", getStaffById); // GET /api/staff/:id
router.post("/", createStaff); // POST /api/staff
router.put("/:id", updateStaff); // PUT /api/staff/:id
router.delete("/:id", deleteStaff); // DELETE /api/staff/:id

module.exports = router;
