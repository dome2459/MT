import React, { useState } from 'react';
import GlobalContext from './InitStateContext';

const GlobalProvider = ({ children }) => {


//RouterArray
const [RouterArray, setRouterArray] = useState([
    { id: 1, name: 'R1', x: 100, y: 100 , ip: '255.255.255.0', rip: false, ospf: true},
    { id: 2, name: 'R2', x: 200, y: 200 , ip: '255.255.0.255', rip: true, ospf: false},
    { id: 3, name: 'R3', x: 300, y: 300 , ip: '255.0.255.255', rip: false, ospf: false},
    { id: 4, name: 'R4', x: 400, y: 400 , ip: '0.255.0.255', rip: false, ospf: false},
    { id: 5, name: 'R5', x: 600, y: 600 ,ip: '255.255.0.0', rip: false, ospf: false},
  ])
const updateRouterArray = (newValue) => {
    setRouterArray(newValue);
  };

const [EditRouter, setEditRouter] = useState({})
const updateEditRouter = (newValue) => {
    setEditRouter(newValue);
};

const [CableArray, setCableArray] = useState([
{ connectionId: '1', routerA: 1, routerB: 2, ospf: '', rip: '' },
{ connectionId: '2', routerA: 1, routerB: 3, ospf: '', rip: '' },
{ connectionId: '3', routerA: 1, routerB: 4, ospf: '', rip: '' },
  { connectionId: '7', routerA: 1, routerB: 0, ospf: '', rip: '' },
//  { connectionId: '4', routerA: 3, routerB: 2, ospf: '', rip: '' },
//  { connectionId: '5', routerA: 0, routerB: 4, ospf: '', rip: '' }
])
const updateCableArray = (newValue) => {
    setRouterArray(newValue);
  };

  const InitTableData = [
    { Number: 0, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/01', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 1, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/02', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 2, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/03', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 3, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/04', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 4, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/05', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 5, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/06', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 6, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/07', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 7, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/08', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 8, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/09', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 9, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/10', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 10, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/11', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 11, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/12', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 12, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/13', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 13, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/14', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 14, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/15', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 15, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/16', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 16, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/17', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 17, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/18', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 18, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/19', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 19, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/20', Metric: 2, Networkmask: '255.255.255.192' },
    { Number: 20, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/21', Metric: 2, Networkmask: '255.255.255.192' },
];
const [RoutingTableData, setRoutingTableData] = useState(InitTableData)
const updateRoutingTableData = (newValue) => {
  setRoutingTableData(newValue);
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
  };



  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;