import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Startrampe from './views/Startrampe';


function App() {
  return (
    <ChakraProvider>
      <Startrampe />
    </ChakraProvider>
  )
}

export default App;
