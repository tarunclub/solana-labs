import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import './App.css';

function App() {
  return (
    <>
      <WalletMultiButton />
      <div style={{ marginTop: '10px' }}>
        <button>Increment</button>
        <p>Count</p>
        <button>Decrement</button>
      </div>
    </>
  );
}

export default App;
