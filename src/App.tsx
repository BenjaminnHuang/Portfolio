import Navbar from './components/Navbar';
import { useState, useRef, useContext } from 'react';
import useMouse from '@react-hook/mouse-position';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { CursorContext } from './contexts/CursorContext';

function App() {
  const { cursorVariant, cursorBorderVariant } = useContext(CursorContext);
  const [mouseXPosition, setMouseXPosition] = useState(0);
  const [mouseYPosition, setMouseYPosition] = useState(0);

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
      height: 6,
      width: 6,
      backgroundColor: '#66D9ED',
      x: mouseXPosition - 3,
      y: mouseYPosition - 3,
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 1000,
        damping: 20,
      },
    },
    hover: {
      opacity: 0.8,
      height: 30,
      width: 30,
      backgroundColor: '#66D9ED',
      x: mouseXPosition - 15,
      y: mouseYPosition - 15,
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 400,
        damping: 50,
      },
    },
    hoverImage: {
      opacity: 1,
      height: 30,
      width: 30,
      backgroundColor: 'transparent',
      color: '#ffffff',
      x: mouseXPosition - 15,
      y: mouseYPosition - 20,
    },
  };

  const borderVariants = {
    default: {
      opacity: 1,
      height: 40,
      width: 40,
      x: mouseXPosition - 20, // subtract half of the width
      y: mouseYPosition - 20, // subtract half of the height
      transition: {
        type: 'spring',
        mass: 0.2,
        stiffness: 300,
        damping: 20,
      },
    },
    hoverImage: {
      opacity: 1,
      height: 50,
      width: 50,
      borderColor: '#ffffff',
      x: mouseXPosition - 25,
      y: mouseYPosition - 25,
      transition: {
        type: 'spring',
        mass: 0.2,
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div ref={ref}>
      <style>
        {`
        #cursor {
          position: fixed;
          z-index: 999;
          border-radius: 50%;
          pointer-events: none;
        }
 
        #cursor-border {
          z-index: 9999;
          position: fixed;
          background-color: transparent;
          border: 2px solid #66D9ED;
          border-radius: 50%;
          pointer-events: none;
        }
      `}
      </style>

      <motion.div
        variants={variants}
        id="cursor"
        animate={cursorVariant.variant}
        className="m-0 flex items-center justify-center p-0 text-5xl leading-none"
      >
        {cursorVariant.variant === 'hoverImage' && '+'}
      </motion.div>
      <motion.div
        variants={borderVariants}
        id="cursor-border"
        animate={cursorBorderVariant.variant}
      ></motion.div>

      <Navbar />
    </div>
  );
}

export default App;
