import React, { Component } from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

import GlobalProvider from './components/ProvidestateContext';

import RouterController from './components/RouterController';
import RoutingTableController from './components/RoutingTableController';
import ConnectionController from './components/ConnectionController';

export default class App extends Component {
  render(){
  return (
    <GlobalProvider>
      <ChakraProvider>
        <RouterController />
        <RoutingTableController/>
        <ConnectionController/>
      </ChakraProvider>
    </GlobalProvider>
  );
}}

