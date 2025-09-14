const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    checkInTime: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["on time", "late"],
      default: "on time",
    },
  },
  { timestamps: true },
);

const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;
