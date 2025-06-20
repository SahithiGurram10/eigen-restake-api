const express = require('express');
const router = express.Router();
const { getRestakers, fetchRestakers } = require('../controllers/restakerController');

router.get('/', getRestakers);
router.get('/fetch', fetchRestakers);

module.exports = router;
