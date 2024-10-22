import React, { useEffect } from 'react';
import { Wallet, Send, LogOut, QrCode, ArrowRightLeft, DollarSign } from 'lucide-react';
import { useAccount, useBalance, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sendeth from './Sendeth';
import Navbar from './Navbar';
// import Footer from './Footer';
import ShowEth from './ShowEth';
import Receive from './component/Receive';
import { useNavigate } from 'react-router-dom';
import Qrcode from './component/Qrcode';



const Allcard = () => {
   
  const { address } = useAccount();
  const { data: ensAvatar, isError: ensAvatarError } = useEnsAvatar({ address });
  const { data: ensName, isError: ensNameError } = useEnsName({ address });
  const { data: balance } = useBalance({ address });

  

  useEffect(() => {
    console.log({
      address,
      ensName,
      ensAvatar,
      ensNameError,
      ensAvatarError,
    });
  }, [address, ensName, ensAvatar, ensNameError, ensAvatarError]);

  const shortenAddress = (addr) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
     marginTop:'-29px'
    },
    card: {
      width: '400px',
      backgroundColor: '#18181B',
      borderRadius: '12px',
      color: 'white',
      padding: '24px',
      height: '490px',
    },
  };

  return (
    <>
      <Router>
            <div style={styles.container}>
                <div style={styles.card}>
                    {/* Navbar remains static on all routes */}
                    <Navbar />
                    
                    {/* Routes for switching between Receive and Remain components */}
                    <Routes>
                        <Route path="/receive" element={<Receive />} />
                        <Route path="/" element={<Remain />} />
                        <Route path ="/qrcode" element={<Qrcode/>}/>
                        <Route path="/send" element={<Sendeth/>}/>
                        
                    </Routes>
                    
                    {/* Footer remains static on all routes */}
                    {/* <Footer /> */}
                </div>
            </div>
        </Router>
    </>
  );
};

export default Allcard;

function Remain() {
  const { address } = useAccount();
  const { data: ensAvatar, isError: ensAvatarError } = useEnsAvatar({ address });
  const { data: ensName, isError: ensNameError } = useEnsName({ address });
  const { data: balance } = useBalance({ address });
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    console.log({
      address,
      ensName,
      ensAvatar,
      ensNameError,
      ensAvatarError,
    });
  }, [address, ensName, ensAvatar, ensNameError, ensAvatarError]);

  const shortenAddress = (addr) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };
// const image = "https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-6278326_1280.png";
const image = "https://cryptologos.cc/logos/versions/ethereum-eth-logo-animated.gif?v=035";
  

  function handleShowEth(num) {
    return num.slice(0, 8)
}


function handleRecevi(){
    navigate('/receive')
}




  const styles = {
    headerSection: {
      backgroundColor: '#27272A',
      borderRadius: '12px',
      padding: '16px',
      width: '370px',
      marginBottom: '24px',
      marginTop: '20px',
    },
    avatarContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    avatar: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3F3F46',
    },
    infoContainer: {
      flexGrow: 1,
      minWidth: 0,
    },
    walletName: {
      fontSize: '1.125rem',
      fontWeight: '600',
      margin: '0 0 4px 0',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    balanceText: {
      fontSize: '0.875rem',
      color: '#A1A1AA',
      margin: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    section: {
      marginBottom: '24px',
    },
    sectionTitle: {
      fontSize: '0.875rem',
      color: '#A1A1AA',
      fontWeight: '500',
      marginBottom: '8px',
    },
    dataBox: {
      backgroundColor: '#27272A',
      borderRadius: '8px',
      padding: '12px',
      marginBottom: '8px',
    },
    address: {
      fontSize: '0.875rem',
      fontFamily: 'monospace',
      wordBreak: 'break-all',
      margin: 0,
    },
    balanceAmount: {
      fontSize: '1.125rem',
      fontWeight: '600',
      margin: 0,
    },
    disconnectButton: {
      width: '100%',
      backgroundColor: '#DC2626',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: '500',
      marginBottom: '16px',
    },
    sendethContainer: {
      backgroundColor: '#27272A',
      borderRadius: '12px',
      padding: '16px',
    },
    actionButton: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#27272A',
      padding: '16px',
      width: '80px',
      height: '80px',
      borderRadius: '16px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      gap: '8px',
      color: 'white',
    },
    actionButtonText: {
      margin: 0,
      fontSize: '12px',
      fontWeight: '500',
      color: '#A1A1AA',
    },
    actionsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '12px',
      marginBottom: '24px',
      padding: '0 8px',
    },
    iconWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '36px',
    },
  };

  const ActionButton = ({ icon: Icon, label, onClick }) => (
    <button
      style={styles.actionButton}
      onClick={onClick}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#3F3F46';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#27272A';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={styles.iconWrapper}>
        <Icon style={{ width: '24px', height: '24px', color: '#c77dff' }} />
      </div>
      <p style={styles.actionButtonText}>{label}</p>
    </button>
  );

  return (
    <>
      <ShowEth />
      <div style={styles.actionsContainer}>
        <ActionButton
          icon={QrCode}
          label="Receive"
          onClick={handleRecevi }
        />
        <ActionButton
          icon={Send}
          label="Send"
          onClick={() => navigate('/send')}
        />
        <ActionButton
          icon={ArrowRightLeft}
          label="Swap"
          onClick={() => console.log('Swap clicked')}
        />
        <ActionButton
          icon={DollarSign}
          label="Buy"
          onClick={() => console.log('Buy clicked')}
        />
      </div>
      <div style={styles.headerSection}>
        <div style={styles.avatarContainer}>
          <div style={styles.avatar}>
            {ensAvatar ? (
              <img
                src={ensAvatar}
                alt="ENS Avatar"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                }}
              />
            ) : (
              <img
                src={image}
                alt="ENS Avatar"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                }}
              />
            )}
          </div>
          <div style={styles.infoContainer}>
            <h2 style={styles.walletName}>
              {ensName || 'Ethereum '}
            </h2>
            <p style={styles.balanceText}>
              {balance && `${handleShowEth(balance.formatted)} ${balance.symbol}`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
