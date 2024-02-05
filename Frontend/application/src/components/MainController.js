
import React, { Component, useEffect,useRef, useContext } from 'react';
import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react'
import MainEnviroment from '../views/MainEnviroment';
import GlobalContext from './InitStateContext';
import RoutingTable from './RoutingTable';


export default function MainController(){
const {RouterArray, updateRouterArray} = useContext(GlobalContext);

          
          const ConConRef = React.createRef();
          const RutConRef = React.createRef();
          const RtaConRef = React.createRef();
        

          var apiEndpoint = "http://localhost:8080/api/v1/";
          // const callBack = async(Controller, Function, value1, value2, value3) => {

          //   switch (Controller) {
          //     case 'RouterController':
          //       return RutConRef.current.Reciever(Function, value1, value2, value3);
          //       break;
          //     case 'RoutingTableController':
          //       return RtaConRef.current.Reciever(Function, value1, value2, value3);
          //       break;
          //     case 'ConnectionController':
          //       return ConConRef.current.Reciever(Function, value1, value2, value3);
          //       break;
          //   }
          //}
        /*
          const addRouter = () => {

  const {RouterArray, updateRouterArray} = useContext(GlobalContext);
  const {EditRouter, updateEditRouter} = useContext(GlobalContext);

  const ref = useRef()
  const ConConRef = React.createRef();
  const RutConRef = React.createRef();
  const RtaConRef = React.createRef();

  
  var apiEndpoint = "http://localhost:8080/api/v1/";

  useEffect(() => {
    
  }, []);

  /*
  const callBack = async(Controller, Function, value1, value2, value3) => {

    switch (Controller) {
      case 'RouterController':
        //return RutConRef.current.Reciever(Function, value1, value2, value3);
        break;
      case 'RoutingTableController':
        //return RtaConRef.current.Reciever(Function, value1, value2, value3);
        break;
      case 'ConnectionController':
        //return ConConRef.current.Reciever(Function, value1, value2, value3);
        break;
    }
  }
  */
  async function callBackAlt(Function, value1, value2, value3) {

    switch (Function) {
      case 'test':
        return test(value1, value2, value3)
        break;
      //add other function cases here

    }
}


  async function callBack(Function, value1, value2, value3) {

    switch (Function) {
      case 'test':
        return test(value1, value2, value3)
        break;
      case 'getRouterArrayFromApi':
        return getRouterArrayFromApi(value1, value2, value3)
        break;
      case 'createRouter':
        return createRouter(value1, value2, value3)
        break;
      case 'getConnectionFromApi':
        return getConnectionFromApi(value1, value2, value3)
        break;
      case 'getConnectionWithIdFromApi':
        return getConnectionWithIdFromApi(value1, value2, value3)
        break;
      case 'deleteConnection':
        return deleteConnection(value1, value2, value3)
        break;
      case 'deleteRouter':
        return deleteRouter(value1, value2, value3)
        break;
      case 'updateRouterOnDB':
        return updateRouterOnDB(value1, value2, value3)
        break;
      case 'getRouterTableFromApi':
        return getRouterTableFromApi(value1, value2, value3)
        break;
      case 'getRoutingTableWithID':
        return getRoutingTableWithID(value1, value2, value3)
        break;
      case 'putRoutingTableWithID':
        return putRoutingTableWithID(value1, value2, value3)
        break;
      case 'updatePosition':
         return updatePosition(value1, value2)
         break
      //add other function cases here

    }
}

// holen aller Connections
async function getConnectionFromApi(){
    return fetch(apiEndpoint + '/getConnection/{id}',{
        mode: 'no-corse',
        method: 'GET',
        headers: new Headers({
            "access-control-allow-origin" : "*",
            'Content-Type': 'application/json'
        })
    })
}

// holen einer bestimmten Connection mit ID
// ID der Connection noch vom Objekt holen
async function getConnectionWithIdFromApi(){
    return fetch(apiEndpoint + '/getRoutingTable/{id}',{
    mode: 'no-corse',
    method: 'GET',
    headers: new Headers({
        "access-control-allow-origin" : "*",
        'Content-Type': 'application/json'
    })
})
} 

// löschen der Connection die nicht mehr gebraucht wird
// id des Objekts noch holen
async function deleteConnection(){
return fetch(apiEndpoint + '/delConnection/{id}',{
  mode: 'no-corse',
  method: 'POST',
  headers: new Headers({
    "access-control-allow-origin" : "*",
    'Content-Type': 'application/json'
    })
  })
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
      console.log("Das Hier ");
      console.log(json);

      updateRouterArray(json);
       return json;
     })
     .catch(error => {
       console.log(error);
     });
 };

 async function createRouter(data){
  console.log(data);
  console.log(JSON.stringify(data))
  fetch(apiEndpoint+'router/create', {
    mode : 'cors',
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

async function updatePosition(values, id){
  console.log("das ist die id " + id);
  fetch(apiEndpoint+'router/'+ id, {
    mode: 'cors',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

};
// holen aller Routing Tables
async function getRouterTableFromApi(){
  return fetch(apiEndpoint + '/getRoutingTable',{
  mode: 'no-corse',
  method: 'GET',
  headers: new Headers({
      "access-control-allow-origin" : "*",
      'Content-Type': 'application/json'
  })
})
.then(response => response.json())
.then(json => {
console.log(json);
return json;
})
.catch(error => {
console.log(error);
});
};
// holen einer bestinmmten Tabelle eines Routers
async function getRoutingTableWithID(){
  return fetch(apiEndpoint + '/getRoutingTable/{id}',{
      mode: 'no-cors',
      method: 'GET',
      headers: new Headers({
          "access-control-allow-origin" : "*",
          'Content-Type': 'application/json'
      })
  })

}
// aktualisieren einer RoutingTable eines bestimmten Routers
// id der Tabelle muss noch mitgegeben werden
async function putRoutingTableWithID(){
  return fetch( apiEndpoint + '/putRoutingTable/{id}',{
      mode: 'no-cors',
      method:'POST',
      headers: new Headers({
          "access-control-allow-origin" : "*",
          'Content-Type': 'application/json'
      })
  })
}




    return (
     
        <MainEnviroment callBack={callBack} />

    );  
}
