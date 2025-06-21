const Event = require('../models/students/event.model');

exports.getByStudentId = async (req, res) => {
  try {
    const events = await Event.find({ studentId: req.params.id });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
