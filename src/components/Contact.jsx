import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Ready to take your QA to the next level with <span className="text-indigo-600 font-semibold">QualiGenAI</span>?  
          Let’s connect and explore how AI can transform your testing workflows.
        </p>

        <form
          className="max-w-md mx-auto bg-indigo-50 rounded-2xl shadow-md p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
