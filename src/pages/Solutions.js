import React from "react";

const Solutions = () => {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-50 py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Our QA Solutions</h2>
        <p className="text-gray-700 mb-12 text-lg">
          Intelligent automation, analytics, and continuous testing for modern QA teams.
        </p>

        

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Agentic RAG</h3>
            <p className="text-gray-600">
            End-to-End Workflow Validation:Ensuring seamless integration between retrieval modules and generative models.
            Latency & Accuracy Testing: Benchmarking real-time performance under dynamic data conditions.
            Domain-Specific Evaluation: Tailored test cases for healthcare, finance, and legal applications.
            Security & Compliance Audits: Verifying data handling and privacy protocols in sensitive environments.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Voice Agents</h3>
            <p className="text-gray-600">
              Speech Recognition Accuracy: Testing STT models across accents, dialects, and noisy environments.
              Voice Synthesis Quality: Evaluating TTS output for clarity, emotional tone, and naturalness.
              Latency & Responsiveness: Measuring real-time interaction speeds for seamless user experiences.
              Multilingual Support Testing: Ensuring consistent performance across global languages.

              
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">AI Agent Protocols</h3>
            <p className="text-gray-600">
              Protocol Compliance Testing: Ensuring agents adhere to standards like A2A, ACP, and SLIM.
              Cross-Framework Compatibility Checks: Validating communication between agents built on varied stacks.
              Message Integrity & Latency Audits: Measuring performance and reliability of inter-agent messaging.
              Security & Access Control Validation: Safeguarding agent interactions across networks.


            </p>
          </div>

          

                    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">CUA (Computer Using Agents)</h3>
            <p className="text-gray-600">
              UI Interaction Testing: Verifying agent behavior across web apps, desktop environments, and CLI tools.
              Toolchain Integration Validation: Ensuring agents can seamlessly use browsers, shells, and system utilities.
              Error Recovery & Resilience Checks: Testing how agents handle unexpected UI changes or failures.
              Accessibility & Usability Audits: Evaluating agent performance across diverse user interfaces.


            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Coding Agents</h3>
            <p className="text-gray-600">
              Code Quality & Consistency Checks: Validating generated code against best practices and standards.
              Toolchain Compatibility Testing: Ensuring agents integrate smoothly with IDEs, linters, and debuggers.
              Multi-Agent Coordination Audits: Evaluating how agents divide tasks and resolve conflicts
              Performance Benchmarking: Measuring speed and efficiency gains in real-world development scenarios.

              


            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">AI Agent Protocols: Seamless Multi-Agent Communication
</h3>
            <p className="text-gray-600">
              Protocol Compliance Testing: Ensuring agents adhere to standards like A2A, ACP, and SLIM.
              Cross-Framework Compatibility Checks: Validating communication between agents built on varied stacks.
              Message Integrity & Latency Audits: Measuring performance and reliability of inter-agent messaging.
              Security & Access Control Validation: Safeguarding agent interactions across networks.
                         


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
