import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import Resume from '../assets/pdfs/Hung-I_Huang_resume.pdf';
import { motion } from 'framer-motion';
import Landing from '../pages/landing_page';
import Expertise from '../pages/expertise_page';
import Project from '../pages/project_page';
import { useDispatch } from 'react-redux';
import { setCursorVariant } from '../state/cursor/cursorSlice';
import Footer from './footer';
import Experience from '../pages/experience.page';

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
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
        <div className="mt-12 flex flex-col items-center justify-start gap-12 text-4xl md:mt-24 md:gap-20 md:text-6xl">
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
                x: ['50%', '0%'],
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
                x: ['50%', '0%'],
                transition: {
                  duration: 0.6,
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
                x: ['50%', '0%'],
                transition: {
                  duration: 0.6,
                },
              }}
            >
              Projects
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
                x: ['50%', '0%'],
                transition: {
                  duration: 0.7,
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
          <nav className="absolute top-0 flex w-full flex-row items-center justify-between bg-[#1a191d] bg-transparent px-10 py-4">
            <div className="font-Product text-2xl font-bold">
              Benjamin Huang
            </div>
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
          </nav>
          <main className="flex flex-col items-center justify-center pt-20 md:pt-10">
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
            <section
              id="project"
              className="flex min-h-dvh w-full items-center justify-center py-10"
            >
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
