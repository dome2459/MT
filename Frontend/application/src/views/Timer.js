import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    tick = () => {
        this.setState({ seconds: this.state.seconds + 1 });
    }

    render() {
        return (
            <div style={{ left: '100px', position: 'relative' }}>
                <p>Timer: {this.state.seconds} seconds</p>
            </div>
           


        );
    }
}

export default Timer;