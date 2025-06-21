const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    eventType: String, // ví dụ: "Khám định kỳ"
    description: String,
    date: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("MedicalEvent", EventSchema);
