# CeloFX

CeloFX is a **DeFi-powered AI-driven Forex Trading platform** that integrates **Safe wallets, Enso trade automation, BrahmaFi lending, and AI-driven trade predictions**. It is designed to qualify for multiple hackathon tracks, leveraging **Rust/Stylus smart contracts, AI-powered trading, and DeFi integrations**.

---

## 🚀 Features
- **AI-Powered Forex Predictions** using **GOAT plug-ins**.
- **Secure Wallet Management** with **Gnosis Safe & Enso API**.
- **Forex Trading Smart Contracts** built using **Rust & Stylus on Arbitrum**.
- **Stablecoin Lending for Forex** via **BrahmaFi on Sei**.
- **Intuitive Trading Dashboard** with seamless execution & analytics.

---

## 🎯 Hackathon Track Eligibility

| **Track** | **Implementation** | **File** |
|-----------|--------------------|----------|
| ✅ AI Advancement: Rust/Stylus Agent (Arbitrum) | Stylus Smart Contract for forex trading | `backend/contracts/trading.styl` |
| ✅ DeFAI: Safe & Enso (Enso) | Safe Wallet & Enso trade automation | `backend/contracts/safeHandler.ts` |
| ✅ AI Advancement - GOAT Plug-ins (Sei) | AI forex trading using GOAT | `backend/contracts/tradeAI.ts` |
| ✅ DeFAI - BrahmaFi on Sei (Sei) | BrahmaFi lending for forex | `backend/contracts/brahmafi.ts` |

---

## 📂 Folder Structure
```
CeloFX/
│── backend/
│   ├── contracts/
│   │   ├── trading.styl   (Stylus Smart Contract for Trading)
│   │   ├── safeHandler.ts (Safe Wallet Integration)
│   │   ├── brahmafi.ts    (BrahmaFi Money Market)
│   │   ├── tradeAI.ts     (GOAT Plug-in for AI Trading)
│   ├── index.js
│── frontend/
│   ├── components/
│   │   ├── WalletConnect.tsx   (Safe Wallet & MetaMask Connection)
│   │   ├── TradingDashboard.tsx (Forex Trading Interface)
│   │   ├── AITradePredictor.tsx (AI Forex Trading via GOAT Plug-in)
│   ├── App.tsx
│── package.json
│── README.md
```

---

## 🛠 Setup & Deployment

### 🔹 Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/celofx.git
   cd celofx/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up **Arbitrum Stylus Contract**:
   - Deploy `trading.styl` using `stylus-cli`:
     ```sh
     stylus-cli deploy contracts/trading.styl
     ```
4. Run backend server:
   ```sh
   node index.js
   ```

### 🔹 Frontend Setup
1. Navigate to frontend:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the React frontend:
   ```sh
   npm start
   ```

---

## 📌 Key Implementations

### **1️⃣ Rust/Stylus Smart Contract (Arbitrum)**
- **File:** `backend/contracts/trading.styl`
- **Purpose:** Implements trading logic securely on Arbitrum using **Rust & Stylus**.

### **2️⃣ Safe & Enso DeFi Wallet Integration**
- **File:** `backend/contracts/safeHandler.ts`
- **Purpose:** Uses **Safe Wallet for secure transactions** and **Enso API for automated trade execution**.

### **3️⃣ AI Forex Prediction (GOAT Plug-in on Sei)**
- **File:** `backend/contracts/tradeAI.ts`
- **Purpose:** Predicts forex price trends using **GOAT AI plug-in**.

### **4️⃣ BrahmaFi Stablecoin Lending (Sei)**
- **File:** `backend/contracts/brahmafi.ts`
- **Purpose:** Provides **cUSD liquidity for forex trading** through **BrahmaFi lending protocol**.

---

## 🎯 Future Enhancements
- **Support for more currency pairs & AI fine-tuning**.
- **Cross-chain integration with other DeFi protocols**.
- **Leverage zero-knowledge proofs for privacy-enhanced trading**.

---

## 📜 License
This project is licensed under the **MIT License**.

---

🤝 **Open to collaborations! Feel free to fork & contribute.** 🚀

