import React from "react";
import { ShieldIcon, CodeIcon, PaletteIcon, ServerIcon, BrainIcon, DatabaseIcon, GaugeIcon, TerminalIcon } from "lucide-react";
import { Link } from "react-router-dom";
const services = [{
  id: 1,
  title: "Cybersecurity",
  description: "Comprehensive security assessments, vulnerability scanning, penetration testing, and security architecture design to protect your digital assets.",
  icon: ShieldIcon,
  color: "bg-blue-100 text-blue-600",
  details: ["Security audits and vulnerability assessments", "Penetration testing and ethical hacking", "Security architecture and design", "Incident response planning", "Security awareness training"]
}, {
  id: 2,
  title: "UI/UX Design",
  description: "User-centered design solutions that create intuitive, engaging, and accessible digital experiences that delight your users.",
  icon: PaletteIcon,
  color: "bg-purple-100 text-purple-600",
  details: ["User research and persona creation", "Wireframing and prototyping", "Responsive web and mobile design", "Usability testing", "Design systems development"]
}, {
  id: 3,
  title: "Backend Development",
  description: "Robust server-side applications with scalable architecture, efficient databases, and secure API development.",
  icon: ServerIcon,
  color: "bg-green-100 text-green-600",
  details: ["API design and development", "Database architecture and optimization", "Server-side application development", "Microservices architecture", "Cloud infrastructure setup"]
}, {
  id: 4,
  title: "Frontend Development",
  description: "Modern, responsive, and performant user interfaces built with the latest web technologies and best practices.",
  icon: CodeIcon,
  color: "bg-indigo-100 text-indigo-600",
  details: ["React/Next.js application development", "Responsive web design implementation", "Progressive Web Apps (PWAs)", "Performance optimization", "Accessibility compliance"]
}, {
  id: 5,
  title: "AI & Machine Learning",
  description: "Intelligent solutions leveraging artificial intelligence and machine learning to solve complex business problems.",
  icon: BrainIcon,
  color: "bg-red-100 text-red-600",
  details: ["Predictive analytics models", "Natural language processing", "Computer vision solutions", "Recommendation systems", "AI integration with existing systems"]
}, {
  id: 6,
  title: "Database Design",
  description: "Efficient and scalable database solutions designed for performance, security, and data integrity.",
  icon: DatabaseIcon,
  color: "bg-yellow-100 text-yellow-600",
  details: ["Database architecture design", "Data modeling and normalization", "Query optimization", "Database migration and scaling", "Data security implementation"]
}];
const ServicesPage = () => {
  return <div className="w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Services</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Comprehensive technical solutions tailored to your specific needs.
            From security to design, I provide end-to-end expertise for your
            digital projects.
          </p>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => <div key={service.id} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className={`inline-flex items-center justify-center p-3 rounded-lg ${service.color} mb-5`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, index) => <li key={index} className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              My Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering high-quality solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Discovery
              </h3>
              <p className="text-gray-600">
                Understanding your goals, requirements, constraints, and success
                criteria.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">
                Developing a comprehensive strategy and roadmap for
                implementation.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Execution
              </h3>
              <p className="text-gray-600">
                Building the solution with regular check-ins and iterative
                feedback.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600">
                Finalizing implementation, documentation, and knowledge
                transfer.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to start your project?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help you achieve your goals with
                tailored technical solutions.
              </p>
              <Link to="/contact" className="inline-block px-8 py-4 bg-white text-indigo-600 font-bold rounded-md hover:bg-indigo-50 transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default ServicesPage;