const mongoose = require("mongoose");

const payrollSchema = new mongoose.Schema(
  {
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    bonuses: {
      type: Number,
      default: 0,
    },
    deductions: {
      type: Number,
      default: 0,
    },
    netPay: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const Payroll = mongoose.model("Payroll", payrollSchema);

module.exports = Payroll;
