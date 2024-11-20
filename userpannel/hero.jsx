import React from 'react';
import { motion } from 'framer-motion';
import heroBackground from '../src/assets/img/cv5.jpg';
import { NavLink } from 'react-router-dom'

function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[650px] flex items-center text-white"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-6 sm:px-8 md:px-10 max-w-screen-xl">
        <div className="text-center md:text-left">

          <motion.h1
            className="text-3xl sm:text-6xl font-extrabold leading-tight"
            initial={{ y: -50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }} // Slower animation
          >
            Craft a{' '}
            <span className="text-blue-400 underline">Professional Resume</span>
            <br />
            <motion.span
              className="text-white-400"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.5, ease: 'easeOut' }} // Slower and delayed
            >
              That Gets Noticed!
            </motion.span>
          </motion.h1>

          <p className="mt-8 text-lg sm:text-xl text-gray-300">
            Stand out in the job market with an ATS-friendly, modern resume.
          </p>
          <p className="mt-4 text-gray-300">
            Leverage our tools and expertise to build a powerful resume that
            guarantees an increase in interview calls.{' '}
            <span className="font-semibold text-white">
              Take the next step in your career with confidence.
            </span>
          </p>


          <div className="mt-8 flex justify-center md:justify-start">
            <NavLink
              to="/pricing"
              className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              activeClassName="bg-blue-700"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Building My Resume
              </motion.button>
            </NavLink>
          </div>

          <div className="mt-6 flex justify-center md:justify-start text-gray-400 space-x-4">
            <motion.p
              className="text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.2 }}
            >
              Trusted by Professionals at:
            </motion.p>
            <motion.span
              className="text-xs sm:text-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.3 }}
            >
              Google
            </motion.span>{' '}
            •{' '}
            <motion.span
              className="text-xs sm:text-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.4 }}
            >
              Amazon
            </motion.span>{' '}
            •{' '}
            <motion.span
              className="text-xs sm:text-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.5 }}
            >
              Apple
            </motion.span>{' '}
            •{' '}
            <motion.span
              className="text-xs sm:text-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.6 }}
            >
              Tesla
            </motion.span>
          </div>
        </div>
      </div>

    </section>

  );
}

export default HeroSection;
