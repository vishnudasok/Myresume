import React from 'react';

const WhyChooseUs = () => {
  const backgroundImage = '/img/bgcv1.webp';

  return (
    <div className="flex flex-col items-center bg-gray-50 py-12 px-4">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Why Choose <span className="text-green-600 underline">MY RESUME?</span>
      </h2>

      <p className="text-base text-center text-gray-700 max-w-2xl mb-6">
        Our professional resume writing service is tailored to meet the demands of modern job markets. With a focus on creating ATS-compliant and impactful resumes, we aim to elevate your chances of landing your dream role.
      </p>

      <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">

        <div
          className="relative rounded-lg p-4 w-64 h-64 flex items-center justify-center bg-cover bg-center shadow-lg"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="text-base font-bold text-gray-700">Resume Snapshot</div>
          <div className="absolute bottom-3 right-3 w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img src="/img/cv4.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>


        <div className="space-y-4 max-w-lg">
          <p className="text-gray-700 text-sm">
            We build resumes that are compatible with Applicant Tracking Systems (ATS), making sure they pass the initial screening phase. Using the right formats and keywords, we ensure that your resume gets noticed.
          </p>
          <ul className="space-y-1 text-gray-800 font-medium list-disc pl-5 text-sm">
            <li>✔ Personalized consultation with experienced resume writers</li>
            <li>✔ Commitment to providing outstanding customer service</li>
            <li>✔ Documented track record of success and client satisfaction</li>
            <li>✔ Detailed keyword optimization for increased visibility</li>
            <li>✔ Quick turnaround time with revisions for complete satisfaction</li>
          </ul>
          <p className="text-gray-700 text-sm">
            Join hundreds of satisfied clients who have transformed their careers with our tailored resume solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
