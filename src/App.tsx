import React from 'react';
import { LayoutDashboard, LineChart, Wallet2, ArrowRightLeft } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TradingView from './components/TradingView';
import Portfolio from './components/Portfolio';
import WalletSection from './components/WalletSection';

function App() {
  const [activeTab, setActiveTab] = React.useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'trading':
        return <TradingView />;
      case 'portfolio':
        return <Portfolio />;
      case 'wallet':
        return <WalletSection />;
      default:
        return <Dashboard />;
    }
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'trading', label: 'Trading', icon: <ArrowRightLeft className="w-5 h-5" /> },
    { id: 'portfolio', label: 'Portfolio', icon: <LineChart className="w-5 h-5" /> },
    { id: 'wallet', label: 'Wallet', icon: <Wallet2 className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar items={navItems} activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;