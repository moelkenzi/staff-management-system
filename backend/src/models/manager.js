const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"],
    },
    number: {
      type: String, // keep as string for phone numbers
      required: true,
      trim: true,
      unique: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Manager = mongoose.model("Manager", managerSchema);
module.exports = Manager;
