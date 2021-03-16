import React from "react";

const Time = () => {

    const getTime = () => {
        const time = new Date();
        return time.toLocaleTimeString();
    }

    return (
        <h2 className="display-2 text-center mt-4">
            {getTime()}
        </h2>
    )
}

export default Time;