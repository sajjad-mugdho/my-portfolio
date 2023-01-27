import React from 'react';

import image from '../assets/avatar.svg';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const Banner = () => {
  return <section className='min-h-[78vh] mb-10 flex items-center'>
    <div className="container mx-auto">


      <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-12 gap-y-8'>
        {/* text */}
        <div className=' flex-1 text-center font-secondary lg:text-left'>
          <motion.h1
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='text-[55px] lg:text[110px] font-bold leading-[0.8]'>

            MD SAJJAD <span>HOSSEN</span>
          </motion.h1>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-6  text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]
            '>
            <span className=' text-white mr-4'>
              I am a</span>
            <br />
            <TypeAnimation sequence={[
              'MERN Stack Developer',
              2000,
              'Frontend Developer',
              2000,
              'React Developer',
              2000,
            ]}
              speed={50} className="text-accent" wrapper='span' repeat={Infinity} />
          </motion.div>
          <motion.h4
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='text-2xl mb-6 max-w-lg mx-auto lg:mx-0'>
            Build Smart, Build Secure.
          </motion.h4>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='flex items-center max-w-max gap-x-6 mx-auto mb-8 lg:mx-0'>
            <button className='btn btn-lg'>Contract Me</button>
            <a href="#" className='text-gradient btn-link'> My Portfolio</a>
          </motion.div >
          {/* social  icons */}
          <motion.div
            variants={fadeIn('up', 0.7)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='flex text-[20px] mx-auto max-w-max gap-x-6 lg:mx-0'>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

        {/* image */}
        <motion.div
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[400px] mx-auto'>
          <img src={image} alt="" />
        </motion.div >
      </div>
    </div>
  </section >;
};

export default Banner;
