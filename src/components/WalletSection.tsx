import React from 'react';
import { Wallet, ExternalLink, Copy, RefreshCw, AlertCircle } from 'lucide-react';
import { useAccount, useBalance, useDisconnect } from 'wagmi';
import { useWeb3Modal } from '@web3modal/wagmi/react';

const WalletSection: React.FC = () => {
  const { address, isConnected, chainId } = useAccount();
  const { data: balance } = useBalance({ 
    address,
    watch: true
  });
  const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();

  if (!isConnected) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Wallet className="w-8 h-8 text-blue-400" />
              <div>
                <h2 className="text-xl font-bold">Connect Wallet</h2>
                <p className="text-sm text-gray-400">Connect your wallet to access advanced features</p>
              </div>
            </div>
            <button 
              onClick={() => open()}
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              Connect Wallet
            </button>
          </div>
          
          <div className="mt-8 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-400">Why connect a wallet?</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-300">
                  <li>• Access real-time trading features</li>
                  <li>• View your portfolio and transaction history</li>
                  <li>• Execute trades directly from your wallet</li>
                  <li>• Manage your assets securely</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getNetworkName = (id: number) => {
    switch (id) {
      case 1:
        return 'Ethereum Mainnet';
      case 5:
        return 'Goerli Testnet';
      case 11155111:
        return 'Sepolia Testnet';
      default:
        return 'Unknown Network';
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Wallet Details</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <span className="text-gray-400">Address</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-mono">
                {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ''}
              </span>
              <button 
                className="p-1.5 hover:bg-gray-600 rounded-lg transition-colors"
                onClick={() => address && navigator.clipboard.writeText(address)}
                title="Copy address"
              >
                <Copy className="w-4 h-4" />
              </button>
              <a 
                href={`https://etherscan.io/address/${address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:bg-gray-600 rounded-lg transition-colors"
                title="View on Etherscan"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <span className="text-gray-400">Network</span>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 ${
                chainId === 1 ? 'bg-green-400' : 'bg-yellow-400'
              } rounded-full`}></div>
              <span>{chainId ? getNetworkName(chainId) : 'Not Connected'}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <span className="text-gray-400">Balance</span>
            <div className="flex items-center space-x-2">
              <RefreshCw className="w-4 h-4" />
              <span>{balance?.formatted || '0.00'} {balance?.symbol}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <button
            onClick={() => open()}
            className="flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
          >
            <Wallet className="w-4 h-4" />
            <span>Switch Wallet</span>
          </button>
          
          <button
            onClick={() => disconnect()}
            className="flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Disconnect</span>
          </button>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <div>
              <span className="font-medium">Auto-lock Timer</span>
              <p className="text-sm text-gray-400">Automatically lock wallet after inactivity</p>
            </div>
            <select className="bg-gray-600 border border-gray-500 rounded-lg px-3 py-2">
              <option value="5">5 minutes</option>
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
            </select>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <div>
              <span className="font-medium">Transaction Notifications</span>
              <p className="text-sm text-gray-400">Get notified about wallet activities</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletSection;