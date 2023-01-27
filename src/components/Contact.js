import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return <section className='lg:section py-16' id='contract'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide '>
              Get in touch
            </h4>
            <h2 className='text-[45px] lg:text[90px] leading-none mb-12'>Let's Work <br /> together!</h2>
          </div>
        </motion.div>
        {/* form */}
        <motion.form
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='flex-1 flex flex-col border rounded-2xl gap-y-5 pb-20 p-6 items-start' action="">
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            placeholder='Your Name' type="text" name="" id="" />
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            placeholder='Your Email' type="text" name="" id="" />
          <textarea className='bg-transparent border-b outline-none mb-12 resize-none w-full py-10 placeholder:text-white focus:border-accent transition-all'
            placeholder='Your Message'></textarea>
          <button className='btn btn-lg'>Send Message</button>
        </motion.form>
      </div>
    </div>
  </section>;
};

export default Contact;
