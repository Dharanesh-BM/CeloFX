import { useState } from "react";
import { executeTrade, getTradeOptions } from "../../backend/contracts/safeHandler";
import { predictForexTrend } from "../../backend/contracts/tradeAI";
import { borrowStablecoin } from "../../backend/contracts/brahmafi";

function TradingDashboard() {
  const [pair, setPair] = useState("EUR/USD");
  const [amount, setAmount] = useState(1000);
  const [prediction, setPrediction] = useState("");

  const handleTrade = async () => {
    await borrowStablecoin(amount);
    await executeTrade(amount, pair);
  };

  const getAIInsight = async () => {
    const prediction = await predictForexTrend(pair);
    setPrediction(prediction);
  };

  return (
    <div>
      <h2>Forex Trading Dashboard</h2>
      <select onChange={(e) => setPair(e.target.value)}>
        <option value="EUR/USD">EUR/USD</option>
        <option value="GBP/USD">GBP/USD</option>
      </select>
      <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <button onClick={handleTrade}>Trade</button>
      <button onClick={getAIInsight}>AI Prediction</button>
      <p>AI Prediction: {prediction}</p>
    </div>
  );
}

export default TradingDashboard;
