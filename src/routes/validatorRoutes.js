const express = require('express');
const router = express.Router();
const { getValidators, fetchValidators } = require('../controllers/validatorController');

router.get('/', getValidators);
router.get('/fetch', fetchValidators);

module.exports = router;
