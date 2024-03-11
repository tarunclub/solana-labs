import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import './App.css';
import { useEffect, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

function App() {
  const [balance, setBalance] = useState(0);
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  useEffect(() => {
    if (!connection || !publicKey) {
      return;
    }

    connection.onAccountChange(
      publicKey,
      (updatedAccountBalance) => {
        setBalance(updatedAccountBalance.lamports / LAMPORTS_PER_SOL);
      },
      'confirmed'
    );

    connection.getAccountInfo(publicKey).then((info) => {
      setBalance(info?.lamports);
    });
  }, [connection, publicKey]);
  return (
    <>
      <WalletMultiButton />
      <div style={{ marginTop: '10px' }}>
        <p>SOL Balance: {balance / LAMPORTS_PER_SOL}</p>
      </div>
    </>
  );
}

export default App;
