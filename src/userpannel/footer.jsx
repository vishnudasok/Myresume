import React from 'react';
import { FiPhone, FiMail, FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">


        <div>
          <h4 className="text-white font-semibold mb-4">Contact Info</h4>
          <p className="mb-2 flex items-center">
            <FiPhone className="mr-2 text-blue-500" />
            <span className="text-gray-300">Mon to Sun: 24/7</span>
          </p>
          <p className="mb-4">
            +91 790 735 5421
          </p>
          <p className="mb-2 flex items-center">
            <FiMail className="mr-2 text-blue-500" />
            <span className="text-gray-300">myresumemake@gmail.com</span>
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-300 mb-2">Social Network</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500"><FiFacebook /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500"><FiTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500"><FiInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500"><FiYoutube /></a>
            </div>
          </div>
        </div>


        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/pricing" className="hover:text-blue-500">Order a Resume</a></li>
            <li><a href="#" className="hover:text-blue-500">Cover Letter</a></li>
            <li><a href="#" className="hover:text-blue-500">Word Template</a></li>
            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500">Tools</a></li>
          </ul>
        </div>


        <div>
          <h4 className="text-white font-semibold mb-4">Our Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">Resume Writing Services</a></li>
            <li><a href="#" className="hover:text-blue-500">CV Writing Service</a></li>
            <li><a href="#" className="hover:text-blue-500">LinkedIn Optimization</a></li>
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms & Conditions</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
