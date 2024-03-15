import { motion } from 'framer-motion';
import selfie from '../assets/photos/selfie.jpg';
import { ArrowDown } from '../assets/svgs/ArrowDown';
import { setCursorVariant } from '../state/cursor/cursorSlice';
import { useDispatch } from 'react-redux';

const Landing = () => {
  const dispatch = useDispatch();

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
          className="h-72 w-72 overflow-hidden rounded-full shadow-lg md:h-72 md:w-72 lg:h-80 lg:w-80 2xl:h-96 2xl:w-96"
        >
          <img src={selfie} alt="Selfie" className="object-fit h-full w-full" />
        </motion.div>
        {/* Header */}
        <div className="flex max-w-[340px] flex-col gap-5 md:max-w-[450px] lg:max-w-[370px] 2xl:max-w-[560px]">
          <motion.div
            className="text-center text-3xl leading-tight md:text-4xl md:leading-snug lg:text-start lg:text-4xl lg:leading-tight 2xl:text-6xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.2, duration: 0.6 },
            }}
            viewport={{ once: true }}
          >
            Hello! I’m Benjamin. <br /> A Software Engineer <br />
            based in San Diego.
          </motion.div>
          <motion.hr
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.4, duration: 0.6 },
            }}
            viewport={{ once: true }}
          />
          <motion.div
            className="text-md text-center md:text-xl lg:text-start lg:text-lg 2xl:text-2xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.6, duration: 0.6 },
            }}
            viewport={{ once: true }}
          >
            My drive is in creating elegant and intuitive frontends that elevate
            user experience and business impact.
            <br />
            <br />
            Ready to collaborate on something amazing?
          </motion.div>
        </div>
      </div>
      <motion.button
        variants={arrowVariants}
        animate="jump"
        className="mt-5 lg:self-start"
        onMouseEnter={() => dispatch(setCursorVariant('hover'))}
        onMouseLeave={() => dispatch(setCursorVariant('default'))}
        onClick={() => {
          document.getElementById('expertise')?.scrollIntoView({
            behavior: 'smooth',
          });
        }}
      >
        <ArrowDown width={70} height={70} />
      </motion.button>
    </div>
  );
};

export default Landing;
