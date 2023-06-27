import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import Router from './routes/Router';
import { theme } from './styles';


const App = () => {


  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>




  );
}

export default App;
