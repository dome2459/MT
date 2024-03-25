import React, { Component, useEffect, useContext } from 'react';
import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel, Button, Menu, MenuButton, MenuItem, MenuList, Box } from '@chakra-ui/react'
import DragArea from './DragArea';

import Navbar from './Navbar';
import RoutingTable from '../components/RoutingTable';

export default function MainEnviroment(props) {

  useEffect(() => {
    
    if (typeof props.callBack === 'function') {
      props.callBack('getRouterArrayFromApi');
      props.callBack('getConnectionFromApi');
    }
  }, []);


          //https://react.dev/reference/react/useContext

    // return (
    //   <Flex flex={1} flexDirection='column'>
    //     <Navbar  callBack={props.callBack}/>
    //     <div className='dragAndTableArea' flex={1}>
    //       <Flex h='68%' mh='500px' flex={1} margin={2} borderWidth={2} borderColor={'#ddd'}justifyContent='space-between'>
    //         <DragArea  callBack={props.callBack} />
    //       </Flex>
    //       <Box h='30%' mh='100px'  flex={1} margin={2} borderWidth={2} borderColor={'#ddd'}>
    //         <RoutingTable flex={1}/>
    //       </Box>
    //     </div>
    //   </Flex>
    // )
      return (
        <Flex flexDirection='column' h='100vh'>
          <Navbar callBack={props.callBack} />
          <Box  minWidth='300px' flex={1} margin={2} borderWidth={2} borderColor={'#ddd'}justifyContent='space-between'>
            <DragArea callBack={props.callBack} />
          </Box>
          <Box flex='1' minWidth='300px'margin={2} borderWidth={2} borderColor={'#ddd'}>
            <RoutingTable />
          </Box>
        </Flex>
      );


  }





