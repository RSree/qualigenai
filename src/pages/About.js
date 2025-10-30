import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-50 py-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">About QualiGen AI</h2>
        <p className="text-lg text-gray-700 mb-10">
          We empower QA teams with AI-driven tools that enhance automation and deliver quality with speed.
        </p>

        <div className="text-left bg-white shadow-md rounded-2xl p-8 mx-auto max-w-4xl">
          <p className="text-gray-700 mb-6">
            At <strong>QualiGen AI</strong>, we believe that quality assurance should evolve with intelligence.
            Our mission is to redefine software testing — replacing manual effort with AI-powered precision,
            analytics, and automation.
          </p>
          <p className="text-gray-700 mb-6">
            Founded by seasoned QA professionals, we blend decades of testing expertise with machine learning
            and predictive modeling to deliver actionable insights, faster feedback loops, and continuous
            quality improvements.
          </p>
          <p className="text-gray-700">
            Whether you’re an enterprise modernizing legacy systems or a startup scaling digital platforms,
            QualiGen AI helps you achieve smarter testing, better quality, and faster releases — powered by intelligence.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10 text-center">
            <div className="bg-indigo-50 p-6 rounded-xl shadow-sm">
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">19+ Years Experience</h4>
              <p className="text-gray-600">Decades of QA and software testing expertise.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl shadow-sm">
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">AI-First Approach</h4>
              <p className="text-gray-600">Harnessing AI to enable smarter, data-driven quality engineering.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
