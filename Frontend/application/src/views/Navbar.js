import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
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
  margin-left: 3rem;
  position: relative; /* Änderung: Tippfehler behoben */
  color: white;
  font-size: 20px;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 3rem;
  position: relative;
  color: white;
  font-size: 20px;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


const Nav = styled.div`
  background: #15171c;
  height: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  `;

const DivBut = styled.div`
  padding: 10px;
  margin: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    background: skyblue;

    > * {
      background: skyblue;
    }
  }
`;

export default function NavBar() {
  const [sidebar, setSidebar] = useState(false)
  const TimerRef = useRef();
  const [isTimerRunning, setIsTimerRunning] = useState(false);


  const startTimer = useCallback(() => {
    try {
      console.log(TimerRef.current);
      if (TimerRef.current && !isTimerRunning) {
        console.log('Timer gestartet');
        setIsTimerRunning(true);
        TimerRef.current.startTimer();
      }
    } catch (error) {
      console.error('Fehler beim Starten des Timers in der NavBar:', error);
    }
  }, [TimerRef, isTimerRunning]);


  const stopTimer = useCallback(() => {
    try {
      console.log(TimerRef.current);
      if (TimerRef.current) {
        console.log('Timer gestoppt');
        setIsTimerRunning(false);
        TimerRef.current.stopTimer();
      }
    } catch (error) {
      console.error('Fehler beim Stoppen des Timers in der NavBar:', error);
    }
  }, [TimerRef]);


  const resetTimer = useCallback(() => {
    try {
      console.log(TimerRef.current);
      if (TimerRef.current) {
        console.log('Timer zurückgesetzt');
        setIsTimerRunning(false);
        TimerRef.current.resetTimer();
      }
    } catch (error) {
      console.error('Fehler beim Zurücksetzen des Timers in der NavBar:', error);
    }
  }, [TimerRef]);



  const showSidebar = () => setSidebar(!sidebar)

  return (

    <>
      <IconContext.Provider value={{ color: '#fff' }}>

        <Nav>
          <NavIconMenu to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIconMenu>

          <NavIcon>

            <DivBut >
              <button onClick={() => startTimer()} disabled={isTimerRunning}>
                Start
              </button>
            </DivBut>

            <DivBut onClick={() => stopTimer()}>
              <p>Stop</p>
            </DivBut>

            <DivBut onClick={() => resetTimer()}>
              <p>Reset</p>
            </DivBut>

            <DivBut>
              <p>Löschen</p>
            </DivBut>

            <div >
              <Timer TimerRef={TimerRef} isTimerRunning={isTimerRunning} startTimer={startTimer} stopTimer={stopTimer} />
            </div>

            <p style={{ right: '-450px', position: 'relative', fontWeight: 'bold', textDecoration: 'underline' }}>Monitoring-Tool</p>

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
