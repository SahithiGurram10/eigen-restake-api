const Reward = require('../models/Reward');

exports.getRewards = async (req, res) => {
  try {
    const reward = await Reward.findOne({ walletAddress: req.params.address });
    if (!reward) return res.status(404).json({ message: 'No rewards found for this address' });
    res.json(reward);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch rewards' });
  }
};

exports.fetchRewards = async (req, res) => {
  try {
    const mockReward = {
      walletAddress: '0xABC123',
      totalReward: 25.5,
      rewardsByValidator: [
        { validatorId: '0xVAL1', amount: 10, timestamp: '2024-12-01' },
        { validatorId: '0xVAL2', amount: 15.5, timestamp: '2025-01-15' }
      ]
    };
    await Reward.create(mockReward);
    res.json({ message: 'Mock reward data inserted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to insert reward data' });
  }
};
