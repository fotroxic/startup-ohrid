
import '../styles/globals.css'
import '../styles/header.css'
import '../styles/herobanner.css'
import '../styles/midbanner.css'
import '../styles/news.css'
import '../styles/support.css'
import '../styles/tv.css'
import '../styles/generalcard.css'
import '../styles/secondbanner.css'
import '../styles/community.css'
import '../styles/jobs.css'
import '../styles/footer.css'
import '../styles/newsSlider.css'
import '../styles/latestbelow.css'
import '../styles/latestcenter.css'
import '../styles/latest.css'
import '../styles/communityPage.css'
import { LayoutGroup } from 'framer-motion'
import DarkModeSwitch from '../components/header/DarkModeSwitch.jsx'
import Footer from '../components/footer/Footer'
import { ChakraProvider } from "@chakra-ui/react";
import '../styles/digitalNomads.css'
import '../styles/jobsPage.css'
import '../styles/searchBar.css'
import '../styles/secondheader.css'
import '../styles/becomeMember.css'
import '../styles/contact.css'


function MyApp({ Component, pageProps }) {

  return <>
  <LayoutGroup>
 <ChakraProvider>
    <DarkModeSwitch />
    </ChakraProvider> 
  <Component {...pageProps} />
  <Footer />
  </LayoutGroup>

  </>
}

export default MyApp
