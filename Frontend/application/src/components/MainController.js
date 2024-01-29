
        import React, { Component } from 'react';
        import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel,Button } from '@chakra-ui/react'
        import MainEnviroment from '../views/MainEnviroment';
        import RouterController from './components/RouterController';
        import RoutingTableController from './components/RoutingTableController';
        import ConnectionController from './components/ConnectionController';
        import GlobalContext from './InitStateContext';
        
        
        export default function MainController() { 

          const ConConRef = React.createRef();
          const RutConRef = React.createRef();
          const RtaConRef = React.createRef();
        
          const callBack = async(Controller, Function, value1, value2, value3) => {

            switch (Controller) {
              case 'RouterController':
                return RutConRef.current.Reciever(Function, value1, value2, value3);
                break;
              case 'RoutingTableController':
                return RtaConRef.current.Reciever(Function, value1, value2, value3);
                break;
              case 'ConnectionController':
                return ConConRef.current.Reciever(Function, value1, value2, value3);
                break;
            }
          }
        /*
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
        */
            return (
              <> 
              
                
                <RouterController ref={RutConRef}/>
                <RoutingTableController ref={RtaConRef} />
                <ConnectionController ref={ConConRef} />
                <MainEnviroment callBack={callBack}/>
                <Button onClick={() => getRouterArrayFromApi()}></Button>
                
              </>
            )
        }