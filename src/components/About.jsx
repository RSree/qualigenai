import React from "react";

const About = () => {
  return (
    <section className="bg-indigo-50 py-20" id="about">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          About QualiGenAI
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          QualiGenAI is designed to revolutionize software testing by blending{" "}
          <span className="font-semibold text-indigo-600">AI-driven automation</span>{" "}
          with human intelligence. Our goal is to simplify test design, execution,
          and analysis while maintaining the highest quality standards across your
          QA lifecycle.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Efficiency</h3>
            <p className="text-gray-600">
              Automate repetitive QA tasks and reduce testing time by up to 60%.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Accuracy</h3>
            <p className="text-gray-600">
              Leverage machine learning models to detect edge cases missed by manual testing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Scalability</h3>
            <p className="text-gray-600">
              Scale your QA operations effortlessly across multiple environments and teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
