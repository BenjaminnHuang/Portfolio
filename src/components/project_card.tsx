import { useState } from 'react';
import { ProjectType } from '../data/project';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import {
  setCursorVariant,
  setCursorBorderVariant,
} from '../state/cursor/cursorSlice';

const ProjectCard = ({
  title,
  description,
  image,
  type,
  skills,
  link,
}: ProjectType) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const dispatch = useDispatch();

  // Render the skill tags
  const renderTags = () => {
    return skills.map((skill, index) => (
      <div
        key={index}
        className="select-none rounded bg-green-700 p-1 text-xs font-medium"
      >
        {skill}
      </div>
    ));
  };

  return (
    <motion.div
      className="group max-w-md overflow-hidden rounded-md font-Product text-xl shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative h-full w-full overflow-hidden"
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt="project image"
            className="transform transition-transform duration-500 ease-in-out hover:cursor-pointer group-hover:scale-110"
          />
          {isImageHovered && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-80"
              onMouseEnter={() => {
                dispatch(setCursorVariant('hoverImage'));
                dispatch(setCursorBorderVariant('hoverImage'));
              }}
              onMouseLeave={() => {
                dispatch(setCursorVariant('default'));
                dispatch(setCursorBorderVariant('default'));
              }}
            >
              <p className="px-10 text-center font-bold text-white">
                {description}
              </p>
            </div>
          )}
        </a>
      </div>
      <div className="flex flex-row items-center justify-between bg-[#8888880d] p-8 text-white">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="text-[16px] font-semibold leading-none">{title}</h1>
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
                key="type"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.1 }}
                className="text-sm font-medium"
              >
                {type}
              </motion.p>
            )}
          </AnimatePresence>
          <div className="mt-1 flex flex-row gap-2">{renderTags()}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
