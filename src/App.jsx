import React, { useRef, useEffect } from 'react';
import gsap, { Power2 } from 'gsap';

const App = () => {
  const image1 = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);
  const image4 = useRef(null);

  useEffect(() => {
    gsap.from([image1.current, image2.current, image3.current, image4.current], {
      transform: 'translateX(120%)',
      duration: 1.3,
      skewX: 5,
      opacity: 0,
      ease: Power2.easeInOut,
      stagger: 0.1,
    });
  }, []);

  return (
    <div className="w-full h-[1200px] bg-red-500 flex justify-center items-center">
      <div className="w-[400px] h-[500px] relative">
        <img
          ref={image1}
          src="https://images.pexels.com/photos/3768163/pexels-photo-3768163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="cool"
          className="w-[300px] h-[400px] object-cover object-center absolute top-[200px] left-[200px] z-50"
        />
        <img
          ref={image2}
          src="https://images.pexels.com/photos/4672246/pexels-photo-4672246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="cool"
          className="w-[260px] h-[350px] object-cover object-center absolute top-[-200px] left-[-225px] z-50"
        />
        <img
          ref={image3}
          src="https://images.pexels.com/photos/2922301/pexels-photo-2922301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="cool"
          className="w-[300px] h-[400px] object-cover object-center absolute top-[-260px] left-[250px] z-50"
        />
        <img
          ref={image4}
          src="https://images.pexels.com/photos/4754648/pexels-photo-4754648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="cool"
          className="w-[300px] h-[400px] object-cover object-center absolute top-[250px] left-[-290px] z-50"
        />
      </div>
    </div>
  );
};

export default App;
