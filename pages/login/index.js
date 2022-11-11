import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import SimpleCard from '../../components/login/Login'

const index = () => {
    return (
    <ChakraProvider>
        <SimpleCard/>
      </ChakraProvider>
    )
  }



  
  export default index