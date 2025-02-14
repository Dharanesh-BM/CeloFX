import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Euro } from 'lucide-react';
import { useSimulatedPrice } from '../hooks/useSimulatedPrice';
import PriceChart from './PriceChart';

const Dashboard: React.FC = () => {
  const eurUsd = useSimulatedPrice(1.0924);
  const gbpUsd = useSimulatedPrice(1.2634);
  const usdJpy = useSimulatedPrice(148.12);
  const usdChf = useSimulatedPrice(0.8845);

  const [chartData, setChartData] = useState<Array<{ time: string; value: number }>>([]);

  useEffect(() => {
    const now = new Date().toISOString();
    setChartData(prev => {
      const newData = [...prev, { time: now, value: parseFloat(eurUsd.price) }];
      return newData.slice(-50); // Keep last 50 points for better performance
    });
  }, [eurUsd.price]);

  const marketData = [
    { pair: 'EUR/USD', ...eurUsd },
    { pair: 'GBP/USD', ...gbpUsd },
    { pair: 'USD/JPY', ...usdJpy },
    { pair: 'USD/CHF', ...usdChf },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {marketData.map((pair) => (
          <div key={pair.pair} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{pair.pair}</h3>
                <p className="text-2xl font-bold">{pair.price}</p>
              </div>
              <div className={`flex items-center ${pair.trending === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {pair.trending === 'up' ? <TrendingUp className="w-6 h-6" /> : <TrendingDown className="w-6 h-6" />}
                <span className="ml-1">{pair.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Chart */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-bold mb-4">EUR/USD Live Chart</h2>
          <PriceChart data={chartData} />
        </div>

        {/* Recent Transactions */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  {i % 2 === 0 ? (
                    <DollarSign className="w-8 h-8 text-green-500" />
                  ) : (
                    <Euro className="w-8 h-8 text-blue-500" />
                  )}
                  <div>
                    <p className="font-semibold">Trade #{i}</p>
                    <p className="text-sm text-gray-400">2 hours ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">1,000 cUSD</p>
                  <p className="text-sm text-gray-400">Pending</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;