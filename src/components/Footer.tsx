import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from './Navigation';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Melisa</h3>
            <p className="text-blue-200 mb-4">
              Transforming ideas into digital reality. We help businesses achieve their goals through innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white hover:text-blue-300 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-blue-300 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-blue-300 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-blue-300 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-blue-200 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/consulting" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link to="/development" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/design" className="text-blue-200 hover:text-white transition-colors duration-300">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/marketing" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/seo" className="text-blue-200 hover:text-white transition-colors duration-300">
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-blue-300" />
                <span className="text-blue-200">123 Business Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-blue-300" />
                <span className="text-blue-200">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-blue-300" />
                <a href="mailto:info@melisa.org" className="text-blue-200 hover:text-white transition-colors duration-300">
                  info@melisa.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              &copy; {new Date().getFullYear()} Melisa. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/privacy" className="text-blue-200 hover:text-white text-sm transition-colors duration-300">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-blue-200 hover:text-white text-sm transition-colors duration-300">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-blue-200 hover:text-white text-sm transition-colors duration-300">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;