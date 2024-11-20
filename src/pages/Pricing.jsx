import React, { useState } from 'react';
import { FaCheckCircle, FaStar, FaUserShield, FaAward } from 'react-icons/fa';
import pricebackground from '../assets/img/pricing3.jpg';

const PricingSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div>

      <div
        className="relative bg-cover bg-center py-32 px-6 text-white text-center"
        style={{ backgroundImage: `url(${pricebackground})` }}
      >

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>


        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Elevate Your Career with <span className="text-green-400 underline">Professional Resumes</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10">
            "A well-crafted resume opens doors to endless opportunities. Let us help you stand out in the job market!"
          </p>


          <div className="flex justify-center items-center gap-8 text-lg mb-10 flex-wrap">
            <div className="flex flex-col items-center">
              <FaCheckCircle className="text-green-400 text-4xl mb-2" />
              <span>ATS Optimized</span>
            </div>
            <div className="flex flex-col items-center">
              <FaStar className="text-green-400 text-4xl mb-2" />
              <span>Top Quality</span>
            </div>
            <div className="flex flex-col items-center">
              <FaUserShield className="text-green-400 text-4xl mb-2" />
              <span>Guaranteed Privacy</span>
            </div>
            <div className="flex flex-col items-center">
              <FaAward className="text-green-400 text-4xl mb-2" />
              <span>Proven Success</span>
            </div>
          </div>
        </div>
      </div>


      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            Compare Our <span className="text-blue-600">Packages</span>
          </h2>


          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Basic Pack</th>
                  <th className="py-4 px-6 text-center">Professional Pack</th>
                  <th className="py-4 px-6 text-center">Executive Pack</th>
                </tr>
              </thead>
              <tbody>

                <tr className="border-t">
                  <td className="py-4 px-6 font-semibold">ATS-Friendly Resume</td>
                  <td className="py-4 px-6 text-center">75% ATS Score</td>
                  <td className="py-4 px-6 text-center">85% ATS Score</td>
                  <td className="py-4 px-6 text-center">90% ATS Score</td>
                </tr>

                <tr className="border-t">
                  <td className="py-4 px-6 font-semibold">Job-Optimized Cover Letter</td>
                  <td className="py-4 px-6 text-center">✔️</td>
                  <td className="py-4 px-6 text-center">✔️</td>
                  <td className="py-4 px-6 text-center">✔️</td>
                </tr>

                <tr className="border-t">
                  <td className="py-4 px-6 font-semibold">LinkedIn Profile Optimization</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">✔️</td>
                </tr>

                <tr className="border-t">
                  <td className="py-4 px-6 font-semibold">LinkedIn E-Book & ChatGPT Prompts</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">❌</td>
                  <td className="py-4 px-6 text-center">✔️</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            Our <span className="text-blue-600">Packages</span>
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div
              className="rounded-lg shadow-lg p-6 text-center text-white relative overflow-hidden"
              style={{
                background: 'linear-gradient(to right, #34d399 50%, #10b981 50%)',
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Basic Pack</h3>
              <p className="text-lg mb-4">Get an ATS-Friendly Resume tailored to your profile.</p>
              <p className="text-3xl font-bold mb-2">₹1,499 - ₹4,999</p>


              <div className="mb-4">
                <label className="block text-white font-semibold mb-2">Experience Level</label>
                <select className="px-4 py-2 w-full rounded-md text-gray-800">
                  <option>0-3 Years of Experience</option>
                  <option>3-5 Years of Experience</option>
                  <option>5+ Years of Experience</option>
                </select>
              </div>


              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-center">
                  <FaCheckCircle className="text-white mr-2" /> ATS-Friendly Resume with 75% ATS Score
                </li>
                <li className="flex items-center line-through text-opacity-50">
                  <FaCheckCircle className="text-white mr-2" /> Job-Optimized Cover Letter
                </li>
                <li className="flex items-center line-through text-opacity-50">
                  <FaCheckCircle className="text-white mr-2" /> LinkedIn Profile Optimization
                </li>
                <li className="flex items-center line-through text-opacity-50">
                  <FaCheckCircle className="text-white mr-2" /> LinkedIn E-Book & ChatGPT Prompts
                </li>
              </ul>


              <button
                onClick={handleAddToCart}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Add to Cart
              </button>
            </div>


            <div
              className="rounded-lg shadow-lg p-6 text-center text-white relative overflow-hidden"
              style={{
                background: 'linear-gradient(to right, #3b82f6 50%, #2563eb 50%)',
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Professional Pack</h3>
              <p className="text-lg mb-4">Perfect for those looking to take their career to the next level.</p>
              <p className="text-3xl font-bold mb-2">₹4,999 - ₹9,999</p>


              <div className="mb-4">
                <label className="block text-white font-semibold mb-2">Experience Level</label>
                <select className="px-4 py-2 w-full rounded-md text-gray-800">
                  <option>0-3 Years of Experience</option>
                  <option>3-5 Years of Experience</option>
                  <option>5+ Years of Experience</option>
                </select>
              </div>


              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-center">
                  <FaCheckCircle className="text-white mr-2" /> ATS-Friendly Resume with 85% ATS Score
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-white mr-2" /> Job-Optimized Cover Letter
                </li>
                <li className="flex items-center line-through text-opacity-50">
                  <FaCheckCircle className="text-white mr-2" /> LinkedIn Profile Optimization
                </li>
                <li className="flex items-center line-through text-opacity-50">
                  <FaCheckCircle className="text-white mr-2" /> LinkedIn E-Book & ChatGPT Prompts
                </li>
              </ul>


              <button
                onClick={handleAddToCart}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Add to Cart
              </button>
            </div>


            <div
              className="rounded-lg shadow-lg p-6 text-center text-white relative overflow-hidden"
              style={{
                background: 'linear-gradient(to right, #d97706 50%, #f97316 50%)',
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Executive Pack</h3>
              <p className="text-lg mb-4">All-in-one package for the elite professionals.</p>
              <p className="text-3xl font-bold mb-2">₹9,999 - ₹14,999</p>


              <div className="mb-4">
                <label className="block text-white font-semibold mb-2">Experience Level</label>
                <select className="px-4 py-2 w-full rounded-md text-gray-800">
                  <option>0-3 Years of Experience</option>
                  <option>3-5 Years of Experience</option>
                  <option>5+ Years of Experience</option>
                </select>
              </div>


              <ul className="text-left space-y-2 text-sm">
                <li className="flex items-center">
                  <FaCheckCircle className="text-white mr-2" /> ATS-Friendly Resume with 90% ATS Score
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-white mr-2" /> Job-Optimized Cover Letter
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-white mr-2" /> LinkedIn Profile Optimization
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-white mr-2" /> LinkedIn E-Book & ChatGPT Prompts
                </li>
              </ul>


              <button
                onClick={handleAddToCart}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>


      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Added to Cart</h3>
            <p>Your selected package has been added to the cart!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingSection;
