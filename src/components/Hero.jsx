import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-50 to-blue-100 pt-16">
      <h1 className="text-5xl font-bold text-indigo-700 mb-6">
        Empower Your Testing with AI 🚀
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        QualiGenAI brings smart automation to your QA workflows, powered by next-generation AI tools.
      </p>
      <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-indigo-700 shadow-lg">
        Explore Now
      </button>
    </section>
  );
};

export default Hero;
