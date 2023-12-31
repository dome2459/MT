import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Image, Input
} from '@chakra-ui/react'
import source from "./Router2.svg";
import DragArea from "./DragArea";
import Switch from "react-switch";
import GlobalContext from "../components/InitStateContext";


const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
    margin: auto;
  &:hover {
    background: skyblue;
    border-left: 4px solid white;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  
  margin: auto;
  margin-right: 30px;
  margin-left: 20px;
  display: block;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 80px;
  padding-left: 35px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 20px;
  flex-direction: column;

  &:hover {
    background: skyblue;
    cursor: pointer;
  }
`;

const Inputfield = styled(Link)`
  color: black;
  padding-right: 15px;
`;



const SubMenu = ({ item, updateRouter }) => {
    const [subnav, setSubnav] = useState(true);
    //const [EditScreen, setEditScreen] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
    const [switchOnOspf, setSwitchOnOspf] = useState(false);
    const [switchOnRip, setSwitchOnRip] = useState(false);

    const {RouterArray, updateRouterArray} = useContext(GlobalContext);
    const {EditRouter, updateEditRouter} = useContext(GlobalContext);
    const {CableArray, setCableArray} = useContext(GlobalContext);

    const NameRef = useRef(null);
    const IpRef = useRef(null);


    useEffect(() => {   
        
            if (NameRef.current !== null) {

            if (EditRouter.id !== undefined ) {

                    NameRef.current.value = EditRouter.name
                    IpRef.current.value = EditRouter.ip
                    setSwitchOnOspf(EditRouter.ospf)
                    setSwitchOnRip(EditRouter.rip)

                } else {
                
                    NameRef.current.value = ''
                    IpRef.current.value = ''
                    setSwitchOnOspf(false)
                    setSwitchOnRip(false)
                } 
            }
           //console.log('submenu mounted')
    }, [EditRouter]);

    const handleChangeOspf = (checked) => {
        setSwitchOnOspf(checked);
        // Wenn OSPF eingeschaltet wird, schalte RIP aus
        if (checked) {
            setSwitchOnRip(false);
        }
    };
    const handleChangeRip = (checked) => {
        
        setSwitchOnRip(checked);
        // Wenn RIP eingeschaltet wird, schalte OSPF aus
        if (checked) {
            setSwitchOnOspf(false);
        }
        
    };
    const addRouter = () => {

        if ( EditRouter.id === undefined ) {

            console.log("first addRouter");
            var newArray = [...RouterArray]; 
            var Name = NameRef.current.value;
            var Ip = IpRef.current.value;
            var newRouter = { name: Name, ip: Ip, ospf: switchOnOspf, rip: switchOnRip, x: 500, y: 500, id: (newArray.length + 1 ) + '_' + Name };
    
                
    
            newArray.push(newRouter)
            updateRouterArray(newArray);

        // Füge neue Router-Daten zum RouterArray hinzu
        //updateRouter(newRouterData);
        //console.log("addRouter");
        // Setze die Eingabefelder zurück
        //setNewRouterData({ name: '', x: 500, y: 500 });
        }
    };
    const saveEditSettings = () => {

        //var newEditRouter = EditRouter; 
        var Name = NameRef.current.value;

        var Ip = IpRef.current.value;
    
        var Ospf = switchOnOspf;

        var Rip = switchOnRip;



        console.log('Name: ' + Name + ' IP: ' + Ip + Ospf + Rip)

    }

    const handleDeleteRouter = () => {
        // Hier den Code für das Löschen des Routers einfügen
        if(EditRouter.id !== undefined)
        {
         var i = RouterArray.findIndex((item) => item.id == EditRouter.id);

         if(i >= 0) 
         {
            var RouterArr = [...RouterArray];
            
            RouterArr.splice(i,1);
            updateRouterArray(RouterArr);
            updateEditRouter({});
        }

        }
    };
    


    return (
        <>
            <SidebarLink to={item.path} onClick={() => item.subNav && showSubnav()}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink key={index}>
                            <SidebarLabel>
                                {item.title === 'OSPF' ? (
                                    <label >
                                        <span style={{ display: 'block' }}>OSPF</span>
                                        <Switch onChange={handleChangeOspf} checked={switchOnOspf} 
                                         />
                                    </label>
                                ) : (null)}
                                {item.title === 'RIP' ? (
                                    <label>
                                        <span style={{ display: 'block' }} >RIP</span>
                                        <Switch onChange={handleChangeRip} checked={switchOnRip} 
                                        />
                                    </label>
                                ) : null}
                                {item.title === 'Name' ? (
                                    <div>
                                        {item.title}
                                        <Inputfield>
                                            <Input
                                                type="text" 
                                                ref={NameRef}
                                                bgColor={'white'}
                                                defaultValue={''}
                                                //onChange={(e) => setNewRouterData({ ...newRouterData, name: e.target.value })}
                                            />
                                        </Inputfield>
                                    </div>
                                ) : null}
                                {item.title === 'IP' ? (
                                    <div>
                                        {item.title}
                                        <Inputfield>
                                            <Input ref={IpRef} type='text' bgColor={'white'} defaultValue={EditRouter.id !== undefined ? (EditRouter.ip) : ('')}
                                            />
                                        </Inputfield>
                                    </div>
                                ) : null}
                                {item.title === 'PIC' ? (
                                    <div>
                                        <Image src={source} alt='Router' style={{ height: '80px', width: '80px' }} />
                                    </div>
                                ) : null}
                                {item.title === 'Hinzufügen' ? (
                                    <Button 
                                        style={{
                                            color: 'darkgrey',
                                            margin: '40px auto 0',
                                            display: 'block',
                                            margin: '0 auto',
                                            backgroundColor: 'white',
                                            padding: '8px 16px',
                                            borderRadius: '4px',
                                            cursor: 'pointer'}
                                        }
                                        onClick={EditRouter.id != undefined ? () => saveEditSettings() : () => addRouter()}>
                                        {EditRouter.id != undefined ? 'Speichern' : 'Hinzufügen'}
                                    </Button>
                                ) : null}

                                {item.title === 'Löschen' &&  EditRouter.id != undefined ?(
                                    <Button
                                        style={{
                                            color: 'darkgrey',
                                            margin: '40px auto 0',
                                            display: 'block',
                                            margin: '0 auto',
                                            backgroundColor: 'white',
                                            padding: '8px 16px',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={handleDeleteRouter}>
                                        Löschen
                                    </Button>
                                ) : null}

                               {item.title === 'Verbinden' ? (
                                    <button
                                        style={{
                                            color: 'darkgrey',
                                            margin: '40px auto 0',
                                            display: 'block',
                                            margin: '0 auto',
                                            backgroundColor: 'white',
                                            padding: '8px 16px',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={handleDeleteRouter}>
                                        Verbinden
                                    </button>
                                ) : null}

                                {item.title === 'Verbundener-Router' ? (
                                    <div>
                                      <label>Router3</label>  
                                      <button
                                        style={{
                                            color: 'red',
                                            display: 'inline-block',
                                            margin: '8px',
                                            backgroundColor: 'white',
                                            padding: '8px 16px',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                           
                                            
                                        }}
                                        onClick={handleDeleteRouter}>
                                        X
                                    </button>
                                    </div>
                                ) : (null)}
                            </SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    )
}
export default SubMenu;
