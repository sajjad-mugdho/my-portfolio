import React from 'react';

import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Services = () => {

  const services = [
    {
      name: "MERN Stack Developmet",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Obcaecati, sint.Suscipit recusandae aut veritatis,",
      link: "Learn More"

    },
    {
      name: "Frontend Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Obcaecati, sint.Suscipit recusandae aut veritatis,",
      link: "Learn More"

    },
    {
      name: "React Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Obcaecati, sint.Suscipit recusandae aut veritatis,",
      link: "Learn More"

    },
  ]
  return <div className='section' id='servcices'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          c
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 '>
          <h2 className='h2 text-accent mb-6'>What I Do</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
            I am a Freelance MERN Stack Developer with 5 years experience
          </h3>
          <button className='btn btn-sm '>See My Work</button>
        </motion.div>
        {/* services */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          c
        >
          <div className='flex-1'>
            {
              services.map(service => <div className='border-b border-white/20 h-[146px] mb-[38px] flex'>
                <div className='max-w-[476px]' >
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{service.name}</h4>
                  <p className='font-secondary leading-tight'>{service.description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                    href="#"><BsArrowUpRight /></a>
                  <a href="#" className='text-gradient text-sm'>{service.link}</a>
                </div>
              </div>)
            }
          </div>
        </motion.div>
      </div>
    </div>

  </div>;
};

export default Services;
