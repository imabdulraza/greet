import React, { useEffect, useState } from 'react';

interface TimerProps {
    children: string;
};

const Timer: React.FC<TimerProps> = ({ children }) => {
    // state to store time
    const [time, setTime] = useState(0);

    // state to check stopwatch running or not
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId: string | number | NodeJS.Timeout | undefined;
        if (isRunning) {
            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
            intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    // Hours calculation
    const hours = Math.floor(time / 360000);

    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    // Milliseconds calculation
    const milliseconds = time % 100;

    // Method to start and stop timer
    const startAndStop = () => {
        setIsRunning(!isRunning);
    };

    // Method to reset timer back to 0
    const reset = () => {
        setTime(0);
    };

    return (
        <>
            <div className="stopwatch-container">
                <p className="display-1">
                    {hours}:{minutes.toString().padStart(2, "0")}:
                    {seconds.toString().padStart(2, "0")}:
                    {milliseconds.toString().padStart(2, "0")}
                </p>
                <div className="d-grid gap-2 d-md-flex">
                    <button className="btn btn-primary" onClick={startAndStop}>
                        {isRunning ? "Stop" : "Start"}
                    </button>
                    <button className="btn btn-secondary" onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        </>
    )
};

export default Timer;