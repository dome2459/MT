import React from 'react';
import {useState, useEffect, useRef } from 'react';

export default function Timer() {
   
    const [Seconds, SetSeconds] = useState(0);
    const TimerRef = useRef();

    const intervalId = setInterval(null, 0);

    const useEffect = () => {
        intervalId = setInterval(tick(), 1000);
        return(() => {
            clearInterval(intervalId)
        })
    }
    const startTimer = () => {

        intervalId = setInterval(tick(), 1000);

    }
    const tick = () => {
        this.setState({ seconds: Seconds + 1 });
    }
    return (
        <div style={{ left: '100px', position: 'relative' }}>
            <p>Timer: {Seconds} seconds</p>
        </div>
    );
}