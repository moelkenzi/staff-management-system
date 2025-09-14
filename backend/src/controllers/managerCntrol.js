const mongoose = require("mongoose");
const Manager = require("../models/manager"); // adjust path if needed

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
// POST /managers
const createManager = async (req, res) => {
  try {
    const { name, email, number, isActive } = req.body;

    if (!name || !String(name).trim()) {
      return res.status(400).json({ message: "name is required" });
    }
    if (!email || !String(email).trim()) {
      return res.status(400).json({ message: "email is required" });
    }
    if (!number || !String(number).trim()) {
      return res.status(400).json({ message: "number is required" });
    }

    const doc = new Manager({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      number: String(number).trim(),
      isActive: parseBool(isActive) ?? true,
    });

    const saved = await doc.save();
    return res.status(201).json(saved);
  } catch (err) {
    if (err?.code === 11000) {
      if (err.keyPattern?.email) {
        return res.status(409).json({ message: "Email must be unique" });
      }
      if (err.keyPattern?.number) {
        return res.status(409).json({ message: "Number must be unique" });
      }
    }
    console.error("createManager error:", err);
    return res.status(500).json({ message: "Failed to create manager" });
  }
};

// LIST (pagination + search)
// GET /managers?q=&page=&limit=&isActive=
const listManagers = async (req, res) => {
  try {
    const page = Math.max(parseInt(req.query.page || "1", 10), 1);
    const limit = Math.min(Math.max(parseInt(req.query.limit || "20", 10), 1), 100);
    const skip = (page - 1) * limit;

    const q = (req.query.q || "").trim();
    const active = parseBool(req.query.isActive);

    const filter = {};
    if (q) {
      filter.$or = [
        { name: { $regex: q, $options: "i" } },
        { email: { $regex: q, $options: "i" } },
        { number: { $regex: q, $options: "i" } },
      ];
    }
    if (active !== undefined) filter.isActive = active;

    const [items, total] = await Promise.all([
      Manager.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
      Manager.countDocuments(filter),
    ]);

    return res.json({ items, page, limit, total });
  } catch (err) {
    console.error("listManagers error:", err);
    return res.status(500).json({ message: "Failed to fetch managers" });
  }
};

// READ single
// GET /managers/:id
const getManagerById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) return res.status(400).json({ message: "Invalid manager id" });

    const doc = await Manager.findById(id);
    if (!doc) return res.status(404).json({ message: "Manager not found" });

    return res.json(doc);
  } catch (err) {
    console.error("getManagerById error:", err);
    return res.status(500).json({ message: "Failed to fetch manager" });
  }
};

// UPDATE (partial)
// PATCH /managers/:id
const updateManager = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) return res.status(400).json({ message: "Invalid manager id" });

    const update = {};
    if (req.body.name !== undefined) update.name = String(req.body.name).trim();
    if (req.body.email !== undefined) update.email = String(req.body.email).trim().toLowerCase();
    if (req.body.number !== undefined) update.number = String(req.body.number).trim();
    if (req.body.isActive !== undefined) {
      const b = parseBool(req.body.isActive);
      if (b === undefined) return res.status(400).json({ message: "isActive must be true/false" });
      update.isActive = b;
    }

    const doc = await Manager.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
      context: "query",
    });

    if (!doc) return res.status(404).json({ message: "Manager not found" });
    return res.json(doc);
  } catch (err) {
    if (err?.code === 11000) {
      if (err.keyPattern?.email) {
        return res.status(409).json({ message: "Email must be unique" });
      }
      if (err.keyPattern?.number) {
        return res.status(409).json({ message: "Number must be unique" });
      }
    }
    console.error("updateManager error:", err);
    return res.status(500).json({ message: "Failed to update manager" });
  }
};

// DELETE
// DELETE /managers/:id
const deleteManager = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) return res.status(400).json({ message: "Invalid manager id" });

    const doc = await Manager.findByIdAndDelete(id);
    if (!doc) return res.status(404).json({ message: "Manager not found" });

    return res.json({ message: "Manager deleted successfully" });
  } catch (err) {
    console.error("deleteManager error:", err);
    return res.status(500).json({ message: "Failed to delete manager" });
  }
};

// TOGGLE ACTIVE
// PATCH /managers/:id/toggle
const toggleManagerActive = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) return res.status(400).json({ message: "Invalid manager id" });

    const current = await Manager.findById(id);
    if (!current) return res.status(404).json({ message: "Manager not found" });

    current.isActive = !current.isActive;
    await current.save();

    return res.json(current);
  } catch (err) {
    console.error("toggleManagerActive error:", err);
    return res.status(500).json({ message: "Failed to toggle manager" });
  }
};

module.exports = {
  createManager,
  listManagers,
  getManagerById,
  updateManager,
  deleteManager,
  toggleManagerActive,
};
