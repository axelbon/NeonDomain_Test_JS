const express = require('express');
const router = express.Router();
const summaryController = require('../controllers/summaryController');

router.get('/', summaryController.getAllSummaries);
router.get('/:id', summaryController.getSummaryById);
router.post('/', summaryController.createSummary);
router.patch('/:id', summaryController.updateSummary);
router.delete('/:id', summaryController.deleteSummary);

module.exports = router;