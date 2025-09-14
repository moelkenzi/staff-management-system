const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["attendance", "payroll"],
      required: true,
    },
    fromDate: {
      type: Date,
      required: true,
    },
    toDate: {
      type: Date,
      required: true,
    },
    generatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
  },
  { timestamps: true },
);

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
