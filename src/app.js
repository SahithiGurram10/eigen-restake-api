const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const restakerRoutes = require('./routes/restakerRoutes');
const validatorRoutes = require('./routes/validatorRoutes');
const rewardRoutes = require('./routes/rewardRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/restakers', restakerRoutes);
app.use('/api/validators', validatorRoutes);
app.use('/api/rewards', rewardRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('EigenLayer Restaking Info API is running 🚀');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
