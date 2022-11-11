import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import SignupCard from '../../components/register/Register'


const index = () => {
    return (
    <ChakraProvider>
        <SignupCard/>
      </ChakraProvider>
    )
  }
  
  export default index