import { ExpertiseData } from '../data/expertise';
import ExpertiseCard from '../components/expertise_card';
import { motion } from 'framer-motion';
import BG from '/code_bg.png';

const Expertise = () => {
  const variants = {
    initial: { opacity: 0, y: 70 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.6 },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center gap-16 px-5 md:px-10">
      <motion.h1
        className="font-Product text-7xl font-bold sm:text-8xl"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Expertise
      </motion.h1>

      <div className="relative z-10 grid grid-flow-row gap-4 bg-transparent md:grid-cols-2 md:gap-0 lg:grid-cols-3">
        {ExpertiseData.map((expertise) => {
          return (
            <ExpertiseCard
              key={expertise.index}
              index={expertise.index}
              title={expertise.title}
              skills={expertise.skills}
            />
          );
        })}
        <img
          src={BG}
          alt="coding background"
          className="absolute left-1/2 -z-10 -translate-x-1/2 transform opacity-0 md:opacity-15 "
        />
      </div>
    </div>
  );
};

export default Expertise;
