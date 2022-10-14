import '../styles/globals.css'
import '../styles/secondheader.css'
import '../styles/footer.css'
import '../styles/herobanner.css'
import { LayoutGroup } from 'framer-motion'
import DarkModeSwitch from '../components/header/DarkModeSwitch.jsx'
import Footer from '../components/footer/Footer'
import { ChakraProvider } from "@chakra-ui/react";
import SecondHeader from '../components/header/SecondHeader'

function MyApp({ Component, pageProps }) {
  return <>
   <LayoutGroup>
 <ChakraProvider>
    <DarkModeSwitch />
    </ChakraProvider> 
    <SecondHeader />
  <Component {...pageProps} />
  <Footer />
  </LayoutGroup>  
  </>
}

export default MyApp
