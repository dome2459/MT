import React, { Component } from 'react';
import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel,Button } from '@chakra-ui/react'
import MainEnviroment from '../views/MainEnviroment';
import GlobalContext from './InitStateContext';
import { json } from 'react-router-dom';
import { color } from 'framer-motion';

export default function MainController() { 


  //controller Function
 async function getRouterArrayFromApi(){
     return fetch('http://localhost:8080/api/v1/router/list',{
      method: 'get',
      headers: new Headers({
        "access-control-allow-origin" : "*"
      }

      )
     })
       .then(response => response.json())
       .then(json => {
        console.log(json);
         return json;
       })
       .catch(error => {
         console.error(error);
       });
       
 
   };

  

  






  /*
  each Router has own connection Array

  when add:(
      add each others id in array
  )
  
  when remove: (
      remove connection X from Y, save number X, go to Router X remove connection Y
  )

  function(createCabbleArray) {
      ...
  }


  */


    return (
      <> 
        <MainEnviroment/>
        <Button onClick={() => getRouterArrayFromApi()}></Button>
        </>
    )
}