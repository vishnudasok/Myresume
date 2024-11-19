import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyPage = () => {
  const images = [
    "/img/cv1.jpg",
    "/img/cv2.png",
    "/img/res1.png",
    "/img/res2.jpg",
    "/img/res5.jpg",
    "/img/res6.png",
    "/img/res7.png",
  ];

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 h-screen">

      <div className="w-full md:w-1/3 h-[40vh] md:h-[85vh] overflow-hidden md:ml-32 mt-4 md:mt-20">
        <Slider {...sliderSettings} className="h-full">
          {images.map((img, index) => (
            <div
              key={index}
              className="h-full flex items-center justify-center px-4"
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>


      <div className="w-full md:w-2/3 bg-gray-100 flex flex-col justify-center p-4 md:p-8 h-full max-h-[85vh] overflow-auto mt-6 md:mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center md:text-left">
          We Make Resumes that Stand Out
        </h2>
        <p className="text-sm md:text-lg text-gray-700 mb-6 text-center md:text-left">
          Optimize your resume to pass ATS and impress hiring managers.
        </p>
        <ul className="space-y-3 md:space-y-4 text-xs md:text-base text-gray-700">
          {[
            "ATS-Friendly Resume Templates",
            "Tailored for Specific Job Descriptions",
            "Guaranteed 75%+ ATS Score",
            "Professionally Designed Layouts",
            "Expert Tips for Optimization",
            "Interview Preparation Guides",
            "Customizable Templates",
            "1-on-1 Consultation with Experts",
          ].map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 text-base md:text-xl mr-2">
                &#10003;
              </span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex justify-center md:justify-start mt-6">
          <button
            className="bg-blue-600 text-white py-2 px-6 rounded-full text-sm md:text-lg hover:bg-blue-700 transition-all"
            onClick={() => (window.location.href = "https://wa.me/917907355421")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
