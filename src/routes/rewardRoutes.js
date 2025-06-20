const express = require('express');
const router = express.Router();
const { getRewards, fetchRewards } = require('../controllers/rewardController');

router.get('/:address', getRewards);
router.get('/fetch', fetchRewards);

module.exports = router;
