const Validator = require('../models/Validator');

exports.getValidators = async (req, res) => {
  try {
    const validators = await Validator.find();
    res.json(validators);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch validators' });
  }
};

exports.fetchValidators = async (req, res) => {
  try {
    const mockData = [
      {
        operatorId: '0xVAL1',
        totalDelegated: 100,
        status: 'active',
        slashHistory: [
          { date: '2024-12-01', amount: 10, reason: 'Downtime' }
        ]
      }
    ];
    await Validator.insertMany(mockData);
    res.json({ message: 'Mock validator data inserted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to insert validator data' });
  }
};
