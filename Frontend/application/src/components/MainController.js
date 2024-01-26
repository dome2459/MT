
        import React, { Component } from 'react';
        import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel,Button } from '@chakra-ui/react'
        import MainEnviroment from '../views/MainEnviroment';
        import GlobalContext from './InitStateContext';
        
        export default function MainController() { 
        
          function callBack(){

          }


          const addRouter = () => {

            if ( EditRouter.id === undefined ) {
    
                console.log("first addRouter");
                var newArray = [...RouterArray]; 
                var Name = NameRef.current.value;
                var Ip = IpRef.current.value;
                var newRouter = { name: Name, ip: Ip, ospf: switchOnOspf, rip: switchOnRip, x: 100, y: 100, id: (newArray.length + 1 ) + '_' + Name };
        
                    
        
                newArray.push(newRouter)
                updateRouterArray(newArray);
    
            // Füge neue Router-Daten zum RouterArray hinzu
            //updateRouter(newRouterData);
            //console.log("addRouter");
            // Setze die Eingabefelder zurück
            //setNewRouterData({ name: '', x: 500, y: 500 });
            }
        };
            return (
              <> 
                <MainEnviroment addRouter={addRouter} />
                
                </>
            )
        }