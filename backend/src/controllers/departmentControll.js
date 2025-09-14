// controllers/department.controller.js
const mongoose = require("mongoose");
const Department = require("../models/department"); // adjust the path if needed

// ---- helpers ----
const isValidObjectId = (v) => mongoose.Types.ObjectId.isValid(v);
const parseBool = (v) => {
  if (v === undefined || v === null) return undefined;
  if (typeof v === "boolean") return v;
  const s = String(v).toLowerCase().trim();
  if (s === "true" || s === "1") return true;
  if (s === "false" || s === "0") return false;
  return undefined;
};

// CREATE
// POST /departments
const createDepartment = async (req, res) => {
  try {
    const { name, description, managerId, isActive } = req.body;

    if (!name || !String(name).trim()) {
      return res.status(400).json({ message: "name is required" });
    }

    if (managerId && !isValidObjectId(managerId)) {
      return res.status(400).json({ message: "managerId must be a valid ObjectId" });
    }

    const doc = new Department({
      name: String(name).trim(),
      description: description ?? "",
      managerId: managerId || undefined,
      isActive: parseBool(isActive) ?? true,
    });

    const saved = await doc.save();
    return res.status(201).json(saved);
  } catch (err) {
    // duplicate key (unique name)
    if (err?.code === 11000 && err?.keyPattern?.name) {
      return res.status(409).json({ message: "Department name must be unique" });
    }
    console.error("createDepartment error:", err);
    return res.status(500).json({ message: "Failed to create department" });
  }
};

// READ (list with pagination & filters)
// GET /departments?Page=&limit=&q=&isActive=&managerId=
const listDepartments = async (req, res) => {
  try {
    const page = Math.max(parseInt(req.query.page || "1", 10), 1);
    const limit = Math.min(Math.max(parseInt(req.query.limit || "20", 10), 1), 100);

    const q = (req.query.q || "").trim();
    const activeFilter = parseBool(req.query.isActive);
    const managerId = req.query.managerId;

    const filter = {};
    if (q) filter.name = { $regex: q, $options: "i" };
    if (activeFilter !== undefined) filter.isActive = activeFilter;
    if (managerId && isValidObjectId(managerId)) filter.managerId = managerId;

    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Department.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
      Department.countDocuments(filter),
    ]);

    return res.json({ items, page, limit, total });
  } catch (err) {
    console.error("listDepartments error:", err);
    return res.status(500).json({ message: "Failed to fetch departments" });
  }
};

// READ (single)
// GET /departments/:id
const getDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid department id" });
    }

    const doc = await Department.findById(id);
    if (!doc) return res.status(404).json({ message: "Department not found" });

    return res.json(doc);
  } catch (err) {
    console.error("getDepartmentById error:", err);
    return res.status(500).json({ message: "Failed to fetch department" });
  }
};

// UPDATE (partial)
// PATCH /departments/:id
const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid department id" });
    }

    const update = {};
    if (req.body.name !== undefined) update.name = String(req.body.name).trim();
    if (req.body.description !== undefined) update.description = req.body.description;
    if (req.body.isActive !== undefined) {
      const b = parseBool(req.body.isActive);
      if (b === undefined) {
        return res.status(400).json({ message: "isActive must be true/false" });
      }
      update.isActive = b;
    }
    if (req.body.managerId !== undefined) {
      if (req.body.managerId && !isValidObjectId(req.body.managerId)) {
        return res.status(400).json({ message: "managerId must be a valid ObjectId" });
      }
      update.managerId = req.body.managerId || undefined;
    }

    const doc = await Department.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
      context: "query",
    });

    if (!doc) return res.status(404).json({ message: "Department not found" });
    return res.json(doc);
  } catch (err) {
    if (err?.code === 11000 && err?.keyPattern?.name) {
      return res.status(409).json({ message: "Department name must be unique" });
    }
    console.error("updateDepartment error:", err);
    return res.status(500).json({ message: "Failed to update department" });
  }
};

// DELETE (hard)
// DELETE /departments/:id
const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid department id" });
    }

    const doc = await Department.findByIdAndDelete(id);
    if (!doc) return res.status(404).json({ message: "Department not found" });

    return res.json({ message: "Department deleted successfully" });
  } catch (err) {
    console.error("deleteDepartment error:", err);
    return res.status(500).json({ message: "Failed to delete department" });
  }
};

// (Optional) TOGGLE ACTIVE
// PATCH /departments/:id/toggle
const toggleDepartmentActive = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid department id" });
    }

    const current = await Department.findById(id);
    if (!current) return res.status(404).json({ message: "Department not found" });

    current.isActive = !current.isActive;
    await current.save();

    return res.json(current);
  } catch (err) {
    console.error("toggleDepartmentActive error:", err);
    return res.status(500).json({ message: "Failed to toggle department" });
  }
};

module.exports = {
  createDepartment,
  listDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
  toggleDepartmentActive, // optional helper
};
