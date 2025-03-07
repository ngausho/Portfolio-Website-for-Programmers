import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon, CodeIcon } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "Projects",
    path: "/projects"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <CodeIcon className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                DevPortfolio
              </span>
            </Link>
          </div>
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`px-1 py-2 text-sm font-medium transition-colors ${location.pathname === link.path ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-700 hover:text-indigo-600"}`}>
                {link.name}
              </Link>)}
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? "text-indigo-600 bg-indigo-50" : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"}`} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>)}
          </div>
        </div>}
    </nav>;
};
export default Navbar;