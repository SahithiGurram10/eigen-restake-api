const mongoose = require('mongoose');

const restakerSchema = new mongoose.Schema({
  userAddress: String,
  amountRestaked: Number,
  validatorAddress: String
});

module.exports = mongoose.model('Restaker', restakerSchema);
