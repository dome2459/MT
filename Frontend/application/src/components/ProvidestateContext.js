import React, { useState } from 'react';
import GlobalContext from './InitStateContext';

const GlobalProvider = ({ children }) => {


//RouterArray
const [RouterArray, setRouterArray] = useState([
    { id: 1, name: 'R1', x: 100, y: 100 , ip: '255.255.255.0', rip: false, ospf: false},
    { id: 2, name: 'R2', x: 200, y: 200 , ip: '255.255.0.255', rip: false, ospf: false},
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
// other State Vars here





  const contextValue = {
    RouterArray,
    updateRouterArray,
    EditRouter,
    updateEditRouter,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;