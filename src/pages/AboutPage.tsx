import React from "react";
import { CheckCircleIcon, AwardIcon, BriefcaseIcon, GraduationCapIcon, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return <div className="w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Learn more about my background, expertise, and approach to creating
            digital solutions.
          </p>
        </div>
      </section>
      {/* Bio Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex gap-12 items-start">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img src="/IMG_0004.jpg" alt="Professional Portrait" className="w-full h-auto rounded-lg" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Eliud N Kamau
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                I'm a passionate technologist with over 10 years of experience
                across cybersecurity, UI/UX design, backend development, and
                software engineering. My mission is to create secure,
                user-friendly, and efficient digital solutions that solve
                real-world problems.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With a background in computer science and a continuous learning
                mindset, I stay at the forefront of technological innovations to
                deliver cutting-edge solutions for my clients. I believe in a
                collaborative approach to projects, working closely with
                stakeholders to ensure that the end result exceeds expectations.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                  Download Resume
                </a>
                <Link to="/contact" className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors">
                  Contact Me
                </Link>
              </div>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center">
                  <BriefcaseIcon className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className="text-gray-700">10+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className="text-gray-700">50+ Projects Completed</span>
                </div>
                <div className="flex items-center">
                  <UserIcon className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className="text-gray-700">30+ Satisfied Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Cybersecurity
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Penetration Testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Vulnerability Assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Security Architecture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Secure Coding Practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Threat Modeling</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                UI/UX Design
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>User Research</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Wireframing & Prototyping</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Responsive Design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default AboutPage;