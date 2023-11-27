import React, { useState, useEffect, useRef } from 'react';

export default function Timer({TimerRef, isTimerRunning, startTimer, stopTimer }) {
  const [seconds, setSeconds] = useState(0);
  const intervalIdRef = useRef(null);
  const [isReady, setIsReady] = useState(false);


  const startTimerInternal = () => {
    try {
      //  if (!intervalIdRef.current) {
        intervalIdRef.current = setInterval(() => {
          setSeconds((seconds) => seconds + 1);
        }, 1000);
      //  }
    } catch (error) {
      console.error('Fehler beim Starten des Timers:', error);
    }
  };

  const stopTimerInternal = () => {
    try {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    } catch (error) {
      console.error('Fehler beim Stoppen des Timers:', error);
    }
  };

  const resetTimerInternal = () => {
    try {
      clearInterval(intervalIdRef.current);
      console.log(intervalIdRef.current);
      setSeconds(0);
    } catch (error) {
      console.error('Fehler beim Zurücksetzen des Timers:', error);
    }
  };

  useEffect(() => {
    TimerRef.current = {
      startTimer: () => {
        setIsReady(true);
        startTimerInternal();
      },
      stopTimer: stopTimerInternal,
      resetTimer: () => {
        setSeconds(0);
        stopTimerInternal();
      },
    };
  }, [TimerRef]);

  useEffect(() => {
    try {
      if (isReady && isTimerRunning) {
        startTimerInternal();
      } else {
        stopTimerInternal();
      }
    } catch (error) {
      console.error('Fehler beim Aktualisieren des Timers:', error);
    }

    return () => {
      try {
        clearInterval(intervalIdRef.current);
      } catch (error) {
        console.error('Fehler beim Aufräumen des Timers:', error);
      }
    };
  }, [isTimerRunning, isReady]);




  

  return (
    <div style={{ left: '100px', position: 'relative' }}>
      <p>Timer: {seconds} seconds</p>
    </div>
  );
}