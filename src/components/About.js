import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return <div className='section mt-10' id='about' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen' >
        {/* img */}
        <motion.div
          variants={fadeIn('right', 0.5)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
        {/* text */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>
            I am a Freelance MERN Stack Developer with 5 years experience
          </h3>
          <p className='mb-6'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus unde explicabo, aliquid veniam incidunt ducimus corrupti saepe neque voluptate minima repudiandae excepturi dolorum magni dolor, illum quia fugit beatae mollitia
          </p>
          {/* stats */}
          <div className='flex gap-x-0 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={15} duration={3} /> : null}+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br />
                Compeleted
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={12} duration={3} /> : null}+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Client <br />
                Setisfied
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={13} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Yaers of <br />
                Exparience
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contract Me</button>
            <a className='text-gradient btn-link' href="#">My Portfolio</a>
          </div>
        </motion.div>
      </div>
    </div>
  </div>;
};

export default About;
