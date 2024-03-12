import { motion } from 'framer-motion';
import ProjectCard from '../components/project_card';
import { ProjectData } from '../data/project';

function Project() {
  const variants = {
    initial: { opacity: 0, y: 70 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.4, duration: 0.5 },
    },
  };

  const renderProjects = () => {
    return ProjectData.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 * (index + 1), delay: 0.1 * (index + 1) }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ProjectCard
          link={project.link}
          title={project.title}
          type={project.type}
          image={project.image}
          description={project.description}
          skills={project.skills}
        />
      </motion.div>
    ));
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-16 px-5 md:px-10">
      <motion.h1
        className="z-10 font-Product text-7xl font-bold md:text-8xl"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Work
      </motion.h1>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:flex-row lg:grid-cols-3">
        {renderProjects()}
      </div>
    </div>
  );
}

export default Project;
