import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-8 mt-20">
<div className="flex justify-center space-x-6 my-4 text-xl">
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-blue-400 transition"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gray-300 transition"
  >
    <FaGithub />
  </a>
  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-blue-300 transition"
  >
    <FaTwitter />
  </a>
</div>

      <p className="text-sm opacity-90">
        © 2025 QualiGen AI. All rights reserved.
      </p>
    </footer>
  );
}
