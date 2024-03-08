import { motion } from 'framer-motion';
import ProjectCard from '../components/project_card';
import { ProjectData } from '../data/project';

function Project() {
  const variants = {
    initial: { opacity: 0, y: 70 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.6 },
    },
  };
  return (
    <div className="flex w-full flex-col items-center justify-center gap-16 px-5 md:px-10">
      <motion.h1
        className="font-Product text-7xl font-bold sm:text-8xl"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Work
      </motion.h1>

      <ProjectCard
        title={ProjectData[0].title}
        description={ProjectData[0].description}
        image={ProjectData[0].image}
      />
    </div>
  );
}

export default Project;
