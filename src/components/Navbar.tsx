import React from 'react';
import { CircleDollarSign } from 'lucide-react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface NavbarProps {
  items: NavItem[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ items, activeTab, onTabChange }) => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <CircleDollarSign className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold">CeloFX</span>
          </div>
          
          <div className="flex space-x-4">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors
                  ${activeTab === item.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700'}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <button 
            onClick={() => open()}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
          >
            {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : 'Connect Wallet'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;