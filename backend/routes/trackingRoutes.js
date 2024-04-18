const express = require('express');
const router = express.Router();
const Parcel = require('../models/Parcel');

// Получение информации о посылке по трек-номеру
router.get('/:trackNumber', async (req, res) => {
  try {
    const { trackNumber } = req.params;
    const parcel = await Parcel.findOne({ trackNumber });
    if (!parcel) {
      return res.status(404).json({ message: 'Parcel not found' });
    }
    // Возвращаем информацию о посылке
    res.json(parcel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
