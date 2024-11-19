import React from "react";
import { motion } from "framer-motion";
import {
  FaPen,
  FaFileAlt,
  FaLinkedin,
  FaRocket,
  FaUserTie,
  FaRegLightbulb,
  FaHandsHelping,
} from "react-icons/fa";


const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.3 } },
};

function FeaturesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-6">

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-800">
            Transform Your Career
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We offer comprehensive solutions to accelerate your career growth.
          </p>
        </motion.div>


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >

          {[
            {
              icon: <FaPen className="text-4xl text-blue-500" />,
              title: "Tailored Resume Writing",
              description:
                "Create industry-specific resumes to make your skills stand out.",
            },
            {
              icon: <FaFileAlt className="text-4xl text-green-500" />,
              title: "Persuasive Cover Letters",
              description:
                "Impress recruiters with personalized and compelling cover letters.",
            },
            {
              icon: <FaLinkedin className="text-4xl text-blue-800" />,
              title: "LinkedIn Optimization",
              description:
                "Enhance your LinkedIn profile to attract the best opportunities.",
            },
            {
              icon: <FaRocket className="text-4xl text-red-500" />,
              title: "Career Coaching",
              description:
                "Achieve your goals with tailored advice from expert coaches.",
            },
            {
              icon: <FaRegLightbulb className="text-4xl text-yellow-500" />,
              title: "Skill Assessment",
              description:
                "Identify and improve your strengths for long-term success.",
            },
            {
              icon: <FaHandsHelping className="text-4xl text-purple-500" />,
              title: "Lifetime Support",
              description:
                "Stay updated with ongoing career support and guidance.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="p-8 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>



        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Succeed?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join countless professionals who trust us to advance their careers.
          </p>
          <a
            href="/pricing"
            className="bg-blue-600 text-white py-4 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturesSection;
