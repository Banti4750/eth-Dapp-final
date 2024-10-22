import React, { useState } from 'react';
import { useSendTransaction } from 'wagmi';
import { useVerifyTypedData } from 'wagmi';
import { parseEther } from 'viem';
import { useNavigate } from 'react-router-dom';

export function Sendeth() {
  const [inputaddress, setInputaddress] = useState('');
  const [amount, setAmount] = useState('');
  const { sendTransaction } = useSendTransaction();
  const navigate = useNavigate();

  
 


  async function sendTx() {
    try {
      if(inputaddress>0){
      await sendTransaction({ to: inputaddress, value: parseEther(amount) });
      navigate('/')
      }
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  }

  const image = "https://cryptologos.cc/logos/versions/ethereum-eth-logo-animated.gif?v=035";

  return (
    <>
      <div style={styles.titleContainer}>
        <h2 style={styles.title}>Send ETH</h2>
      </div>

      <div style={styles.imageContainer}>
        <img style={styles.image} src={image} alt="Ethereum" />
      </div>

      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          type="text"
          placeholder="Recipient Address"
          value={inputaddress}
          onChange={(e) => setInputaddress(e.target.value)}
        />
      </div>

      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          type="text"
          placeholder="Amount (ETH)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div style={styles.buttonContainer}>
        <button style={styles.cancelButton} onClick={() => navigate('/')}>Cancel</button>
        <button style={styles.nextButton} onClick={sendTx} >Next</button>
      </div>
    </>
  );
}

const styles = {
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  title: {
    fontWeight: 'lighter',
    color: '#fff',
    fontSize: '24px',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
  },
  image: {
    width: '78px',
    borderRadius: '50%',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  input: {
    width: '300px',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #3f3f46',
    backgroundColor: '#1e1e24',
    color: '#fff',
    fontSize: '16px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '70px',
    alignItems: 'center',
    marginTop: '20px',
  },
  cancelButton: {
    padding: '12px 24px',
    backgroundColor: '#ff4c4c',
    color: '#fff',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
  nextButton: {
    padding: '12px 30px',
    backgroundColor: '#4caf50',
    color: '#fff',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Sendeth;
