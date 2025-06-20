const Restaker = require('../models/Restaker');

exports.getRestakers = async (req, res) => {
  try {
    const restakers = await Restaker.find();
    res.json(restakers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch restakers' });
  }
};

exports.fetchRestakers = async (req, res) => {
  try {
    const mockData = [
      { userAddress: '0xABC123', amountRestaked: 10.5, validatorAddress: '0xVAL1' },
      { userAddress: '0xDEF456', amountRestaked: 20, validatorAddress: '0xVAL2' }
    ];
    await Restaker.insertMany(mockData);
    res.json({ message: 'Mock restaker data inserted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to insert mock data' });
  }
};
