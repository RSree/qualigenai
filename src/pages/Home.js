import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-blue-100 text-gray-800 min-h-screen flex flex-col justify-between overflow-hidden">

      {/* Hero Section */}
<section className="flex flex-col justify-center items-center text-center flex-grow py-8 sm:py-6 md:py-8 lg:py-8 min-h-[75vh]">
  <div className="max-w-3xl">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-600 mb-2">
      🚀 QualiGen AI
    </h1>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
      AI-Driven Quality. Simplified.
    </h2>
    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-4">
      Empowering QA teams with intelligent automation, analytics, and insights to deliver better software — faster and smarter.
    </p>

    <Link
      to="/solutions"
      className="bg-indigo-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300"
    >
      Get Started
    </Link>
  </div>
</section>


      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-6 px-6 pb-12 md:pb-8 -mt-6">
        {[
          {
            title: "Smart Test Automation",
            desc: "Leverage AI to reduce manual effort and accelerate testing cycles.",
          },
          {
            title: "Predictive Analytics",
            desc: "Identify issues before they occur with intelligent failure prediction.",
          },
          {
            title: "Continuous Improvement",
            desc: "Gain actionable insights to boost product quality and confidence.",
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-bold text-indigo-700 mb-2"> {feature.title} </h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white py-4">
        <div className="flex justify-center gap-6 mb-2">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 text-xl sm:text-2xl"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 text-xl sm:text-2xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 text-xl sm:text-2xl"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p className="text-xs sm:text-sm text-center">
          © 2025 QualiGen AI. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
