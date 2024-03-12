import { motion } from 'framer-motion';

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
    <div>
      <motion.h1
        className="font-Product text-7xl font-bold sm:text-8xl"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Experience
      </motion.h1>
    </div>
  );
};

export default Experience;
