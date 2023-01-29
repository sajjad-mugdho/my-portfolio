import React from 'react';

import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const Services = () => {

  const services = [
    {
      name: "MERN Stack Developmet",
      description: "MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. ... Express and Node make up the middle (application) tier.",
      link: "Learn More"

    },
    {
      name: "Frontend Development",
      description: "Front-end development is the process of building components that interact with users. Examples are the user interface, buttons, user-entered data, websites, and user experience (UX) features",
      link: "Learn More"

    },
    {
      name: "React Development",
      description: "React is a front-end JavaScript library. React is capable of making API calls, which deal with the data. React cannot process the database or the data source itself.",
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
            I am a Freelance MERN Stack Developer | Frontend Developer
          </h3>
          <button className='btn btn-sm'><Link to='work'>See My Work</Link></button>
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
