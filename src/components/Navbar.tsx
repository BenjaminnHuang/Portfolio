import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import Resume from '../assets/pdfs/Hung-I_Huang_resume.pdf';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Landing from '../pages/landing_page';
import Expertise from '../pages/expertise_page';
import Project from '../pages/project_page';
import { useDispatch } from 'react-redux';
import { setCursorVariant } from '../state/cursor/cursorSlice';
import Footer from './footer';
import Experience from '../pages/experience.page';

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
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

  const hoverAnimation = {
    rotate: [0, 3.3, -3.0, 0],
    transition: {
      rotate: {
        delay: 0.1,
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  const renderMenu = () => {
    return (
      <div className="flex min-h-dvh flex-col bg-[#1a191d] text-white">
        <button
          className="mx-10 my-4 self-end"
          onMouseEnter={() => dispatch(setCursorVariant('hover'))}
          onMouseLeave={() => dispatch(setCursorVariant('default'))}
          onClick={() => {
            setToggleDrawer(false);
            dispatch(setCursorVariant('default'));
          }}
        >
          <motion.div
            whileHover={hoverAnimation}
            transition={{ duration: 0.4 }}
          >
            <IoMdClose size={36} />
          </motion.div>
        </button>
        <div className=" flex flex-col items-start justify-start gap-12 px-14 text-4xl md:gap-20 md:px-28 md:text-6xl">
          <a
            href="#landing"
            onMouseEnter={() => dispatch(setCursorVariant('hover'))}
            onMouseLeave={() => dispatch(setCursorVariant('default'))}
            onClick={() => {
              setToggleDrawer(false);
              dispatch(setCursorVariant('default'));
            }}
          >
            <motion.div
              whileHover={hoverAnimation}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                },
              }}
            >
              About Me
            </motion.div>
          </a>
          <a
            href="#expertise"
            onMouseEnter={() => dispatch(setCursorVariant('hover'))}
            onMouseLeave={() => dispatch(setCursorVariant('default'))}
            onClick={() => {
              setToggleDrawer(false);
              dispatch(setCursorVariant('default'));
            }}
          >
            <motion.div
              whileHover={hoverAnimation}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.1,
                  duration: 0.5,
                },
              }}
            >
              Expertise
            </motion.div>
          </a>
          <a
            href="#project"
            onMouseEnter={() => dispatch(setCursorVariant('hover'))}
            onMouseLeave={() => dispatch(setCursorVariant('default'))}
            onClick={() => {
              setToggleDrawer(false);
              dispatch(setCursorVariant('default'));
            }}
          >
            <motion.div
              whileHover={hoverAnimation}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5,
                },
              }}
            >
              Work
            </motion.div>
          </a>
          <a
            href="#experience"
            onMouseEnter={() => dispatch(setCursorVariant('hover'))}
            onMouseLeave={() => dispatch(setCursorVariant('default'))}
            onClick={() => {
              setToggleDrawer(false);
              dispatch(setCursorVariant('default'));
            }}
          >
            <motion.div
              whileHover={hoverAnimation}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              }}
            >
              Experience
            </motion.div>
          </a>
          <a
            href={Resume}
            target="_blank"
            onMouseEnter={() => dispatch(setCursorVariant('hover'))}
            onMouseLeave={() => dispatch(setCursorVariant('default'))}
            onClick={() => {
              setToggleDrawer(false);
              dispatch(setCursorVariant('default'));
            }}
          >
            <motion.div
              whileHover={hoverAnimation}
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.4,
                  duration: 0.5,
                },
              }}
            >
              Resume
            </motion.div>
          </a>
        </div>
      </div>
    );
  };
  return (
    <>
      {toggleDrawer ? (
        renderMenu()
      ) : (
        <div className="bg-[#1a191d] text-white">
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
                setToggleDrawer(true);
                dispatch(setCursorVariant('default'));
              }}
              onMouseEnter={() => dispatch(setCursorVariant('hover'))}
              onMouseLeave={() => dispatch(setCursorVariant('default'))}
            >
              <RxHamburgerMenu size={36} />
            </motion.button>
          </motion.nav>
          <main className="flex flex-col items-center justify-center">
            <section
              id="landing"
              className="flex min-h-dvh w-full items-center justify-center py-10"
            >
              <Landing />
            </section>
            <section
              id="expertise"
              className="flex min-h-dvh w-full items-center justify-center py-10"
            >
              <Expertise />
            </section>
            <section
              id="project"
              className="flex min-h-dvh w-full items-center justify-center py-10"
            >
              <Project />
            </section>
            <section id="experience" className="h-auto w-full">
              <Experience />
            </section>
          </main>
          <footer className="flex items-center justify-center bg-[#29282e] py-5">
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
};

export default Navbar;
