import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { WalletOptions } from './WalletOptions'
import Allcard from './Allcard'
import Navbar from './Navbar'
// import Footer from './Footer'
import  Home  from './Home'

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletOptions/>

      
        {/* <Allcard/> */}
        <Home/>
       
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App