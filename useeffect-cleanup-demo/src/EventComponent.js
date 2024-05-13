import React, { useEffect } from 'react';

const EventComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log('Scrolling...');
    };

    
    document.addEventListener('scroll', handleScroll);

   
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
       <h2 className='tc'>Timer Count</h2>
      
    </div>
  );
};

export default EventComponent;
