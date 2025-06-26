const HealthRecord = require("../models/students/healthRecord.model");

exports.getByStudentId = async (req, res) => {
  try {
    const record = await HealthRecord.findOne({ studentId: req.params.id });
    if (!record)
      return res.status(404).json({ message: "Không tìm thấy hồ sơ" });
    res.json(record);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
