const mongoose = require('mongoose');

const validatorSchema = new mongoose.Schema({
  operatorId: String,
  totalDelegated: Number,
  status: String,
  slashHistory: [
    {
      date: String,
      amount: Number,
      reason: String
    }
  ]
});

module.exports = mongoose.model('Validator', validatorSchema);
