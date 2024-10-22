import React from 'react'
import { useAccount, useBalance, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';

const ShowEth = () => {
    const { address } = useAccount();

    const { data: balance } = useBalance({ address });
   
     function handleShowEth(num) {
        return num.slice(0, 8)
    }
    return (
        <>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '40px'
            }}>

                <div>
                    <h1 style={{ fontWeight:'600'}}>
                        {balance && `${handleShowEth(balance.formatted)} ${balance.symbol}`}
                    </h1>
                </div>
            </div>


        </>
    )
}

export default ShowEth