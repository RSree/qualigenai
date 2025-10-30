import React from "react";

const Features = () => {
  const features = [
    {
      title: "AI-Powered Test Generation",
      description:
        "Automatically generate test cases using AI, saving time and improving coverage.",
      icon: "🤖",
    },
    {
      title: "Smart Defect Prediction",
      description:
        "Identify potential defects early with AI-based analytics and quality insights.",
      icon: "📊",
    },
    {
      title: "Seamless Integration",
      description:
        "Integrate easily with your existing CI/CD pipelines and testing frameworks.",
      icon: "⚙️",
    },
  ];

  return (
    <section className="bg-white py-16" id="features">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Why Choose QualiGenAI?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
