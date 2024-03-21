import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
    Button, Image, Input, Text, Select
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
  padding-right: 15px;input {
  }
`;



const SubMenu = ({ item, updateRouter, ...props },) => {
    const [subnav, setSubnav] = useState(true);
    //const [EditScreen, setEditScreen] = useState(false);
    const [ipInputColor, setIpInputColor] = useState('white');
    const [metrikInputColor, setMetrikInputColor] = useState('white');
    const [subnetInputColor, setSubnetInputColor] = useState('white');
    const [nameInputColor, setNameInputColor] = useState('white');
    const showSubnav = () => setSubnav(!subnav);
    const [switchOnOspf, setSwitchOnOspf] = useState(false);
    const [switchOnRip, setSwitchOnRip] = useState(false);
    const [selectedRouter, setSelectedRouter] = useState(null);
    const [ospfMetric, setOspfMetric] = useState('');
    const [ospfMetricInputVisible, setOspfMetricInputVisible] = useState(false);
    const [ospfMetricRef, setOspfMetricRef] = useState(null);
    const { RouterArray, updateRouterArray } = useContext(GlobalContext);
    const { EditRouter, updateEditRouter } = useContext(GlobalContext);
    //const { ConnectionArray = [], updateConnectionArray } = useContext(GlobalContext);
    let { ConnectionArray = [], updateConnectionArray } = useContext(GlobalContext);
    //const { CableArray, setCableArray } = useContext(GlobalContext);
    const [SelectedRouterId, setSelectedRouterId] = useState(null);
    const { CableArray, updateCableArray } = useContext(GlobalContext);


    const NameRef = useRef(null);
    const IpRef = useRef(null);
    const SubnetRef = useRef(null);
    const metricValueRef = useRef(null);
    const RouterRef = useRef(null);
    let routerB = null;

    const handleRouterSelection = (event) => {
        console.log('event.target.value: ', event)
        // Wert der ausgewählten Option extrahieren
        const selectedRouterId = parseInt(event);
        console.log('selectedRouterId von handleRouterSelection: ', selectedRouterId);
        // Hier können Sie den ausgewählten Router anhand seiner ID finden und speichern
        const selectedRouter = RouterArray.find(router => router.id === selectedRouterId);
        // Jetzt haben Sie den ausgewählten Router in der Variable selectedRouter
        // Sie können damit machen, was auch immer Sie brauchen
        console.log("(handleRouterSelection) Ausgewählter Router:", selectedRouter);
        setSelectedRouterId(selectedRouterId);
    };

    useEffect(() => {
        handleConnectionArrayUpdate();
    }, [EditRouter, ConnectionArray]);

    // const handleConnectionArrayUpdate = () => {
    //     let foundConnection = null;
    //     if (EditRouter.id !== undefined) {
    //         console.log('USEEFFECT ConnectionArray(Global) ', ConnectionArray);
    //         console.log('Ausgewählter Router im UseEffect: ', EditRouter)
    //         if (ConnectionArray.length !== 0) {
    //             for (let i = 0; i < ConnectionArray.length; i++) {
    //                 const connection = ConnectionArray[i];
    //                 if (connection.routerA === EditRouter.name && connection.routerAIp === EditRouter.ip) {
    //                     foundConnection = connection;
    //                     break;
    //                 }
    //             }
    //             if (foundConnection) {
    //                 console.log("Connection gefunden ", foundConnection);
    //                 if (RouterRef.current) {
    //                     RouterRef.current.value = EditRouter.name;
    //                 }
    //                 setSwitchOnOspf(foundConnection.ospf);
    //                 console.log('foundConnection- Metrik: ', foundConnection.metrik);
    //                 setOspfMetric(foundConnection.metrik);
    //                 setSwitchOnRip(foundConnection.rip);
    //                 setSelectedRouter(foundConnection.routerB);
    //             } else {
    //                 if (metricValueRef.current) {
    //                     metricValueRef.current.value = ''
    //                 }
    //                 setSwitchOnOspf(false);
    //                 setSwitchOnRip(false);
    //             }
    //         }
    //     } else if (ConnectionArray.length > 0) {
    //         foundConnection = null;
    //         foundConnection = ConnectionArray.find(connection =>
    //             connection.routerA === EditRouter.name && connection.routerAIp === EditRouter.ip);
    //         if (foundConnection) {
    //             console.log("Connection gefunden ", foundConnection);
    //             if (RouterRef.current) {
    //                 RouterRef.current.value = EditRouter.name;
    //             }
    //             setSwitchOnOspf(foundConnection.ospf);
    //             console.log('foundConnection- Metrik: ', foundConnection.metrik);
    //             setOspfMetric(foundConnection.metrik);
    //             setSwitchOnRip(foundConnection.rip);
    //             setSelectedRouter(foundConnection.routerB);
    //         } else {
    //             console.log("keine Connection gefunden")
    //             if (metricValueRef.current) {
    //                 metricValueRef.current.value = ''
    //             }
    //             setSwitchOnOspf(false);
    //             setSwitchOnRip(false);
    //         }
    //     }

    //     else {
    //         console.log('ConnectionArray = 0', ConnectionArray);
    //         if (metricValueRef.current) {
    //             metricValueRef.current.value = ''
    //         }
    //         setSwitchOnOspf(false);
    //         setSwitchOnRip(false);
    //     }

    // };

    const handleConnectionArrayUpdate = () => {
        let foundConnection = null;
    
        if (EditRouter.id !== undefined) {
            console.log('USEEFFECT ConnectionArray(Global) ', ConnectionArray);
            console.log('Ausgewählter Router im UseEffect: ', EditRouter);
    
            if (ConnectionArray.length !== 0) {
                for (let i = 0; i < ConnectionArray.length; i++) {
                    const connection = ConnectionArray[i];
                    if (connection.routerA === EditRouter.name && connection.routerAIp === EditRouter.ip) {
                        foundConnection = connection;
                        break;
                    }
                }
            }
    
            if (foundConnection) {
                console.log("Connection gefunden ", foundConnection);
                if (RouterRef.current) {
                    RouterRef.current.value = EditRouter.name;
                }
                setSwitchOnOspf(foundConnection.ospf);
                console.log('foundConnection- Metrik: ', foundConnection.metrik);
                setOspfMetric(foundConnection.metrik);
                setSwitchOnRip(foundConnection.rip);
                setSelectedRouter(foundConnection.routerB);
            } else {
                console.log("keine Connection gefunden");
                if (metricValueRef.current) {
                    metricValueRef.current.value = ''
                }
                setSwitchOnOspf(false);
                setSwitchOnRip(false);
            }
        } else {
            console.log('EditRouter.id ist nicht definiert');
            if (metricValueRef.current) {
                metricValueRef.current.value = ''
            }
            setSwitchOnOspf(false);
            setSwitchOnRip(false);
        }
    };




    useEffect(() => {
        if (EditRouter.id !== undefined) {
            if (NameRef.current) {
                NameRef.current.value = EditRouter.name;
            }
            if (IpRef.current) {
                IpRef.current.value = EditRouter.ip;
            }
            if (RouterRef.current) {
                RouterRef.current.value = EditRouter.name;
            }
        } else {
            if (NameRef.current) {
                NameRef.current.value = '';
            }
            if (IpRef.current) {
                IpRef.current.value = '';
            }
            if (RouterRef.current) {
                RouterRef.current.value = '';
            }
        }
    }, [EditRouter]);


    const handleChangeOspf = (checked) => {
        setSwitchOnOspf(checked);

        if (checked) {
            setSwitchOnRip(false);
            setOspfMetricInputVisible(true);
        } else {
            setOspfMetricInputVisible(false);
            setOspfMetric('');
        }
    };

    const handleChangeRip = (checked) => {
        setSwitchOnRip(checked);
        if (checked) {
            setSwitchOnOspf(false);
            setOspfMetricInputVisible(false);
            setOspfMetric('');
        }
    };

    const saveEditSettings = (EditRouter) => {
        //var newEditRouter = EditRouter; 
        var Name = NameRef.current.value;
        var Ip = IpRef.current.value;
        var Subnet = SubnetRef.current.value;
        console.log('Name: ' + Name + ' IP: ' + Ip + ' Subnet: ' + Subnet)
        EditRouter.ip = IpRef.current.value;
        EditRouter.name = NameRef.current.value;
        EditRouter.networkmask = SubnetRef.current.value;
        props.callBack('updateRouterOnDB', EditRouter);
        var RouterArr = [...RouterArray];
        updateRouterArray(RouterArr);
    }

    const handleDeleteRouter = () => {

        if (EditRouter.id !== undefined) {
            var i = RouterArray.findIndex((item) => item.id === EditRouter.id);

            if (i >= 0) {
                var RouterArr = [...RouterArray];
                RouterArr.splice(i, 1);
                updateRouterArray(RouterArr);
                updateEditRouter({});
                props.callBack('deleteRouter', EditRouter);
                props.callBack('getRouterArrayFromApi');
            }
        }
    }

    const handleConnectRouter = () => {
        console.log("RouterArray:", RouterArray);

        console.log('selected Router (handleConnectRouter) ', SelectedRouterId);
        if (SelectedRouterId !== null) {

            console.log('selected Router (handleConnectRouter) ', SelectedRouterId);

            if (switchOnOspf && validateMetric(ospfMetric) || switchOnRip) {
                console.log('validierung der Metrik: ', ospfMetric);
                console.log('validierung RIP : ', switchOnRip);

                const foundRouter = RouterArray.find(router => router.id === SelectedRouterId);

                if (foundRouter !== null) {

                    console.log("Gefundenes Router-Objekt: ", foundRouter);
                    console.log("Selctiertes Router-Objekt: ", EditRouter);
                    if (foundRouter.name !== EditRouter.name && foundRouter.ip !== EditRouter.ip && foundRouter !== null && foundRouter.ip !== null) {
                        var Connection = {
                            routerA: EditRouter.name,
                            routerAInterface: 'fa01',
                            routerB: foundRouter.name,
                            routerBInterface: 'fb01',
                            ospf: switchOnOspf,
                            metrik: ospfMetric,
                            rip: switchOnRip,
                            routerAIp: EditRouter.ip,
                            routerBIp: foundRouter.ip,
                        };

                        props.callBack('postConnection', Connection);
                        console.log('postConnection: ', Connection);

                        props.callBack('getRouterArrayFromApi');
                        updateConnectionArray(Connection);
                        updateCableArray(Connection);
                        console.log('ConnectionArray from SubMenu', ConnectionArray);
                    } else {
                        console.log("Es waren 2 gleiche Router Objekte.... soo gehts nicht! ")
                    }
                } else {
                    console.log("Router mit der angegebenen ID nicht gefunden.");
                }
            } else {
                console.log('Validierung der Metrik hat nicht geklappt')
            }
        } else {
            console.log("Kein Router ausgewählt.");
        }
    }

    const handleDeleteConnection = () => {
        console.log("handleDeleteConnection ConnectionArray:", ConnectionArray);
        if (ConnectionArray && ConnectionArray.length > 0 && EditRouter.id !== undefined) {
            console.log("handleDeleteConnection RouterArray:", RouterArray);
            let foundConnection = ConnectionArray.find(connection =>
                connection.routerA === EditRouter.name && connection.routerAIp === EditRouter.ip &&
                (connection.ospf === switchOnOspf
                    || connection.rip === switchOnRip));
            if (foundConnection) {
                console.log('handleDeleteConnection (foundConnection): ', foundConnection);
                props.callBack('deleteConnection', foundConnection);
                ConnectionArray = ConnectionArray.filter(connection => connection !== foundConnection);
                props.callBack('getRouterArrayFromApi');
                props.callBack('getConnectionFromApi');
                console.log('ConnectionArray nach dem löschen: ', ConnectionArray);
            } else {
                console.log("Keine Connection gefunden.");
            }
        } else {
            console.log("Keine Connection gefunden und kein Router ausgewählt");
        }
    }

    const handleAddRouter = () => {

        if (IpRef.current && (validateIPv4(IpRef.current.value) && IpRef.current.value !== '')) {

            console.log(IpRef.current.value);
            if (SubnetRef.current && (validateSubnet(SubnetRef.current.value) && SubnetRef.current.value !== '')) {

                console.log(SubnetRef.current.value);
                if (NameRef.current && (validateName(NameRef.current.value) && NameRef.current.value !== '')) {
                    console.log(NameRef.current.value);

                    var newRouter = { ip: IpRef.current.value, name: NameRef.current.value, routingTableId: 1, networkmask: SubnetRef.current.value, posX: 500, posy: 300, activ: true };
                    console.log(newRouter);

                    props.callBack('createRouter', newRouter);
                    props.callBack('getRouterArrayFromApi');
                } else {
                    console.log('ungültiger Name');
                }
            } else {

                console.log('Ungültiges Subnetz');
            }

        } else {

            console.log('Ungültige IPv4-Adresse und Subnet');
        }
    }

    const validateIPv4 = (ip) => {
        const ipv4Regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        const isValid = ipv4Regex.test(ip);
        setIpInputColor(isValid ? 'white' : '#FFCCCB');
        return ipv4Regex.test(ip);

    }
    const validateSubnet = (subnet) => {
        const subnetRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
        const isValid = subnetRegex.test(subnet);
        setSubnetInputColor(isValid ? 'white' : '#FFCCCB');
        return isValid;
    }
    const validateName = (name) => {
        const nameRegex = /^[a-zA-Z0-9]+$/;
        const isValid = nameRegex.test(name.trim());
        setNameInputColor(isValid ? 'white' : '#FFCCCB');
        return isValid;
    }

    const validateMetric = (value) => {
        const isValid = /^\d{1,4}$/.test(value);
        setMetrikInputColor(isValid ? 'white' : '#FFCCCB')
        return isValid;
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
                                                bgColor={nameInputColor}
                                                defaultValue={EditRouter.id !== undefined ? (EditRouter.ip) : ('')}
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
                                                bgColor={ipInputColor}
                                                placeholder="192.168.0.1"
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
                                                <Input
                                                    ref={SubnetRef}
                                                    type='text'
                                                    bgColor={subnetInputColor}
                                                    placeholder="255.255.255.0"
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
                                            cursor: 'pointer'
                                        }
                                        }
                                        onClick={EditRouter.id !== undefined ? () => saveEditSettings(EditRouter) : () => handleAddRouter()}>
                                        {EditRouter.id !== undefined ? 'Speichern' : 'Hinzufügen'}

                                    </Button>
                                ) : null}
                                {item.title === 'Löschen' && EditRouter.id !== undefined ? (
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
                                    <div>
                                        <label style={{ display: 'block' }}>OSPF</label>
                                        <Switch onChange={handleChangeOspf} checked={switchOnOspf} />
                                    </div>
                                ) : null}
                                {item.combinedTitle && (
                                    <SidebarLabel key={item.combinedTitle}>
                                        {item.subItems.map((subItem, index) => (
                                            <div key={index}>
                                                {subItem.title === 'Metrik' && switchOnOspf ? (
                                                    <Inputfield>
                                                        <Input
                                                            type="number"
                                                            placeholder="Metrik"
                                                            bgColor={metrikInputColor}
                                                            value={ospfMetric}
                                                            ref={metricValueRef}
                                                            onChange={(e) => setOspfMetric(e.target.value)}
                                                        />
                                                    </Inputfield>
                                                ) : null}
                                                {subItem.title === 'RIP' && !switchOnOspf ? (
                                                    <label>
                                                        <span style={{ display: 'block' }}>RIP</span>
                                                        <Switch onChange={handleChangeRip} checked={switchOnRip} />
                                                    </label>
                                                ) : null}
                                            </div>
                                        ))}
                                    </SidebarLabel>
                                )}
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
                                        onClick={handleConnectRouter}>
                                        Verbinden
                                    </button>
                                ) : null}
                                {item.title === 'ConnectionList' ? (
                                    <div>
                                        <label>Zielrouter</label>
                                        <Select
                                            bgColor={nameInputColor}
                                            color={"black"}
                                            //value={selectedRouter ? selectedRouter.id : ''}
                                            onChange={(e) => handleRouterSelection(e.target.value)}
                                        >
                                            {ConnectionArray && ConnectionArray.length > 0 && ConnectionArray.some(connection => {
                                                return connection.routerA === EditRouter.name && connection.routerAIp === EditRouter.ip;
                                            }) ? (
                                                RouterArray && RouterArray.length > 0 && RouterArray.map((router, index) => {
                                                    const isConnected = ConnectionArray && ConnectionArray.length > 0 && ConnectionArray.some(connection => {
                                                        return connection.routerA === EditRouter.name && connection.routerAIp === EditRouter.ip && connection.routerB === router.name;
                                                    });

                                                    if (isConnected) {
                                                        return <option key={index} value={router.id}>{router.name}</option>

                                                    } else {
                                                        return null;
                                                    }
                                                })
                                            ) : (
                                                RouterArray && RouterArray.length > 0 && RouterArray
                                                    .filter(router => router.id !== EditRouter.id)
                                                    .map((router, index) => (
                                                        <option key={index} value={router.id}>{router.name}</option>

                                                    ))
                                            )}
                                        </Select>
                                    </div>
                                ) : null}
                                {item.title === 'Router' ? (
                                    <div>
                                        {item.title}
                                        <Inputfield>
                                            <Input
                                                type="text"
                                                ref={RouterRef}
                                                bgColor={nameInputColor}
                                                readOnly={true}
                                                defaultValue={EditRouter.id !== undefined ? (EditRouter.id) : ('')}
                                            />
                                        </Inputfield>
                                    </div>
                                ) : null}

                                {item.title === 'Connection-Löschen' && EditRouter.id !== undefined ? (
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
                                        onClick={handleDeleteConnection}>
                                        Löschen
                                    </Button>
                                ) : null}
                            </SidebarLabel>
                        </DropdownLink >
                    );
                })}
        </>
    )
}
export default SubMenu;
