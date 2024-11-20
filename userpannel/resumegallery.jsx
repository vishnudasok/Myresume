import React, { useState } from "react";
import { motion } from "framer-motion";


import resume1 from "/img/cv1.jpg";
import resume2 from "/img/cv2.png";
import resume3 from "/img/cv3.jpg";
import resume4 from "/img/cv4.jpg";
import resume5 from "/img/cv5.jpg";
import resume6 from "/img/cv6.webp";
import resume7 from "/img/cv7.avif";
import resume8 from "/img/cv8.avif";
import resume9 from "/img/cv9.jpg";
import resume10 from "/img/cv10.avif";
import resume11 from "/img/cv11.avif";
import resume12 from "/img/cv12.avif";


const resumeImages = [
  { id: 1, src: resume1 },
  { id: 2, src: resume2 },
  { id: 3, src: resume3 },
  { id: 4, src: resume4 },
  { id: 5, src: resume5 },
  { id: 6, src: resume6 },
  { id: 7, src: resume7 },
  { id: 8, src: resume8 },
  { id: 9, src: resume9 },
  { id: 10, src: resume10 },
  { id: 11, src: resume11 },
  { id: 12, src: resume12 },
];


const getAnimationProps = (index) => ({
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.2, 1],
  },
  transition: {
    duration: 1.5,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop",
    delay: index * 0.3,
  },
});

const ResumeGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResume, setSelectedResume] = useState(null);

  const openModal = (resume) => {
    setSelectedResume(resume);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedResume(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-10">
          Explore Our Professional Resume Samples
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16">
          Discover a selection of resumes designed to make an impact.
        </p>


        <div className="flex flex-wrap justify-center gap-6">
          {resumeImages.map((image, index) => {
            const animationProps = getAnimationProps(index);
            return (
              <motion.div
                key={image.id}
                className="relative overflow-hidden rounded-full shadow-md bg-white border border-gray-200"
                {...animationProps}
                style={{
                  width: "180px",
                  height: "180px",
                  perspective: "800px",
                }}
              >
                <motion.img
                  src={image.src}
                  alt={`Resume ${image.id}`}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                />
                <div
                  className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-center justify-center text-white cursor-pointer"
                  onClick={() => openModal(image.src)}
                >
                  <p className="text-lg font-semibold">View Resume</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>


      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white p-6 rounded-lg w-96 max-w-full relative shadow-lg"
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <div className="flex justify-center">
              <img
                src={selectedResume}
                alt="Selected Resume"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold">This is the full resume</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ResumeGallery;
