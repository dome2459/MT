import React, { Component } from 'react';
import { Flex,Tabs, TabList, TabPanels, Tab, TabPanel, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Moveable from "react-moveable";
import DragArea from './DragArea';



export default class MainEnviroment extends Component {
    
  render() {
    return (
       <Flex flex={1} height='100vh' flexDirection='column'>
        
            <Flex height='50px' bg='#eee' alignItems='center' padding='5px'>
            <Menu>                
                <MenuButton as={Button} >  </MenuButton>
                <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
            </Flex>

            <Flex flex={3} margin={10} borderWidth={2} borderColor={'#ddd'}>

            <DragArea />

            </Flex>

            <Flex flex={1}bg='#eee'></Flex>

       </Flex>
    )
  }
}