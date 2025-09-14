// Router/department/departmentRouter.js
const express = require("express");
const {
  createDepartment,
  listDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
  toggleDepartmentActive,
} = require("../controllers/departmentControll"); // <- adjust path if needed

// Optional: protect routes
// const { verifyToken, isAdmin } = require("../../middleWare/Auth"); // <- adjust path if needed

const router = express.Router();

/* =========================
   RESTful endpoints
   ========================= */
// Create
router.post("/departments", createDepartment);

// List (supports ?page=&limit=&q=&isActive=&managerId=)
router.get("/", listDepartments);

// Read single
router.get("/:id", getDepartmentById);

// Update (partial)
router.patch("/:id", updateDepartment);

// Delete
router.delete("/:id", deleteDepartment);

// Toggle active
router.patch("/departments/:id/toggle" , toggleDepartmentActive);


/* =========================
   Legacy-style aliases (optional)
   Keep these if your frontend already calls them
   ========================= */
// router.post("/createDepartment/Department", verifyToken, isAdmin, createDepartment);
// router.get("/readDepartment/Department", verifyToken, listDepartments);
// router.get("/readDepartmentSingal/Department/:id", verifyToken, getDepartmentById);
// router.patch("/updateDepartment/Department/:id", verifyToken, isAdmin, updateDepartment);
// router.delete("/deleteDepartment/Department/:id", verifyToken, isAdmin, deleteDepartment);
// router.patch("/toggleDepartment/Department/:id", toggleDepartmentActive);

module.exports = router;
