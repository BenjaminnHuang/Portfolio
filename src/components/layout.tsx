import { IoMdClose } from 'react-icons/io';
import Resume from '../assets/pdfs/Hung-I_Huang_resume.pdf';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setCursorVariant } from '../state/cursor/cursorSlice';
import Footer from './footer';
import Navbar from './Navbar';
import { setNavbarOpen } from '../state/navbarSlice';
import { RootState } from '../state/store';
import Main from '../pages/main_page';

const Layout = () => {
  const isNavbarOpen = useSelector(
    (state: RootState) => state.navbar.isNavbarOpen,
  );
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
            dispatch(setNavbarOpen(false));
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
              dispatch(setNavbarOpen(false));
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
              dispatch(setNavbarOpen(false));
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
              dispatch(setNavbarOpen(false));
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
              dispatch(setNavbarOpen(false));
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
              dispatch(setNavbarOpen(false));
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
      {isNavbarOpen ? (
        renderMenu()
      ) : (
        <div className="bg-[#1a191d] text-white">
          <Navbar />
          <Main />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
