import Navbar from './components/Navbar';
import { useState, useRef } from 'react';
import useMouse from '@react-hook/mouse-position';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './state/store';

function App() {
  const [mouseXPosition, setMouseXPosition] = useState(0);
  const [mouseYPosition, setMouseYPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cursorVariant = useSelector(
    (state: RootState) => state.cursor.cursorVariant,
  );
  const cursorBorderVariant = useSelector(
    (state: RootState) => state.cursor.cursorBorderVariant,
  );

  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  useEffect(() => {
    if (mouse.x !== null) {
      setMouseXPosition(mouse.clientX ?? 0 - 3); // subtract half of the width
    }

    if (mouse.y !== null) {
      setMouseYPosition(mouse.clientY ?? 0 - 3); // subtract half of the height
    }
  }, [mouse]);

  const variants = {
    default: {
      opacity: 1,
      height: 8,
      width: 8,
      backgroundColor: '#66D9ED',
      x: mouseXPosition - 4,
      y: mouseYPosition - 4,
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 900,
        damping: 20,
      },
    },
    hover: {
      opacity: 0.8,
      height: 50,
      width: 50,
      backgroundColor: '#66D9ED',
      x: mouseXPosition - 25,
      y: mouseYPosition - 25,
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 900,
        damping: 20,
      },
    },
    hoverImage: {
      opacity: 1,
      height: 30,
      width: 30,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: '#ffffff',
      x: mouseXPosition - 15,
      y: mouseYPosition - 20,
    },
  };

  const borderVariants = {
    default: {
      opacity: 1,
      height: 60,
      width: 60,
      x: mouseXPosition - 30, // subtract half of the width
      y: mouseYPosition - 30, // subtract half of the height
      transition: {
        type: 'spring',
        mass: 0.2,
        stiffness: 300,
        damping: 20,
      },
    },
    hoverImage: {
      opacity: 1,
      height: 60,
      width: 60,
      borderColor: '#ffffff',
      x: mouseXPosition - 30,
      y: mouseYPosition - 30,
    },
  };

  return (
    <div ref={ref}>
      <style>
        {`
        * {
          cursor: none !important;
        }

        #cursor {
          position: fixed;
          z-index: 999;
          border-radius: 50%;
          pointer-events: none;
          ${isMobile ? 'display: none;' : ''}
        }
 
        #cursor-border {
          z-index: 9999;
          position: fixed;
          background-color: transparent;
          border: 2px solid #66D9ED;
          border-radius: 50%;
          pointer-events: none;
          ${isMobile ? 'display: none;' : ''}
        }
      `}
      </style>

      <motion.div
        variants={variants}
        id="cursor"
        animate={cursorVariant}
        className="m-0 flex items-center justify-center p-0 text-5xl leading-none"
      >
        {cursorVariant === 'hoverImage' && '+'}
      </motion.div>
      <motion.div
        variants={borderVariants}
        id="cursor-border"
        animate={cursorBorderVariant}
      ></motion.div>

      <Navbar />
    </div>
  );
}

export default App;
