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



const SubMenu = ({ item, updateRouter, props }) => {
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
         var i = RouterArray.findIndex((item) => item.id === EditRouter.id);

            if(i >= 0) 
            {
                var RouterArr = [...RouterArray];
                
                RouterArr.splice(i,1);
                updateRouterArray(RouterArr);
                updateEditRouter({});
            }
        }
    }

    const handleAddRouter = () => {
        console.log('IpRef:', IpRef.current.value); // Überprüfe die Konsolenausgabe hier
        console.log('IpRef:', IpRef.value);
        console.log('NameRef', NameRef.current.value)
        // Überprüfe, ob die IP-Adresse gültig ist
        if (IpRef.current && (validateIPv4(IpRef.current.value) || IpRef.current.value !== '')) {
            // Die IP ist gültig oder leer, füge den Router hinzu
            console.log(IpRef.current.value);
            props.addRouter();
        } else {
            // Die IP ist ungültig, zeige eine Fehlermeldung an oder führe andere Aktionen durch
            console.log('Ungültige IPv4-Adresse');
        }
    };

    const validateIPv4 = (ip) => {
        // Regulärer Ausdruck für eine gültige IPv4-Adresse
        const ipv4Regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return ipv4Regex.test(ip);
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
                                            <Input  
                                            type='text'
                                            ref={IpRef} 
                                            bgColor={'white'} 
                                            defaultValue={EditRouter.id !== undefined ? (EditRouter.ip) : ('')}
                                            />
                                        </Inputfield>
                                    </div>
                                ) : null}
                                {
                                    item.title === 'Subnet' ? (
                                        <div>
                                        {item.title}
                                        <Inputfield>
                                            <Input ref={IpRef} type='text' bgColor={'white'} />
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
                                        onClick={EditRouter.id != undefined ? () => saveEditSettings() : () => handleAddRouter()}>
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
                                {item.title === 'Neue Verbindung' ? (
                                    <div>
                                        {item.title}
                                        <Inputfield>
                                            <input />
                                        </Inputfield>
                                    </div>
                                ) : (console.log())}

                                {item.title === 'Verbundener-Router' ? (
                                    <div>
                                      <label>RouterX</label>  
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
