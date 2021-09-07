import React, { useRef, useEffect, useState } from 'react';
import gsap, { Power2 } from 'gsap';

const App = () => {
  const container = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  useEffect(() => {
    gsap.from([text1.current, text2.current, text3.current], {
      delay: 0.1,
      duration: 0.85,
      stagger: 0.1,
      ease: Power2.easeInOut,
      y: 100,
      opacity: 0,
    });
  }, []);

  return (
    <div className="w-full h-screen bg-red-500 flex justify-center items-center">
      <div
        ref={container}
        className="font-manrope font-semibold text-5xl flex flex-col text-center"
      >
        <span
          className="overflow-hidden relative py-2 inline-block"
        >
          <span
            ref={text1}
            className="relative"
          >
            Otivar is <i className="font-spectral font-medium">contemporary</i> digital
          </span>
        </span>
        <span
          className="py-2 overflow-hidden"

        >
          <span ref={text2}>
            landscape we devised for all
          </span>
        </span>
        <span
          className="font-spectral font-medium py-2 overflow-hidden"
        >
          <span ref={text3}>
            <i>your projects</i>
          </span>
        </span>
      </div>
    </div>
  );
};

export default App;
