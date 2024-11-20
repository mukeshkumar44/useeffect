import React,{useEffect, useState} from 'react'

const ScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const Scroll = () => {
      setScrollPosition(window.scrollY); 
    };

    window.addEventListener('scroll', Scroll);

    
    return () => {
      window.removeEventListener('scroll', Scroll);
    };
  }, []);
  return (
    <div className='mt-60'>
     <h1>Scroll Position Tracker</h1>
      <p>Scroll Position: {scrollPosition}px</p>
      <div className='h-[2000px]'> 
        <p>Scroll down to see the position update</p>
      </div> 
    </div>
  )
}

export default ScrollPosition
