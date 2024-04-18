const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.patch('/activate/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.verified = true;
    await user.save();
    res.json({ message: 'User activated successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
