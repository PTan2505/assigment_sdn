const express = require('express');
const router = express.Router();
const controller = require('../controllers/healthRecord.controller');

router.get('/:id', controller.getByStudentId);

module.exports = router;
