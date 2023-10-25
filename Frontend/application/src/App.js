import React, { Component } from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Main from './views/Main';

export default class App extends Component {
  render(){
  return (
    <>
    <ChakraProvider>
      <Main />
    </ChakraProvider>
    </>
  );
}}

