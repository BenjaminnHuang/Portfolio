import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import { NavLink, Outlet } from 'react-router-dom';
import Resume from '../assets/pdfs/Hung-I_Huang_resume.pdf';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const renderMenu = () => {
    return (
      <div className="flex min-h-dvh flex-col bg-[#1a191d] text-white">
        <button className="mx-10 my-4 self-end">
          <motion.div
            whileHover={{
              rotate: 90,
              transition: { duration: 0.4 },
            }}
            transition={{ duration: 0.4 }}
          >
            <IoMdClose size={36} onClick={() => setToggleDrawer(false)} />
          </motion.div>
        </button>
        <div className="mt-12 flex flex-col items-center justify-start gap-12 text-4xl md:mt-24 md:gap-20 md:text-6xl">
          <NavLink to="/" onClick={() => setToggleDrawer(false)}>
            <motion.div
              whileHover={{
                rotate: [0, 3.3, -3.0, 0],
                transition: {
                  rotate: {
                    delay: 0.1,
                    duration: 0.6,
                    ease: 'easeInOut', // This can be adjusted for a smoother animation
                  },
                },
              }}
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
          </NavLink>
          <NavLink to="projects" onClick={() => setToggleDrawer(false)}>
            <motion.div
              whileHover={{
                rotate: [0, 3.3, -3.0, 0],
                transition: {
                  rotate: {
                    delay: 0.1,
                    duration: 0.6,
                    ease: 'easeInOut', // This can be adjusted for a smoother animation
                  },
                },
              }}
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
          </NavLink>
          <a href={Resume} target="_blank">
            <motion.div
              whileHover={{
                rotate: [0, 3.3, -3.3, 0],
                transition: {
                  rotate: {
                    delay: 0.1,
                    duration: 0.6,
                    ease: 'easeInOut', // This can be adjusted for a smoother animation
                  },
                },
              }}
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
        <div className="flex min-h-dvh w-screen flex-col bg-[#1a191d] pb-5 text-white lg:relative">
          <header className="sticky top-0 z-10 flex flex-row items-center justify-between bg-[#1a191d] px-10 py-4">
            <div className="font-Product text-2xl font-bold">
              Benjamin Huang
            </div>
            <motion.button
              whileHover={{ scale: '1.2' }}
              onClick={() => setToggleDrawer(true)}
            >
              <RxHamburgerMenu size={36} />
            </motion.button>
          </header>
          <main className="h-full py-10 lg:my-auto">
            <Outlet />
          </main>
        </div>
      )}
    </>
  );
};

export default Navbar;
