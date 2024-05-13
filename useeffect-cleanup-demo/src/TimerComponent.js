import React, { useEffect, useState } from 'react';

const TimerComponent = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); 

  return (
    <div>
        
      <h2 className='timer'> 
        Timer: {timer}</h2>
    </div>
  );
};

export default TimerComponent;
