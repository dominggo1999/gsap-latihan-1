import React, { useRef, useEffect, useState } from 'react';
import gsap, { Power3 } from 'gsap';

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current, {
      duration: 1,
      ease: Power3.easeInOut,
      x: '200px',
      width: 0,
    });
  }, []);

  return (
    <div className="w-full h-screen bg-red-500 flex justify-center items-center">
      <div>
        <img
          ref={ref}
          src="https://fonster.qodeinteractive.com/wp-content/uploads/2021/04/h1-slider-img-3.jpg"
          alt="Cool"
          className="w-[400px] h-[300px] object-fit object-cover"
        />
      </div>
    </div>
  );
};

export default App;
