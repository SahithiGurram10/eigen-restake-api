const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  walletAddress: String,
  totalReward: Number,
  rewardsByValidator: [
    {
      validatorId: String,
      amount: Number,
      timestamp: String
    }
  ]
});

module.exports = mongoose.model('Reward', rewardSchema);
