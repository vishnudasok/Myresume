import React from 'react';
import backgroundImage from '../src/assets/img/billy-huynh-W8KTS-mhFUE-unsplash.jpg';

function VideoSection() {
  return (
    <div className="flex items-center justify-center py-12">
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[60vh] w-full max-w-6xl flex items-center justify-center rounded-2xl overflow-hidden shadow-lg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >

        <div className="absolute inset-0 bg-black opacity-50"></div>


        <div className="relative flex flex-col sm:flex-row items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-6 sm:space-y-0 sm:space-x-12">


          <div className="text-center sm:text-left text-white max-w-lg">
            <span className="text-xs sm:text-sm font-semibold text-green-400 uppercase mb-2 sm:mb-3 block">
              Watch Our Video
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 leading-tight">
              Get Better Solutions for Your Resume
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-4 sm:mb-6">
              Stand out from the herd of job applicants with our professionally-designed resume templates.
              Get noticed, Get hired.
            </p>
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gray-600 text-white font-semibold text-sm sm:text-lg rounded-full hover:bg-blue-700 transition duration-300 shadow-lg">
              Order a Resume Now
            </button>
          </div>


          <div className="flex items-center justify-center mt-6 sm:mt-0">
            <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-full flex justify-center items-center shadow-xl cursor-pointer transition-transform transform hover:scale-110">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-600 rounded-full flex justify-center items-center">
                <span className="text-white text-xl sm:text-2xl">▶</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default VideoSection;
