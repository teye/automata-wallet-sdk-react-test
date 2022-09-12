import logo from './logo.svg';
import './App.css';
import { Wallet } from '@automata-network/react-wallet-sdk'
import '@automata-network/react-wallet-sdk/style.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Wallet />
      </header>
    </div>
  );
}

export default App;
