import React, { useEffect } from 'react';
import { Wallet, Send, LogOut, QrCode, ArrowRightLeft, DollarSign, Copy, Pointer, } from 'lucide-react';
import { useAccount, useBalance, useEnsAvatar, useEnsName } from 'wagmi';
import { useNavigate } from 'react-router-dom';

const Receive = () => {

    const { address } = useAccount();
    const { data: ensAvatar, isError: ensAvatarError } = useEnsAvatar({ address });
    const { data: ensName, isError: ensNameError } = useEnsName({ address });
    const { data: balance } = useBalance({ address });
    // const { disconnect } = useDisconnect();

    const navigate = useNavigate();

    function handleReduseLengthAddress(addr) {
        if (addr && addr.length) {
            return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
        } else {
            return 'No Address'; // Handle the case where address is undefined
        }
    }

    function hanblecopy() {
        navigator.clipboard.writeText(address);
    }

    const image = "https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-6278326_1280.png"
    useEffect(() => {
        console.log({
            address,
            ensName,
            ensAvatar,
            ensNameError,
            ensAvatarError,
        });
    }, [address, ensName, ensAvatar, ensNameError, ensAvatarError]);


    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px',
        },
        card: {
            width: '400px',
            backgroundColor: '#18181B',
            borderRadius: '12px',
            color: 'white',
            padding: '24px',

        },
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
            // width:'370px',
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
        }
    };
    return (
        <>

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
                                    borderRadius: '30%',
                                }}
                            />
                        ) : (
                            <img
                                src={image}
                                alt="ENS Avatar"
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '30%',
                                }}
                            />
                        )}
                    </div>
                    <div style={styles.infoContainer}>
                        <h2 style={styles.walletName}>
                            {ensName || 'Ethereum '}
                        </h2>
                        <p style={styles.balanceText}>
                            {balance && `${handleReduseLengthAddress(address)}`}
                        </p>
                    </div>

                    <button style={{
                        border: 'none',
                        borderRadius: '50%',
                        padding: '10px',
                        display: 'flex',
                        backgroundColor: 'transparent',
                        cursor: 'Pointer',

                    }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#3F3F46';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#27272A';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}

                        onClick={()=>navigate('/qrcode')}
                    >
                        <QrCode style={{ color: 'white' }} />
                    </button>
                    <button style={{
                        border: 'none',
                        borderRadius: '50%',
                        padding: '10px',
                        display: 'flex',
                        backgroundColor: 'transparent',
                        cursor: 'Pointer'

                    }}

                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#3F3F46';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <Copy style={{ color: 'white' } } onClick={hanblecopy} />
                    </button>



                </div>

            </div>


            <div style={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:'260px'
            }}>
                <button style={{
                    width:'100%',
                    padding:"15px 20px",
                    backgroundColor: '#27272A',
                    border:'none',
                    fontSize:'20px',
                    color:'white',
                    borderRadius:'10px',
                    display:'grid',
                    justifySelf:'down',
                    cursor:'pointer'


                }}
                onClick={()=>navigate('/')}
                
                >Close</button>
            </div>




        </>
    )
}

export default Receive