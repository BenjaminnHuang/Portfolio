import { useState } from 'react';
import { ProjectType } from '../data/project';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import {
  setCursorVariant,
  setCursorBorderVariant,
} from '../state/cursor/cursorSlice';
import { ArrowRight } from '../assets/svgs/ArrowRight';

const ProjectCard = ({ title, description, image }: ProjectType) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const arrowVariants = {
    jump: {
      x: ['0%', '10%', '0%'], // Adjust the percentages for a larger or smaller jump
      transition: {
        x: {
          duration: 1, // Control the speed of the jump here
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        },
      },
    },
  };

  return (
    <div
      className="group max-w-lg overflow-hidden rounded-md font-Product text-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full w-full overflow-hidden">
        <a
          href="http://www.fvtech.com.tw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={image}
            alt="project image"
            className="transform transition-transform duration-500 ease-in-out hover:cursor-pointer group-hover:scale-110"
            onMouseEnter={() => {
              dispatch(setCursorVariant('hoverImage'));
              dispatch(setCursorBorderVariant('hoverImage'));
            }}
            onMouseLeave={() => {
              dispatch(setCursorVariant('default'));
              dispatch(setCursorBorderVariant('default'));
            }}
          />
        </a>
      </div>
      <div className="flex flex-row items-center justify-between bg-[#8888880d] p-8 text-white">
        <div className="flex flex-col items-start justify-center gap-1">
          <h1 className="text-lg font-semibold">{title}</h1>
          <AnimatePresence mode="wait" initial={false}>
            {isHovered ? (
              <motion.a
                key="showProject"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.1 }}
                className=" text-sm font-bold hover:cursor-pointer hover:text-[#66D9ED]"
                href="https://www.fvtech.com.tw"
                target="_blank"
                rel="noreferrer noopener"
                onMouseEnter={() => dispatch(setCursorVariant('hover'))}
                onMouseLeave={() => dispatch(setCursorVariant('default'))}
              >
                Show Project &rarr;
              </motion.a>
            ) : (
              <motion.p
                key="description"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.1 }}
                className=" text-sm font-medium"
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <motion.button
          variants={arrowVariants}
          animate="jump"
          onMouseEnter={() => dispatch(setCursorVariant('hover'))}
          onMouseLeave={() => dispatch(setCursorVariant('default'))}
        >
          <ArrowRight width={50} height={50} />
        </motion.button>
      </div>
    </div>
  );
};

export default ProjectCard;
