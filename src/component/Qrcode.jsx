import React from 'react'
import { useAccount, useBalance, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import { Wallet, Send, LogOut, QrCode, ArrowRightLeft, DollarSign, Copy, Pointer, } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Qrcode = () => {
    const { address } = useAccount();
    const navigate = useNavigate();


    function hanblecopy() {
        navigator.clipboard.writeText(address);
    }

let qrCodeUrl=""
    if(address === undefined){
         qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${ "Please Connet to Wallet"}`;
    }
    else{
         qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${address}`;
    }
   


    return (
        <>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>

                <h2 style={{
                    marginTop: '10px'
                }}>
                    Receive Address
                </h2>

            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px ',
                    backgroundColor: 'white',
                    borderRadius: '10px'

                }}>
                    <img src={ qrCodeUrl} alt="" />
                </div>

            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>

                <h3 >
                    Your Ethereum Sepolia Address
                </h3>

            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',


            }}>

                <div style={{
                    width: '100%',
                    backgroundColor: 'black',
                    marginTop: '-10px',
                    border: '1px solid #27272A',
                    borderRadius: '10px 10px 0 0',
                    // padding:'10px 15px'
                }}>

                    <h4 style={{ textAlign: 'center' }}>{address === undefined ?"No Address":address }</h4>

                </div>



            </div>


            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>

                <div style={{
                    width: '100%',
                    backgroundColor: 'black',
                    // backgroundColor: '#27272A',
                    border: '1px solid #27272A',
                    borderRadius: '0 0 10px 10px',
                    padding: '10px 15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Copy size={17} style={{ cursor: 'pointer' }} />
                        <button style={{
                            backgroundColor: 'black',
                            border: 'none',
                            color: 'white',
                            fontSize: '16px',
                            fontWeight: 'bolder',
                            cursor: 'pointer'
                        }}

                            onClick={hanblecopy}

                        >Copy</button>
                    </div>

                </div>



            </div>


            <div style={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '10px'
            }}>
                <button style={{
                    width: '100%',
                    padding: "15px 20px",
                    backgroundColor: '#27272A',
                    border: 'none',
                    fontSize: '20px',
                    color: 'white',
                    borderRadius: '10px',
                    display: 'grid',
                    justifySelf: 'down',
                    cursor: 'pointer'


                }}
                  onClick={()=>navigate('/receive')}

                >Close</button>
            </div>







        </>
    )
}

export default Qrcode