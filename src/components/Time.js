import React, {useState, useEffect} from "react";

const Time = () => {

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <h2 className="display-2 text-center mt-4">
            {currentTime}
        </h2>
    )
}

export default Time;
