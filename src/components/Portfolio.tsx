import React from 'react';
import { Wallet, ArrowUpRight, ArrowDownRight, BarChart3 } from 'lucide-react';

const Portfolio: React.FC = () => {
  const assets = [
    { currency: 'cUSD', balance: '10,000.00', value: '$10,000.00', change: '+2.5%' },
    { currency: 'cEUR', balance: '8,500.00', value: '$9,350.00', change: '-1.2%' },
    { currency: 'CELO', balance: '1,000.00', value: '$2,500.00', change: '+5.8%' },
  ];

  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Portfolio Value</h2>
            <p className="text-3xl font-bold mt-2">$21,850.00</p>
          </div>
          <BarChart3 className="w-12 h-12 text-blue-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {assets.map((asset) => (
            <div key={asset.currency} className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{asset.currency}</h3>
                <span className={`text-sm ${
                  asset.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>{asset.change}</span>
              </div>
              <p className="text-xl font-bold">{asset.balance}</p>
              <p className="text-sm text-gray-400">{asset.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h2 className="text-xl font-bold mb-4">Transaction History</h2>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-4">
                {i % 2 === 0 ? (
                  <ArrowUpRight className="w-8 h-8 p-1.5 bg-green-500/20 text-green-500 rounded-full" />
                ) : (
                  <ArrowDownRight className="w-8 h-8 p-1.5 bg-red-500/20 text-red-500 rounded-full" />
                )}
                <div>
                  <p className="font-semibold">{i % 2 === 0 ? 'Buy' : 'Sell'} EUR/USD</p>
                  <p className="text-sm text-gray-400">Mar {i}, 2024</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">1,000 cUSD</p>
                <p className="text-sm text-gray-400">$1,000.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;