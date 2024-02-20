import { motion } from 'framer-motion';
import selfie from '../assets/photos/selfie.jpg';
import { ArrowDown } from '../assets/svgs/ArrowDown';

const Landing = () => {
  const arrowVariants = {
    jump: {
      y: ['0%', '-10%', '0%'], // Adjust the percentages for a larger or smaller jump
      transition: {
        y: {
          duration: 1, // Control the speed of the jump here
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div className="flex h-auto w-auto flex-col items-center justify-center gap-10 font-Product lg:flex-row-reverse lg:gap-44">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: 'spring',
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="h-72 w-72 overflow-hidden rounded-full shadow-lg md:h-96 md:w-96 lg:h-80 lg:w-80 2xl:h-96 2xl:w-96"
          >
            <img
              src={selfie}
              alt="Selfie"
              className="object-fit h-full w-full"
            />
          </motion.div>
          {/* Header */}
          <div className="flex max-w-[340px] flex-col gap-5 md:max-w-[450px] lg:max-w-[370px] 2xl:max-w-[560px]">
            <div className="text-3xl leading-tight md:text-5xl md:leading-snug lg:text-4xl lg:leading-tight 2xl:text-6xl">
              Hello! I’m Benjamin. <br /> A Software Engineer <br />
              based in San Diego.
            </div>
            <hr />
            <div className="text-md text-justify md:text-2xl lg:text-lg 2xl:text-2xl">
              Passionate about building sleek, user-friendly frontends that
              drive business success and user engagement.
              <br />
              Let’s craft something great together.
            </div>
          </div>
        </div>
        <motion.div
          variants={arrowVariants}
          animate="jump"
          className="lg:self-start"
        >
          <ArrowDown width={70} height={70} />
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;