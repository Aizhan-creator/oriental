const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Parcel = require('../models/Parcel');

// нужно еще добавить скан трек номером
router.post('/scan', [
  body('trackNumber').trim().notEmpty().withMessage('Track number is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { trackNumber } = req.body;
    // добавить логику для сканирования и добавления в базу
    const parcel = new Parcel({ trackNumber });
    await parcel.save();
    res.status(201).json({ message: 'Parcel added to database' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
