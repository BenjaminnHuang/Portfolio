import { useState } from 'react';
import { ExperienceType } from '../data/experience';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { AnimatePresence, motion } from 'framer-motion';

const ExperienceBar = ({
  title,
  description,
  location,
  skills,
  date,
  company,
  index,
}: ExperienceType) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const barVariants = {
    initial: { backgroundColor: '#490C86DE' },
    clicked: {
      backgroundColor: '#740CDC',
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  };

  const expandedPageVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 'auto', // Let Framer Motion handle the height transition
      opacity: 1,
      transition: {
        height: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
        opacity: { duration: 0.2 },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { height: { duration: 0.3 }, opacity: { duration: 0.2 } },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };

  const expandedPage = () => {
    return (
      <AnimatePresence initial={false} mode="wait">
        {isExpanded && (
          <motion.div
            key={'expandedPage' + index}
            variants={expandedPageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              key={'expandedPage' + index}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col gap-2 rounded-md bg-[#241D41] p-6 font-Product "
            >
              <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-row items-center gap-2">
                  <IoLocationSharp className="text-[#b8f]" size={23} />
                  <h2 className="text-[16px] font-semibold">{location}</h2>
                </div>
                <h2 className=" text-[16px]">{date}</h2>
              </div>
              <p className="text-start text-lg font-bold">{description}</p>
              <div className="flex flex-row flex-wrap gap-2 py-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="select-none rounded-full bg-[#2C3599] px-[15px] py-[5px] text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <motion.div className="flex w-full max-w-3xl flex-col items-center justify-center gap-4">
      <motion.button
        className={`rounded-md' } flex w-full flex-row items-center
        justify-between rounded-lg px-5 py-4 font-Product text-xs font-bold md:text-lg`}
        onClick={() => setIsExpanded(!isExpanded)}
        variants={barVariants}
        initial="initial"
        animate={isExpanded ? 'clicked' : 'initial'}
      >
        <h2>{title}</h2>
        <div className="flex flex-row items-center justify-center gap-4 md:gap-8">
          <h3>@ {company}</h3>
          {isExpanded ? <FaMinus size={16} /> : <FaPlus size={16} />}
        </div>
      </motion.button>
      {expandedPage()}
    </motion.div>
  );
};

export default ExperienceBar;
