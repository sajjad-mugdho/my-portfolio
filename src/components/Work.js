import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';
import { FaLink } from 'react-icons/fa';

const Work = () => {
  return <section className='section' id='work'>
    <div className="container mx-auto mr-10">
      <div className='flex flex-col lg:flex-row gap-x-5'>
        <motion.div
          variants={fadeIn('right', 0.5)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='flex-1 flex flex-col gap-y-8 mb-10 lg:mb-0'>
          {/* text */}
          <div className='mb-24'>
            <h2 className=' h2 leading-tight text-accent'>My Leatest <br /> Work</h2>
            {/* <p className='max-w-sm mb-8'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora blanditiis dolore consequuntur fuga? Mollitia.
            </p> */}
            <button className='btn btn-sm'>View All Projects</button>
          </div>
          {/* image */}
          <div className=' group relative mt-5 overflow-hidden w-[24rem] lg:w-[28rem]  border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>
                Doctors Portal MERN Stack
              </span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-xl  flex gap-2 text-white'>
                <a target='_blank' className='hover:text-blue-500' href="https://doctors-portal-client-b826a.web.app/"> Live Link</a>
                <a target='_blank' className='hover:text-blue-500' href="https://github.com/sajjad-mugdho/doctor-porta-client">Client Side</a>
                <a target='_blank' className='hover:text-blue-500' href="https://github.com/sajjad-mugdho/doctors-portal-server">Server Side</a>
              </span>
            </div>

          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} className='flex-1 flex flex-col justify-center gap-y-8'>
          <div className=' group relative overflow-hidden  w-[24rem] lg:w-[26rem] border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>
                EDUxx MERN PROJECT With FIREBASE
              </span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-xl  flex gap-2 text-white'>
                <a target='_blank' className='hover:text-blue-500' href="https://eduxx-assignment.firebaseapp.com/">Live Link</a>
                <a target='_blank' className='hover:text-blue-500' href="https://github.com/sajjad-mugdho/learning-platdorm-eduxx">Client Side</a>
                <a target='_blank' className='hover:text-blue-500' href="https://github.com/sajjad-mugdho/learning-platdorm-eduxx-server">Server Side</a>
              </span>
            </div>

          </div>
          <div className="flex-1">
            <div className=' group relative overflow-hidden w-[24rem] lg:w-[26rem] border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  GooBike MERN CURD PROJECT
                </span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-xl  flex gap-2 text-white'>
                  <a target='_blank' className='hover:text-blue-500' href="https://goobike-b125c.web.app/"> Live Link</a>
                  <a target='_blank' className='hover:text-blue-500' href="https://github.com/sajjad-mugdho/goobike-resell-bike-client">Client Side</a>
                  <a target='_blank' className='hover:text-blue-500' href="https://github.com/sajjad-mugdho/gooBike-resell-bike-server">Server Side</a>
                </span>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;
