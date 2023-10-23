import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as SlControl from "react-icons/sl";
import * as MdOutline from "react-icons/md";
import { SidebarData } from "./SidebarData";
import './Navbar.css';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import SubMenu from './SubMenu';
import Timer from './Timer';

const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;
const NavIconMenu = styled(Link)`
  margin-left: 2rem;
  // margin-right: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  positiom: relative;
  color: white;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  `;


export default function NavBar() {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (

    <>
      <IconContext.Provider value={{ color: '#fff' }}>

        <Nav>
          <NavIconMenu to='#'>

            <FaIcons.FaBars onClick={showSidebar} />

          </NavIconMenu>

          <NavIcon>

            <SlControl.SlControlStart /><span> = Start  |</span>

            <MdOutline.MdOutlineDeleteForever /><span> = Löschen  |</span>

            <div className="App">
              <Timer />
            </div>

            <p style={{ right: '-450px', position: 'relative', fontWeight: 'bold',textDecoration: 'underline' }}>Monitoring-Tool</p>

          </NavIcon>

        </Nav>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>

        </SidebarNav>

      </IconContext.Provider>
    </>
  );



}