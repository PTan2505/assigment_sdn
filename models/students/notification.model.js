const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: String,
    content: String,
    type: String, // "tiêm chủng", "kiểm tra sức khỏe"
    date: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);
