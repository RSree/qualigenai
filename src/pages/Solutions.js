import React from "react";

const Solutions = () => {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-50 py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Our Solutions</h2>
        <p className="text-gray-700 mb-12 text-lg">
          Intelligent automation, analytics, and continuous testing for modern QA teams.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Smart Test Automation</h3>
            <p className="text-gray-600">
              Accelerate your testing cycles with AI-powered automation. Eliminate repetitive tasks,
              improve coverage, and achieve faster releases through intelligent automation frameworks
              and predictive defect detection.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Predictive Analytics</h3>
            <p className="text-gray-600">
              Transform QA data into actionable insights using advanced analytics and machine learning
              to detect failure patterns early and ensure optimal performance.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Continuous Quality Monitoring</h3>
            <p className="text-gray-600">
              Integrate quality checks across your DevOps pipeline. Gain real-time visibility into
              quality metrics and enable zero-defect delivery with data-driven insights.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">AI-powered Test Optimization</h3>
            <p className="text-gray-600">
              Optimize test suites intelligently with AI-driven prioritization to minimize execution
              time and maximize coverage efficiently.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Continuous Improvement</h3>
            <p className="text-gray-600">
              Enable QA teams to continuously refine testing strategies with feedback loops, quality
              metrics, and adaptive learning systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
