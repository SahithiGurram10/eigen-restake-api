#  Build a Restaking Info API from EigenLayer


This is a **Node.js REST API** that displays restaking activity from EigenLayer. Currently, it uses mocked data. It provides endpoints to view and manage restaker details, validator metadata, and reward information.

---

## 🛠 Tech Stack

- Node.js + Express  
- MongoDB + Mongoose  
- Axios  
- dotenv  
- Postman (for testing)

---

## 📁 Project Structure

```
eigen-restake-api/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── app.js
├── config/
│   └── db.js
├── .env
├── package.json
└── README.md
```

---

## 🚀 API Endpoints

### 👤 Restakers

- **GET** `/api/restakers`  
  Returns all users who have restaked their stETH.

  **Response:**
  ```json
  [
    {
      "userAddress": "0xABC123",
      "amountRestaked": 10.5,
      "validatorAddress": "0xVAL1"
    }
  ]
  ```

- **GET** `/api/restakers/fetch`  
  Fetches mock restaker data and stores it in MongoDB.

---

### 🧑‍🔧 Validators

- **GET** `/api/validators`  
  Returns validator/operator metadata.

  **Response:**
  ```json
  [
    {
      "operatorId": "0xVAL1",
      "totalDelegated": 100,
      "status": "active",
      "slashHistory": [
        {
          "date": "2024-12-01",
          "amount": 10,
          "reason": "Downtime"
        }
      ]
    }
  ]
  ```

- **GET** `/api/validators/fetch`  
  Fetches mock validator data and stores it in MongoDB.

---

### 💰 Rewards

- **GET** `/api/rewards/:address`  
  Returns reward info for a given wallet address.

  **Example:** `/api/rewards/0xABC123`

  **Response:**
  ```json
  {
    "walletAddress": "0xABC123",
    "totalReward": 25.5,
    "rewardsByValidator": [
      {
        "validatorId": "0xVAL1",
        "amount": 10,
        "timestamp": "2024-12-01"
      },
      {
        "validatorId": "0xVAL2",
        "amount": 15.5,
        "timestamp": "2025-01-15"
      }
    ]
  }
  ```

- **GET** `/api/rewards/fetch`  
  Fetches and stores mock reward data in MongoDB.

---

## 🧪 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/nandaKishore536/zeru-Assignment
cd eigen-restake-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the root with the following:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/eigenrestake
```

### 4. Start MongoDB

Make sure MongoDB is running:

```bash
mongod
```

### 5. Start the Server

```bash
node src/app.js
```

---

## 📬 Testing with Postman

Use the following endpoints in Postman:

### To Insert Mock Data:

- `GET /api/restakers/fetch`
- `GET /api/validators/fetch`
- `GET /api/rewards/fetch`

### To View Stored Data:

- `GET /api/restakers`
- `GET /api/validators`
- `GET /api/rewards/:address`

---

## 📌 Notes

- All data is currently mocked for demonstration purposes.
- Make sure MongoDB is running before using fetch endpoints.
- You can extend the models/controllers to pull real data from an actual subgraph or EigenLayer API.
