const mongoose = require("mongoose");

const HealthRecordSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    allergies: [String],
    diseaseHistory: [String],
    checkupResults: String,
    vaccinations: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("HealthRecord", HealthRecordSchema);
