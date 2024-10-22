// import React, { useState } from 'react';
// import { 
//     Home, 
//     Wallet, 
//     Settings, 
//     History,
//     BarChart2,
//     Menu,
//     X
// } from 'lucide-react';

// const Navbar = () => {
//     const [isCollapsed, setIsCollapsed] = useState(false);

//     const styles = {
//         navbar: {
//             width: isCollapsed ? '80px' : '300px',
//             backgroundColor: '#18181B',
//             borderRadius: '12px',
//             color: 'white',
//             padding: '24px 16px',
//             transition: 'all 0.3s ease',
//             height: '95vh',
//             display: 'flex',
//             flexDirection: 'column',
//             position: 'fixed',
//             left: '20px',
//             top: '20px',
//         },
//         header: {
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: isCollapsed ? 'center' : 'space-between',
//             marginBottom: '40px',
//             padding: '0 8px',
//         },
//         logo: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '12px',
//             fontSize: '20px',
//             fontWeight: '600',
//         },
//         menuButton: {
//             background: 'none',
//             border: 'none',
//             color: 'white',
//             cursor: 'pointer',
//             padding: '8px',
//             borderRadius: '8px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             transition: 'background-color 0.2s ease',
//         },
//         navItems: {
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '8px',
//         },
//         navItem: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '16px',
//             padding: '12px 16px',
//             borderRadius: '12px',
//             cursor: 'pointer',
//             transition: 'all 0.2s ease',
//             textDecoration: 'none',
//             color: '#A1A1AA',
//         },
//         navItemText: {
//             fontSize: '16px',
//             display: isCollapsed ? 'none' : 'block',
//         },
//         active: {
//             backgroundColor: '#27272A',
//             color: 'white',
//         },
//         footer: {
//             marginTop: 'auto',
//             borderTop: '1px solid #27272A',
//             paddingTop: '24px',
//         }
//     };

//     const NavItem = ({ icon: Icon, label, isActive }) => (
//         <div 
//             style={{
//                 ...styles.navItem,
//                 ...(isActive ? styles.active : {})
//             }}
//             onMouseOver={(e) => {
//                 e.currentTarget.style.backgroundColor = '#27272A';
//                 e.currentTarget.style.color = 'white';
//             }}
//             onMouseOut={(e) => {
//                 if (!isActive) {
//                     e.currentTarget.style.backgroundColor = 'transparent';
//                     e.currentTarget.style.color = '#A1A1AA';
//                 }
//             }}
//         >
//             <Icon size={24} />
//             <span style={styles.navItemText}>{label}</span>
//         </div>
//     );

//     return (
//         <div style={styles.navbar}>
//             {/* Header */}
//             <div style={styles.header}>
//                 {!isCollapsed && (
//                     <div style={styles.logo}>
//                         <Wallet size={28} />
//                         <span>EthWallet</span>
//                     </div>
//                 )}
//                 <button 
//                     style={styles.menuButton}
//                     onClick={() => setIsCollapsed(!isCollapsed)}
//                     onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#27272A'}
//                     onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
//                 >
//                     {isCollapsed ? <Menu size={24} /> : <X size={24} />}
//                 </button>
//             </div>

//             {/* Navigation Items */}
//             <div style={styles.navItems}>
//                 <NavItem icon={Home} label="Dashboard" isActive={true} />
//                 <NavItem icon={Wallet} label="Wallet" />
//                 <NavItem icon={History} label="History" />
//                 <NavItem icon={BarChart2} label="Analytics" />
//             </div>

//             {/* Footer */}
//             <div style={styles.footer}>
//                 <NavItem icon={Settings} label="Settings" />
//             </div>
//         </div>
//     );
// };

// export default Navbar;


import React from 'react';
import { Wallet, Menu, Copy  , LogOut} from 'lucide-react';
import { useAccount, useBalance, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';

const Navbar = () => {

    const { address } = useAccount();
    const { disconnect } = useDisconnect();

    const styles = {
        navbar: {
            width: '426px',
            height: '40px',
            backgroundColor: '#18181B',
            marginTop: '-23px',
            marginLeft: '-23px',
            borderRadius: '10px 10px 0 0',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px',
            color: 'white',
        },
        leftSection: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
        },
        accountSection: {
            backgroundColor: '#27272A',
            padding: '4px 10px',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
        },
        accountTitle: {
            fontSize: '0.875rem',
            fontWeight: '600',
            margin: '0 0 2px 0',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        addressContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
        },
        addressText: {
            fontSize: '0.75rem',
            color: '#A1A1AA',
            margin: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        copyButton: {
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            color: '#A1A1AA',
            display: 'flex',
            alignItems: 'center',
            transition: 'color 0.2s ease',
        },
        menuButton: {
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease',
        }
    };

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(address);
        // You could add a toast notification here
    };


    function handleReduseLengthAddress(addr) {
        if (addr && addr.length) {
            return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
        } else {
            return 'No Address'; // Handle the case where address is undefined
        }
    }

    return (
        <div style={styles.navbar}>
            <div style={styles.leftSection}>
                <Wallet size={24} color="#c77dff" />
            </div>

            <div 
                style={styles.accountSection}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#323232'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#27272A'}
            >
                <p style={styles.accountTitle}>Account</p>
                <div style={styles.addressContainer}>
                    <p style={styles.addressText}>{handleReduseLengthAddress(address)}</p>
                    <button 
                        style={styles.copyButton}
                        onClick={handleCopyAddress}
                        onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#A1A1AA'}
                    >
                        <Copy size={14} />
                    </button>
                </div>
            </div>

            <button
                    onClick={() => disconnect()}
                    style={{padding:'5px' , backgroundColor:'#18181B' , border:'none'}}
                    // onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#B91C1C'}
                    // onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#DC2626'}
                >
                    <LogOut    style={{ width: '20px', height: '20px'  , color:'red'}} />
                    
                </button>
        </div>
    );
};

export default Navbar;