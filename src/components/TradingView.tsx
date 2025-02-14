import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useSimulatedPrice } from '../hooks/useSimulatedPrice';
import PriceChart from './PriceChart';

const TradingView: React.FC = () => {
  const eurUsd = useSimulatedPrice(1.0924);
  const [chartData, setChartData] = useState<Array<{ time: string; value: number }>>([]);

  useEffect(() => {
    const now = new Date().toISOString();
    setChartData(prev => {
      const newData = [...prev, { time: now, value: parseFloat(eurUsd.price) }];
      return newData.slice(-50); // Keep last 50 points for better performance
    });
  }, [eurUsd.price]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Chart Section */}
      <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-xl font-bold mb-4">EUR/USD</h2>
        <PriceChart data={chartData} />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-400">Current Price</p>
            <p className="text-2xl font-bold">{eurUsd.price}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-400">24h Change</p>
            <p className={`text-2xl font-bold ${
              eurUsd.trending === 'up' ? 'text-green-500' : 'text-red-500'
            }`}>{eurUsd.change}</p>
          </div>
        </div>
      </div>

      {/* Trading Panel */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-xl font-bold mb-4">Place Order</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Amount (cUSD)</label>
            <input
              type="number"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2"
              placeholder="0.00"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Price</label>
            <input
              type="number"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2"
              placeholder={eurUsd.price}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 px-4 py-3 rounded-lg transition-colors">
              <ArrowUpRight className="w-5 h-5" />
              <span>Buy</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 px-4 py-3 rounded-lg transition-colors">
              <ArrowDownRight className="w-5 h-5" />
              <span>Sell</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingView;