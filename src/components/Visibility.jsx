import React, { useEffect, useState } from 'react';

const Visibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='h-[2000px] p-[20px] mt-[100px]'>
        <h1>Scroll Down Hide Component</h1>
        <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} bg-blue-200 h-24 mb-4`}
        
        >
          {isVisible ? 'mukesh verma' : ''}
        </div>
      </div>
    </div>
  );
};

export default Visibility;
