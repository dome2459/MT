import React, { Component, useContext } from 'react';
import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel,Button, Box } from '@chakra-ui/react'
import MainEnviroment from '../views/MainEnviroment';
import GlobalContext from './InitStateContext';
import { json } from 'react-router-dom';
import { color } from 'framer-motion';


export default function RouterController() { 

  var apiEndpoint = "http://localhost:8080/api/v1/";
  
  const {RouterArray, updateRouterArray} = useContext(GlobalContext);
  const {EditRouter, updateEditRouter} = useContext(GlobalContext);
  
  async function Reciever(Function, value1, value2, value3) {

    switch (Function) {
      case 'getRouterArrayFromApi':
        return getRouterArrayFromApi()
        break;
      //add other function cases here

    }
  }

  //controller Function
 async function getRouterArrayFromApi(){
     return fetch(apiEndpoint+'router/list',{
      mode : 'cors',
      method: 'get',
      headers: new Headers({
        "access-control-allow-origin" : "*",
        'Content-Type': 'application/json'
      })
     })
       .then(response => response.json())
       .then(json => {
        console.log(json);
        updateRouterArray(json);
         return json;
       })
       .catch(error => {
         console.log(error);
       });
   };

   async function createRouter(data){
    fetch(apiEndpoint+'router/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };
// id des Routers wird noch benötigt und in Endpoint eingetragen
  async function deleteRouter(RouterId){
    fetch(apiEndpoint+'router/delete/'+RouterId ,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // ich hab mal data raus genommen und die RouterId reingegeben
      // das nächste mal drauf Achten das keine Fehler committet werden!!
      body: JSON.stringify(RouterId),
    });
  };
  // id des Routers wird noch benötigt und in Endpoint eingetragen
  async function updateRouterOnDB(data){
    fetch(apiEndpoint+'router/{id}', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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


  return(<Box/>)
}