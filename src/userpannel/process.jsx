import React from "react";


const steps = [
  {
    title: "Step 1 - Upload Details",
    link:"https://wa.me/917907355421",
    description: "Upload your resume in our form to get started with a free consultation.",
    icon: "📤",
  },
  {
    title: "Step 2 - Analyze Needs",
    description: "Our expert will have a 1:1 call with you to discuss your specific requirements.",
    icon: "🔎",
  },
  {
    title: "Step 3 - Start Work",
    description: "Our team begins crafting your profile with a focus on your unique strengths.",
    icon: "⚙️",
  },
  {
    title: "Step 4 - First Draft Review",
    description: "Receive the first draft within 3-5 days. Provide feedback and edits.",
    icon: "✍️",
  },
  {
    title: "Step 5 - Final Version",
    description: "We make final edits and deliver a polished resume, ready for job applications!",
    icon: "✅",
  },
];

const Process = () => (
  <section className="py-20 bg-gradient-to-b from-gray-200 to-gray-100 text-gray-800">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-6">
        Our Process - Tailored & Efficient
      </h2>
      <p className="text-center text-lg text-gray-700 mb-12">
        Discover our structured approach to creating an impactful resume.
      </p>


      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-center">
      {steps.map((step, index) => (
  <div
    key={index}
    className="p-6 sm:p-4 md:p-6 bg-white rounded-full shadow-lg transition-transform transform hover:scale-105 relative overflow-hidden"
  >
    {/* Conditional Wrapper for Link */}
    {step.link ? (
      <a
        href={step.link || "https://wa.me/917907355421"}
       
      >
        <div className="text-4xl sm:text-3xl md:text-5xl mb-4 text-blue-600">{step.icon}</div>
        <h3 className="text-lg sm:text-sm md:text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
        <p className="text-sm sm:text-xs md:text-xs text-gray-700">{step.description}</p>
      </a>
    ) : (
      <>
        <div className="text-4xl sm:text-3xl md:text-5xl mb-4 text-blue-600">{step.icon}</div>
        <h3 className="text-lg sm:text-sm md:text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
        <p className="text-sm sm:text-xs md:text-xs text-gray-700">{step.description}</p>
      </>
    )}
    <div
      className="absolute inset-0 bg-blue-50 opacity-30 rounded-full"
      style={{ zIndex: -1 }}
    />
  </div>
))}

      </div>
    </div>
  </section>
);

export default Process;
