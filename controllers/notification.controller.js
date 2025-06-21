const Notification = require("../models/students/notification.model");

exports.getByStudentId = async (req, res) => {
  try {
    const notes = await Notification.find({ studentId: req.params.id });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
