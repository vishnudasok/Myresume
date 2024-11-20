import React from 'react';
import { FaThumbsUp, FaStar, FaHandshake, FaClipboardList, FaEdit, FaCheckCircle } from 'react-icons/fa';
import testimonialImage from '/img/testimonial.jpg';


const TestimonialsPage = () => {
  return (
    <div className="text-white font-playfair">

      <div
        className="relative bg-cover bg-center text-center py-20 px-4 sm:py-24 sm:px-8"
        style={{ backgroundImage: `url(${testimonialImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 italic">
            Testimonials, Samples, and More
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto font-merriweather italic">
            "Customer Service is at the heart of ResumeGuru. Check out testimonials from past clients, case studies, and our team."
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-10 text-base sm:text-lg">
            <div className="flex flex-col items-center">
              <FaThumbsUp className="text-green-400 text-3xl sm:text-4xl mb-2" />
              <span className="italic">Customer Satisfaction</span>
            </div>
            <div className="flex flex-col items-center">
              <FaStar className="text-yellow-400 text-3xl sm:text-4xl mb-2" />
              <span className="italic">Quality Service</span>
            </div>
            <div className="flex flex-col items-center">
              <FaHandshake className="text-blue-400 text-3xl sm:text-4xl mb-2" />
              <span className="italic">Trusted Partners</span>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gray-100 py-16 text-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic">"MyResume helped me land my dream job! The quality and detail of the resume exceeded my expectations."</p>
              <span className="block mt-4 font-semibold">– Sarah Thompson</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic">"Amazing service! The team was responsive and crafted a resume that really highlighted my strengths."</p>
              <span className="block mt-4 font-semibold">– David Nguyen</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic">"Very professional. I highly recommend MyRrsume for anyone looking to stand out in the job market."</p>
              <span className="block mt-4 font-semibold">– Aisha Patel</span>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-white py-16 text-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">Our Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img src="/img/abhishek.jpeg" alt="Case Study 1" className="w-32 h-32 object-cover rounded-full mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Abhishek Journey to Management</h3>
              <p className="text-sm">With a customized resume, Abhishek secured a management role in a Fortune 500 company within a month.</p>

            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img src="/img/deekshith.jpg" alt="Case Study 1" className="w-32 h-32 object-cover rounded-full mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Deekshith's Career Change to Tech</h3>
              <p className="text-sm">Deekshith transitioned from education to tech with a resume showcasing his transferable skills.</p>

            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img src="/img/hisham.jpeg" alt="Case Study 3" className="w-32 h-32 object-cover rounded-full mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Hisham Promotion to Senior Analyst</h3>
              <p className="text-sm">With a focused resume, Hisham highlighted his skills to secure a promotion to Senior Analyst.</p>

            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img src="/img/akhilesh.jpeg" alt="Case Study 4" className="w-32 h-32 object-cover rounded-full mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Akhilesh Break into Marketing</h3>
              <p className="text-sm">Akhilesh used a strategically crafted resume to transition into a marketing role.</p>

            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img src="/img/fayis (2).jpeg" alt="Case Study 5" className="w-32 h-32 object-cover rounded-full mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Fayis International Role</h3>
              <p className="text-sm">Our team helped Fayis showcase his international experience, landing him a role abroad.</p>

            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img src="/img/jesica.jpg" alt="Case Study 6" className="w-32 h-32 object-cover rounded-full mb-3 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Jessica’s Shift to Data Science</h3>
              <p className="text-sm">Jessica transitioned into data science with a resume that emphasized her analytical skills.</p>

            </div>
          </div>


          <div className="mt-16 text-center bg-white-100 py-10 text-black">
            <p className="text-3xl font-semibold italic mb-4">"Your success story starts here."</p>
            <p className="text-lg mb-6">Join countless others who have transformed their careers with our help. Start your journey today!</p>
            <a
              href="https://wa.me/917907355421" // Link to your WhatsApp number
              className="inline-block bg-white text-blue-900 font-semibold py-3 px-6 rounded-lg transition duration-300 hover:bg-blue-300"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>



      <div className="bg-gray-50 py-20 text-gray-900">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">Our talented team is dedicated to helping you achieve your career goals.</p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">

            <div className="flex flex-col items-center">
              <img
                src="/img/human blank.jpg"
                alt="Alex Johnson"
                className="w-36 h-36 object-cover rounded-full mb-4 shadow-lg transition-transform transform hover:scale-105"
              />
              <h3 className="text-2xl font-bold text-gray-800">Rishwan K</h3>
              <p className="text-gray-600">Lead Resume Writer</p>
            </div>


            <div className="flex flex-col items-center">
              <img
                src="/img/human blank.jpg"
                alt="Samantha Lee"
                className="w-36 h-36 object-cover rounded-full mb-4 shadow-lg transition-transform transform hover:scale-105"
              />
              <h3 className="text-2xl font-bold text-gray-800">Anand Kiran</h3>
              <p className="text-gray-600">Career Coach</p>
            </div>


            <div className="flex flex-col items-center">
              <img
                src="/img/human blank.jpg"
                alt="Michael Brown"
                className="w-36 h-36 object-cover rounded-full mb-4 shadow-lg transition-transform transform hover:scale-105"
              />
              <h3 className="text-2xl font-bold text-gray-800">Abdul Basith</h3>
              <p className="text-gray-600">LinkedIn Specialist</p>
            </div>


            <div className="flex flex-col items-center">
              <img
                src="/img/girl blank.jpg"
                alt="Jessica Williams"
                className="w-36 h-36 object-cover rounded-full mb-4 shadow-lg transition-transform transform hover:scale-105"
              />
              <h3 className="text-2xl font-bold text-gray-800">Ananya</h3>
              <p className="text-gray-600">Job Search Strategist</p>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default TestimonialsPage;
