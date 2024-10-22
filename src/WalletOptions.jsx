import * as React from 'react'
import { useConnect } from 'wagmi'

const images = [
    { img: "https://developers.moralis.com/wp-content/uploads/2023/11/Phantom-Wallet.png" },
    { img: "https://avatars.githubusercontent.com/u/47159500?s=280&v=4" },

    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png" },
    { img: "https://play-lh.googleusercontent.com/EhgMPJGUYrA7-8PNfOdZgVGzxrOw4toX8tQXv-YzIvN6sAMYFunQ55MVo2SS_hLiNm8=w240-h480-rw" },

]

export function WalletOptions() {
    const { connectors, connect } = useConnect()

    return (
        <>
            <div style={{color:'white' , display:'flex' , justifyContent:'center' , alignItems:'center' , fontSize:'24px' , margin:'7px' , fontWeight:"bolder"}}>
                Wallet Detected:
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>


                {connectors.map((connector, index) => (
                    <div key={connector.uid} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '20px' }}>
                        <button style={{   width:'150px' , gap:'10px' ,  padding: '7px 19px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px' }} onClick={() => connect({ connector })}>
                            <div>
                                <img src={images[index]?.img} alt={connector.name} style={{ width: '20px', marginRight: '10px' }} />
                            </div>
                            {connector.name}
                        </button>
                    </div>
                ))}
            </div>


            <div>
                <hr style={{width:'800px'}} />
            </div>
        </>
    )
}

export default WalletOptions
