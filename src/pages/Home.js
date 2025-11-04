import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-blue-100 text-gray-800 min-h-screen flex flex-col justify-between overflow-hidden">

      {/* Hero Section */}

<section className="flex flex-col justify-center items-center text-center flex-grow py-2 sm:py-2 md:py-2 lg:py-2 pt-0 mt-0 min-h-30vh]">
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
            title: "Agentic RAG: Real-Time Reasoning & Retrieval",
            desc: "Agentic RAG (Retrieval-Augmented Generation) represents a new paradigm in AI workflows, combining real-time data retrieval with deep reasoning capabilities. This architecture is increasingly adopted across industries for its ability to generate contextually rich and accurate outputs.",
          },
          {
            title: "Voice Agents: Conversational Intelligence with TTS/STT",
            desc: "Voice agents are redefining human-computer interaction by leveraging advanced Text-to-Speech (TTS) and Speech-to-Text (STT) technologies. These agents enable natural, intuitive communication across devices and platforms.",
          },
                    {
            title: "AI Agent Protocols: Seamless Multi-Agent Communication",
            desc: "AI Agent Protocols enable interoperability between agents built on different frameworks, allowing them to collaborate effectively across diverse ecosystems. These protocols are essential for orchestrating complex workflows involving multiple specialized agents.",
          },

              
          {
            title: "CUA (Computer Using Agents): Human-Like Digital Interaction",
            desc: "CUAs are AI agents that interact with computers just like humans—using browsers, command-line interfaces, and even mouse cursors. This unlocks automation for tasks that traditionally required manual input.",
          },

{
            title: "Coding Agents: Accelerated Development & Debugging",
            desc: "Coding agents are collaborative multi-agent systems designed to build, refactor, and debug software applications with remarkable speed and precision. They combine LLM-powered code generation with intelligent tool use.",
          },


                   {
            title: "Advanced AI Agent Solutions",
            desc: "As AI agents evolve beyond simple task execution, new categories are emerging that redefine how machines collaborate, communicate, and interact with digital environments. Our QA services are built to validate and optimize these innovations..",
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
