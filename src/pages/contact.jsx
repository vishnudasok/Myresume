import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function ContactPage() {
  const [message, setMessage] = useState("");

  return (
    <div>
     
      <section className="bg-gray-800 text-white text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Let's Get in Touch</h1>
        <p className="text-xl mb-8">We’re here to help you with your next big project. Reach out to us today!</p>
        <a
          href="https://wa.me/917907355421" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all"
        >
          Contact Us
        </a>
      </section>


      <section className="py-16 bg-gray-100" id="contact">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">How Can We Help You?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Whether you need help with a project, have questions, or just want to chat, we’re here for you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg p-8 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <FaPhoneAlt className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Call Us</h3>
              <p className="text-gray-600">Reach us directly on our phone line for any urgent matters.</p>
              <p className="text-blue-600 mt-4">+91 7306066228</p>
            </div>
            <div className="bg-white shadow-lg p-8 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <FaEnvelope className="text-4xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email Us</h3>
              <p className="text-gray-600">For non-urgent matters, send us an email and we'll get back to you soon.</p>
              <p className="text-green-600 mt-4">myresumemake@gmail.com</p>
            </div>
            <div className="bg-white shadow-lg p-8 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <FaMapMarkerAlt className="text-4xl text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
              <p className="text-gray-600">Drop by our office anytime during working hours.</p>
              <p className="text-red-600 mt-4">T2, Hilite Business park, Calicut, Kerala</p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-gray-800 text-white" id="map">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Visit Our Office</h2>
          <p className="text-lg text-gray-400 mb-8">Find us easily with the interactive map below.</p>
         
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.069438078345!2d75.833024!3d11.2480178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b000383b147%3A0xf1dccb61ee958aec!2sACEX!5e0!3m2!1sen!2sus!4v1678475568227!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>


    </div>
  );
}

export default ContactPage;
