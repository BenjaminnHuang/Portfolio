import { ExpertiseData } from '../data/expertise';
import ExpertiseCard from '../components/expertise_card';
import { motion } from 'framer-motion';

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
      <div className="grid grid-flow-row gap-4 md:grid-cols-2 md:gap-0 lg:grid-cols-3">
        {ExpertiseData.map((expertise) => {
          return (
            <ExpertiseCard
              key={expertise.index}
              index={expertise.index}
              title={expertise.title}
              description={expertise.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Expertise;
