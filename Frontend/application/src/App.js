import React, { Component } from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

import GlobalProvider from './components/ProvidestateContext';

import Main from './views/Main';

export default class App extends Component {
  render(){
  return (
    <GlobalProvider>
      <ChakraProvider>
        <Main />
      </ChakraProvider>
    </GlobalProvider>
  );
}}

