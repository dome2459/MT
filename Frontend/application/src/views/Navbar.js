import React, { useState, useRef, useCallback, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import './Navbar.css';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import SubMenu from './SubMenu';
import Timer from './Timer';
import GlobalContext from '../components/InitStateContext';

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
  overflow: scroll;
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

export default function NavBar(props) {

  const [sidebar, setSidebar] = useState(false)
  const TimerRef = useRef();
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerButtonClicked, setTimerButtonClicked] = useState(false);

  const {EditRouter, updateEditRouter} = useContext(GlobalContext);

  useEffect(() => {
    
    setEditMode();

  }, [EditRouter]);

  const setEditMode = () =>{

    if (EditRouter.id !== undefined) {
      setSidebar(true);
    } else {
      setSidebar(false);
    }
  }

  const startTimer = useCallback(() => {
    try {
      console.log(TimerRef.current);
      if (TimerRef.current && !timerButtonClicked) {
        console.log('Timer gestartet');
        setIsTimerRunning(true);
        setTimerButtonClicked(true);
        TimerRef.current.startTimer();
      }
    } catch (error) {
      console.error('Fehler beim Starten des Timers in der NavBar:', error);
    }
  }, [TimerRef,timerButtonClicked]);

  const stopTimer = useCallback(() => {
    try {
      console.log(TimerRef.current);
      if (TimerRef.current && timerButtonClicked) {
        console.log('Timer gestoppt');
        setTimerButtonClicked(false);
        setIsTimerRunning(false);  // Korrektur: setIsTimerRunning auf false setzen
        TimerRef.current.stopTimer();
      }
    } catch (error) {
      console.error('Fehler beim Stoppen des Timers in der NavBar:', error);
    }
  }, [TimerRef, timerButtonClicked]);
  


  const resetTimer = useCallback(() => {
    try {
      console.log(TimerRef.current);
      if (TimerRef.current) {
        console.log('Timer zurückgesetzt');
        setIsTimerRunning(true);  // Setzen Sie den Timer zunächst auf "true"
        setTimerButtonClicked(false);
        setTimeout(() => {
          setIsTimerRunning(false);  // Nach einer kurzen Verzögerung auf "false" setzen
          TimerRef.current.resetTimer();
        }, 0);
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

            <DivBut onClick={() => startTimer()}>
              <p>Start</p>
            </DivBut>

            <DivBut onClick={() => stopTimer()}>
              <p>Stop</p>
            </DivBut>

            <DivBut onClick={() => resetTimer()}>
              <p>Reset</p>
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
              return <SubMenu item={item} key={index} callBack={props.callBack} />;
            })}
          </SidebarWrap>

        </SidebarNav>

      </IconContext.Provider>
    </>
  );



}