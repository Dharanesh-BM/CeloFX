import { getPrediction } from "goat-ai-sdk";

async function predictForexTrend(pair: string) {
  const prediction = await getPrediction({ asset: pair, timeframe: "1h" });
  console.log(`AI Prediction for ${pair}:`, prediction);
  return prediction;
}

export { predictForexTrend };
