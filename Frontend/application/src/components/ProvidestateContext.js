import React, { useState } from 'react';
import GlobalContext from './InitStateContext';


const GlobalProvider = ({ children }) => {

  
//RouterArray
const [RouterArray, setRouterArray] = useState([]);
// aktualisiert den RouterArray mit neuen Router
const updateRouterArray = (newValue) => {

    console.log('updateRouterArray: ', newValue)
    setRouterArray(newValue);
  };

const [EditRouter, setEditRouter] = useState({})
const updateEditRouter = (newValue) => {
    setEditRouter(newValue);
};
// CableArray keine Ahnung für was der Rotz gebraucht wird
// schreibt ja auch keiner hin 
const [CableArray, setCableArray] = useState([])

// soll wohl den Rotz aktualisieren oder was
const updateCableArray = (newValue) => {
  console.log('update CableArray: ', newValue);
    setRouterArray(newValue);
  };

  const InitTableData = [
    { Name: 0, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/01', Metric: 2, Networkmask: '255.255.255.192' },
    { Name: 1, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/02', Metric: 2, Networkmask: '255.255.255.192' },
    { Name: 2, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/03', Metric: 2, Networkmask: '255.255.255.192' }
];
const [RoutingTableData, setRoutingTableData] = useState(InitTableData)

const updateRoutingTableData = (newValue) => {
  setRoutingTableData(newValue);
  };
// Naja wollen wir mal auc noch hier was reinschreiben he 

//RouterArray
const [ConnectionArray, setConnectionArray] = useState([]);
// aktualisiert den RouterArray mit neuen Router
const updateConnectionArray = (newValue) => {
  console.log('updateConnectionArray: ', newValue);
  setConnectionArray(newValue);
  };


//bind all Contest Functions
  const contextValue = {
    RouterArray,
    updateRouterArray,
    EditRouter,
    updateEditRouter,
    CableArray,
    updateCableArray,
    RoutingTableData, 
    updateRoutingTableData,
    ConnectionArray,
    updateConnectionArray
  };



  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;