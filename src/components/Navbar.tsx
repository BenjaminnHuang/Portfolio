import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setCursorVariant } from '../state/cursor/cursorSlice';
import { setNavbarOpen } from '../state/navbarSlice';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Hide the navbar when scrolling down
  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    const previous = scrollY.getPrevious();
    if (latestScrollY > previous && latestScrollY > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const dispatch = useDispatch();

  return (
    <motion.nav
      className="sticky top-0 z-50 flex w-full flex-row items-center justify-between bg-[#1a191d] px-10 py-4 shadow-lg"
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <a
        href="#landing"
        className="font-Product text-2xl font-bold"
        onMouseEnter={() => dispatch(setCursorVariant('hover'))}
        onMouseLeave={() => dispatch(setCursorVariant('default'))}
      >
        Benjamin Huang
      </a>
      <motion.button
        whileHover={{ scale: '1.2' }}
        onClick={() => {
          dispatch(setNavbarOpen(true));
          dispatch(setCursorVariant('default'));
        }}
        onMouseEnter={() => dispatch(setCursorVariant('hover'))}
        onMouseLeave={() => dispatch(setCursorVariant('default'))}
      >
        <RxHamburgerMenu size={36} />
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
