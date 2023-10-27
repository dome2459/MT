import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Image } from '@chakra-ui/react'
import source from "./Router.png";
import { Switch, Stack, FormLabel } from '@chakra-ui/react'

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

  &:hover {
    background: skyblue;
    border-left: 4px solid white;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 0px;
  margin-right: 0px;
  flex-direction: column;

  
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 80px;
  padding-left: 35px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  flex-direction: column;

  &:hover {
    background: skyblue;
    cursor: pointer;
  }
`;

const Inputfield = styled(Link)`
  color: black;
`;


const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
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
                                {item.title}
                                <div>
                                    <Inputfield>
                                        <input />
                                    </Inputfield>
                                </div>

                                {item.title === 'IP' ? (
                                    <Stack direction='column'>
                                        <FormLabel >OSPF:</FormLabel>
                                        <Switch colorScheme='skyblue'  size='md'/>
                                        <FormLabel>RIP:</FormLabel>
                                        <Switch colorScheme='skyblue'  size='md' />
                                        {/* <Image src={source} alt='Router' /> */}
                                    </Stack>
                                ) : (console.log())}
                            </SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    )

}
export default SubMenu;
