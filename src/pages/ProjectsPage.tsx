import React, { useState } from "react";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
const projects = [{
  id: 1,
  title: "Secure Banking App",
  description: "A highly secure mobile banking application with biometric authentication and real-time fraud detection.",
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  tags: ["Cybersecurity", "Mobile", "React Native"],
  liveUrl: "#",
  githubUrl: "#",
  featured: true
}, {
  id: 2,
  title: "E-commerce Platform",
  description: "A full-featured online store with inventory management, payment processing, and analytics dashboard.",
  image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80",
  tags: ["Full Stack", "React", "Node.js"],
  liveUrl: "#",
  githubUrl: "#",
  featured: true
}, {
  id: 3,
  title: "Health Monitoring System",
  description: "IoT-based health monitoring solution for remote patient tracking with real-time alerts and analytics.",
  image: "https://images.unsplash.com/photo-1551651653-c5186a1fbba2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  tags: ["IoT", "Python", "React"],
  liveUrl: "#",
  githubUrl: "#",
  featured: true
}, {
  id: 4,
  title: "Cybersecurity Dashboard",
  description: "Real-time monitoring dashboard for network security with threat detection and visualization.",
  image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  tags: ["Cybersecurity", "Data Visualization", "React"],
  liveUrl: "#",
  githubUrl: "#",
  featured: false
}, {
  id: 5,
  title: "Personal Finance Tracker",
  description: "Web application for tracking personal finances, budgeting, and financial goal planning.",
  image: "https://images.unsplash.com/photo-1579621970590-9d624316781b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  tags: ["UI/UX", "React", "Firebase"],
  liveUrl: "#",
  githubUrl: "#",
  featured: false
}, {
  id: 6,
  title: "Task Management System",
  description: "Collaborative task management platform with real-time updates and team productivity analytics.",
  image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1039&q=80",
  tags: ["Full Stack", "React", "Express"],
  liveUrl: "#",
  githubUrl: "#",
  featured: false
}];
const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const allTags = ["All", ...new Set(projects.flatMap(project => project.tags))];
  const filteredProjects = filter === "All" ? projects : projects.filter(project => project.tags.includes(filter));
  return <div className="w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Explore my portfolio of projects spanning cybersecurity, UI/UX
            design, backend development, and software engineering.
          </p>
        </div>
      </section>
      {/* Projects Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center mb-12 gap-2">
            {allTags.map(tag => <button key={tag} onClick={() => setFilter(tag)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === tag ? "bg-indigo-600 text-white" : "bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"}`}>
                {tag}
              </button>)}
          </div>
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                        {tag}
                      </span>)}
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
                      <ExternalLinkIcon className="h-4 w-4 mr-1" /> Live Demo
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
                      <GithubIcon className="h-4 w-4 mr-1" /> Code
                    </a>
                  </div>
                </div>
              </div>)}
          </div>
          {filteredProjects.length === 0 && <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No projects found matching the selected filter.
              </p>
            </div>}
        </div>
      </section>
    </div>;
};
export default ProjectsPage;