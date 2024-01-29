import React, { Component } from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

import GlobalProvider from './components/ProvidestateContext';

import MainController from './components/MainController';

export default class App extends Component {
  render(){
  return (
    <GlobalProvider>
      <ChakraProvider>
        <MainController />
      </ChakraProvider>
    </GlobalProvider>
  );
}}

