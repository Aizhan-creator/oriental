const express = require('express');
const router = express.Router();
const moderatorController = require('../controllers/moderatorController');

router.get('/requests', moderatorController.getRequests);
router.put('/approve/:id', moderatorController.approveRequest);

module.exports = router;
