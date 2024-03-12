import { AnimatePresence, motion } from 'framer-motion';
import { ExperienceData } from '../data/experience';
import ExperienceBar from '../components/experience_bar';

const Experience = () => {
  const variants = {
    initial: { opacity: 0, y: 70 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.6 },
    },
  };

  return (
    <div className="flex h-full flex-col items-center justify-start space-y-16 px-5 py-32 md:px-10">
      <motion.h1
        className="font-Product text-7xl font-bold md:text-8xl"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Experience
      </motion.h1>

      <div className="flex w-full flex-col items-center gap-4">
        <AnimatePresence>
          {ExperienceData.map((experience) => {
            return (
              <motion.div
                key={experience.index}
                className="w-full max-w-3xl"
                initial={{ opacity: 0, x: -300 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.2 * experience.index, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <ExperienceBar {...experience} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Experience;
