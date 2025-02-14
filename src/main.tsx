import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { WagmiProvider, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { createPublicClient, http } from 'viem';
import App from './App.tsx';
import './index.css';

// Configure chains & providers with mainnet as default
const config = createConfig({
  chains: [mainnet],
  client: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
});

// Initialize Web3Modal
createWeb3Modal({
  wagmiConfig: config,
  projectId: '199a31f3a7b78e3e86aadbbbe9b7be8e',
  chains: [mainnet],
  themeMode: 'dark',
  themeVariables: {
    '--w3m-font-family': 'Inter, sans-serif',
    '--w3m-accent-color': '#3b82f6',
    '--w3m-background-color': '#1f2937',
    '--w3m-container-border-radius': '0.75rem',
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <App />
    </WagmiProvider>
  </StrictMode>
);