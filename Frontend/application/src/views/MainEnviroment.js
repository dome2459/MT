import React, { Component } from 'react';
import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Moveable from "react-moveable";
import DragArea from './DragArea';

import Navbar from './Navbar';



export default class MainEnviroment extends Component {

  
  render() {
    return (


      <Flex flex={1} height='100vh' flexDirection='column'>

        <Navbar />

        <Flex flex={3} margin={10} borderWidth={2} borderColor={'#ddd'}>

          <DragArea />


        </Flex>

        <Flex flex={1} bg='#eee'></Flex>

      </Flex>


    )
  }

}



