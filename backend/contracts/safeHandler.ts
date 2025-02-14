import { ethers } from "ethers";
import Safe, { EthersAdapter } from "@safe-global/protocol-kit";
import { EnsoAPI } from "enso-sdk";

const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.alchemyapi.io/v2/YOUR_API_KEY");
const signer = provider.getSigner();
const safeSdk = new Safe(new EthersAdapter({ ethers, signer }));

async function executeTrade(amount: number, pair: string) {
  const txData = {
    to: "0xTradeExecutorAddress",
    value: ethers.utils.parseEther(amount.toString()),
    data: "0xTradeData", 
  };
  await safeSdk.createTransaction(txData);
}

async function getTradeOptions() {
  const tradeOptions = await EnsoAPI.getTradeRoutes("ETH", "cUSD");
  console.log(tradeOptions);
}

export { executeTrade, getTradeOptions };
