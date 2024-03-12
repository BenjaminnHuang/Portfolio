import { motion } from 'framer-motion';
import { ExpertiseType } from '../data/expertise';

const ExpertiseCard = (props: ExpertiseType) => {
  const underline = (index: number) => {
    switch (index) {
      case 1:
        return 'chonky-underline-megenta';
      case 2:
        return 'chonky-underline-blue';
      case 3:
        return 'chonky-underline-yellow';
    }
  };

  const variants = {
    initial: { opacity: 0, y: 70 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 * index, duration: 0.6 },
    }),
  };

  const renderTags = () => {
    return props.skills.map((skill, index) => (
      <motion.div
        key={index}
        className="select-none rounded-md bg-[#2d2c31] px-2 py-1 font-Product text-sm"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.2 * index, duration: 0.3 },
        }}
        viewport={{ once: true }}
      >
        {skill}
      </motion.div>
    ));
  };

  return (
    <motion.div
      className={`
        ${props.index === 2 && 'md:border-l-0 lg:border-l-2 lg:border-r-0'} 
        ${props.index === 1 && 'md:border-b-0 lg:border-b-2 lg:border-r-0'}
        flex flex-col gap-4 border-2 bg-[#1a191d] px-[30px] py-10 lg:max-w-96`}
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={props.index}
    >
      <div className="font-Product text-5xl font-bold md:text-3xl">
        <span className={`relative z-10 ${underline(props.index)}`}>
          {props.title.split(' ')[0]}
        </span>

        <h2>{props.title.split(' ')[1]}</h2>
      </div>
      <h3 className="flex flex-row flex-wrap gap-2">{renderTags()}</h3>
    </motion.div>
  );
};

export default ExpertiseCard;
