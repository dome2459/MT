import React, { Component } from 'react';
import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import DragArea from './DragArea';

import Navbar from './Navbar';
import RoutingTable from '../components/RoutingTable';


export default class MainEnviroment extends Component {

          //https://react.dev/reference/react/useContext
  render() {
    return (


      <Flex flex={1} height='100vh' flexDirection='column'>

        <Navbar />
          	

        <div className='dragAndTableArea'>
          <Flex flex={3} margin={10} borderWidth={2} borderColor={'#ddd'}>

            <DragArea />

          </Flex>
          <RoutingTable />
        </div>

        <Flex flex={1} bg='#eee'></Flex>

      </Flex>


    )
  }

}



