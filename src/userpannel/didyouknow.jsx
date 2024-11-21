import React, { useEffect, useState } from "react";
import { FaChartPie, FaBriefcase, FaUsers, FaClock } from "react-icons/fa";

const DidYouKnow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { label: "Resumes rejected without being seen", percentage: 75, icon: <FaChartPie className="w-8 h-8 text-blue-500" /> },
    { label: "Fortune 500 companies using ATS", percentage: 98, icon: <FaBriefcase className="w-8 h-8 text-blue-500" /> },
    { label: "Job seekers not reaching interview stage", percentage: 95, icon: <FaUsers className="w-8 h-8 text-blue-500" /> },
    { label: "Increase in interview callbacks with ATS-optimized resumes", percentage: 65, icon: <FaClock className="w-8 h-8 text-blue-500" /> },
    { label: "Hiring managers spend less than 7 seconds on a resume", percentage: 90, icon: <FaChartPie className="w-8 h-8 text-blue-500" /> },
  ];

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("didYouKnowSection");
      if (section && section.getBoundingClientRect().top < window.innerHeight) {
        setIsVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="didYouKnowSection" className="py-10 bg-gradient-to-r from-blue-100 via-gray-100 to-gray-200 text-gray-800 relative overflow-hidden">

      <div className="absolute top-4 left-4 w-20 h-20 md:w-24 md:h-24 opacity-90 hidden md:block">
        <img src="/img/avatar1.jpg" alt="Avatar 1" className="w-full h-full object-cover rounded-full shadow-lg" />
      </div>
      <div className="absolute bottom-4 right-4 w-20 h-20 md:w-28 md:h-28 opacity-90 hidden md:block">
        <img src="/img/avatar 2.webp" alt="Avatar 2" className="w-full h-full object-cover rounded-full shadow-lg" />
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center relative ">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-3">Did You Know?</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          Discover the eye-opening statistics that highlight the significance of a well-crafted resume in today’s competitive job market.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-6 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105"
              style={{ backgroundImage: 'linear-gradient(to top right, #ebf8ff, #dbeafe)', borderWidth: '9px' }}
            >

              <div className="absolute -top-4 -right-4 bg-blue-100 rounded-full p-2 shadow-md animate-bounce">
                {stat.icon}
              </div>


              <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                {isVisible ? <Counter end={stat.percentage} /> : 0}%
              </h3>
              <p className="text-base font-medium text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = (timestamp) => {
      if (start === 0) start = timestamp;
      const progress = timestamp - start;
      setCount(Math.min(Math.floor((progress / duration) * end), end));
      if (progress < duration) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end]);

  return <span>{count}</span>;
};

export default DidYouKnow;
