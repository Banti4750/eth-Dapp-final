import React from 'react'
import Navbar from './Navbar'
import Allcard from './Allcard'
// import Footer from './Footer'

const Home = () => {
    return (
        <>
            <div style={{
                display:'flex',justifyContent:'center',
                alignItems:'center',
                marginTop:'60px'

            }}>
                {/* <Navbar /> */}

                <Allcard />


                {/* <Footer /> */}
            </div>

        </>
    )
}

export default Home