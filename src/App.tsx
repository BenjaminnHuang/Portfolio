import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/landing_page';
import { useState, useRef } from 'react';
import useMouse from '@react-hook/mouse-position';
import { motion } from 'framer-motion';

function App() {
  const [cursorVariant, setCursorVariant] = useState('default');

  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX ?? 0;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY ?? 0;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 6,
      width: 6,
      backgroundColor: '#66D9ED',
      x: mouseXPosition - 3, // subtract half of the width
      y: mouseYPosition - 3, // subtract half of the height
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 1000,
        damping: 20,
      },
    },
  };

  const borderVariants = {
    default: {
      opacity: 1,
      height: 32,
      width: 32,
      x: mouseXPosition - 16, // subtract half of the width
      y: mouseYPosition - 16, // subtract half of the height
      transition: {
        type: 'spring',
        mass: 0.2,
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Landing />} />
        <Route />
      </Route>,
    ),
  );
  return (
    <div ref={ref}>
      <style>
        {`
        #cursor {
          position: absolute;
          z-index: 999;
          height: 7px;
          width: 7px;
          border-radius: 50%;
          pointer-events: none;
        }
 
        #cursor-border {
            z-index: 9999;
            position: absolute;
            width: 32px;
            height: 32px;
            background-color: transparent;
            border: 1px solid #66D9ED;
            border-radius: 50%;
            pointer-events: none;
        }
      `}
      </style>

      <motion.div
        variants={variants}
        id="cursor"
        animate={cursorVariant}
      ></motion.div>
      <motion.div
        variants={borderVariants}
        id="cursor-border"
        animate={cursorVariant}
      ></motion.div>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
