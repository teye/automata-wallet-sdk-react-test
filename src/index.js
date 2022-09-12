import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WalletProvider } from '@automata-network/react-wallet-sdk'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WalletProvider
      supportedChain={{
        '0x1': {
          chainId: '0x1',
          chainName: 'Ethereum',
          nativeCurrency: {
            decimals: 18,
            name: 'ETH',
            symbol: 'ETH'
          },
          rpcUrls: ['https://rpc.tenderly.co/fork/fdffd937-533c-4e47-ac6e-d48c19e3ebfb'],
          blockExplorerUrls: [],
          iconUrls: [
            'https://raw.githubusercontent.com/ethereum/ethereum-org-website/dev/src/assets/assets/eth-glyph-colored.svg'
          ]
        },
        '0x89': {
          chainId: '0x89',
          chainName: 'Polygon',
          nativeCurrency: {
            decimals: 18,
            name: 'MATIC',
            symbol: 'MATIC'
          },
          rpcUrls: ['https://polygon-rpc.com/'],
          blockExplorerUrls: ['https://polygonscan.com/'],
          iconUrls: [
            'https://raw.githubusercontent.com/maticnetwork/matic-docs/master/static/img/polygon-logo.svg'
          ]
        }
      }}
    >
    <App />
    </WalletProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
