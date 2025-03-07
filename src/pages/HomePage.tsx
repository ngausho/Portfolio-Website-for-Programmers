import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, PhoneIcon } from "lucide-react";
const HomePage = () => {
  return <div className="w-full bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt="Technology Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transforming Ideas Into Digital Reality
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl">
              Expert software solutions combining security, design, and
              innovation for the modern digital landscape.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-medium">
                Start Your Project
              </Link>
              <a href="tel:+254710366114" className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-lg font-medium backdrop-blur-sm flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2" />
                +254 710366114
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Expert Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technical services tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-slate-50 rounded-xl hover:bg-indigo-600 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4">
                Cybersecurity
              </h3>
              <p className="text-gray-600 group-hover:text-indigo-100 mb-6">
                Advanced security protocols and comprehensive protection for
                your digital assets
              </p>
              <Link to="/services" className="inline-flex items-center text-indigo-600 group-hover:text-white font-medium">
                Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="group p-8 bg-slate-50 rounded-xl hover:bg-indigo-600 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4">
                UI/UX Design
              </h3>
              <p className="text-gray-600 group-hover:text-indigo-100 mb-6">
                Creating intuitive and engaging digital experiences that users
                love
              </p>
              <Link to="/services" className="inline-flex items-center text-indigo-600 group-hover:text-white font-medium">
                Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="group p-8 bg-slate-50 rounded-xl hover:bg-indigo-600 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4">
                Full-Stack Development
              </h3>
              <p className="text-gray-600 group-hover:text-indigo-100 mb-6">
                End-to-end development solutions with modern technologies
              </p>
              <Link to="/services" className="inline-flex items-center text-indigo-600 group-hover:text-white font-medium">
                Learn more <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals with tailored
            technical solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium">
              Get Started
            </Link>
            <Link to="/projects" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors text-lg font-medium">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default HomePage;