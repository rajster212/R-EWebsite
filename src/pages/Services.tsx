import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Button from '../components/Button';
import { Link } from '../components/Navigation';
import { ArrowRight, Code, BarChart, Lightbulb, Users, Globe, Zap, LineChart, Smartphone } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Discover the comprehensive range of digital services we offer to help your business grow and succeed."
        backgroundImage="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">What We Offer</h2>
            <p className="text-lg text-navy-600 max-w-3xl mx-auto">
              We provide a wide range of digital services to help businesses thrive in today's competitive landscape. From web development to digital marketing, we have the expertise to meet your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Web Development</h3>
                <p className="text-navy-700 mb-6">
                  We build responsive, modern websites and web applications that deliver exceptional user experiences and achieve your business goals.
                </p>
                <ul className="text-navy-700 mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Custom Website Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    E-commerce Solutions
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Web Application Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    CMS Implementation
                  </li>
                </ul>
                <Link to="/web-development">
                  <Button variant="text" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">UI/UX Design</h3>
                <p className="text-navy-700 mb-6">
                  We create intuitive, visually appealing interfaces that enhance user engagement and drive conversions for your digital products.
                </p>
                <ul className="text-navy-700 mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    User Research & Personas
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Wireframing & Prototyping
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Visual Design & Branding
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Usability Testing
                  </li>
                </ul>
                <Link to="/ui-ux-design">
                  <Button variant="text" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Mobile Development</h3>
                <p className="text-navy-700 mb-6">
                  We develop high-performance, feature-rich mobile applications for iOS and Android platforms that engage users and drive business growth.
                </p>
                <ul className="text-navy-700 mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Native iOS & Android Apps
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Cross-Platform Solutions
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Progressive Web Apps
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    App Maintenance & Updates
                  </li>
                </ul>
                <Link to="/mobile-development">
                  <Button variant="text" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Digital Marketing</h3>
                <p className="text-navy-700 mb-6">
                  We develop and implement comprehensive digital marketing strategies to increase your online visibility, attract qualified leads, and drive conversions.
                </p>
                <ul className="text-navy-700 mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Search Engine Optimization (SEO)
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Pay-Per-Click Advertising (PPC)
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Social Media Marketing
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Content Marketing
                  </li>
                </ul>
                <Link to="/digital-marketing">
                  <Button variant="text" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BarChart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Business Analytics</h3>
                <p className="text-navy-700 mb-6">
                  We help you leverage data to gain valuable insights, make informed decisions, and optimize your business performance.
                </p>
                <ul className="text-navy-700 mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Data Analysis & Visualization
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Performance Tracking & Reporting
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Conversion Rate Optimization
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Customer Journey Analysis
                  </li>
                </ul>
                <Link to="/business-analytics">
                  <Button variant="text" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Business Consulting</h3>
                <p className="text-navy-700 mb-6">
                  We provide strategic guidance and expert advice to help you navigate challenges, seize opportunities, and achieve sustainable growth.
                </p>
                <ul className="text-navy-700 mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Digital Transformation
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Business Strategy Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Process Optimization
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Technology Advisory
                  </li>
                </ul>
                <Link to="/business-consulting">
                  <Button variant="text" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Process</h2>
            <p className="text-lg text-navy-600 max-w-3xl mx-auto">
              We follow a proven, systematic approach to deliver successful projects that meet your business objectives.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Process Step 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900">Discovery & Planning</h3>
                </div>
                <p className="text-navy-700 ml-14">
                  We start by understanding your business, goals, and requirements. This involves in-depth discussions, research, and defining key success metrics for your project.
                </p>
              </div>

              {/* Process Step 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900">Strategy & Design</h3>
                </div>
                <p className="text-navy-700 ml-14">
                  We develop a comprehensive strategy and create detailed designs, wireframes, or prototypes that align with your brand and business objectives.
                </p>
              </div>

              {/* Process Step 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900">Development & Testing</h3>
                </div>
                <p className="text-navy-700 ml-14">
                  Our team implements the solution, following best practices and industry standards. Rigorous testing ensures quality, performance, and security.
                </p>
              </div>

              {/* Process Step 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900">Launch & Support</h3>
                </div>
                <p className="text-navy-700 ml-14">
                  After successful deployment, we provide ongoing support, maintenance, and optimization to ensure your solution continues to perform at its best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Why Choose Melisa</h2>
              <p className="text-lg text-navy-700 mb-8">
                We're more than just a service provider - we're your partner in digital success. Here's why businesses trust us with their projects:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">Expertise & Experience</h3>
                    <p className="text-navy-700">
                      Our team comprises industry experts with deep knowledge and years of experience in their respective fields.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">Client-Centered Approach</h3>
                    <p className="text-navy-700">
                      We prioritize your needs and goals, ensuring that every solution we deliver is tailored to your specific requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">Quality & Reliability</h3>
                    <p className="text-navy-700">
                      We maintain the highest standards of quality in all our work and deliver reliable solutions that perform as promised.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">Innovative Solutions</h3>
                    <p className="text-navy-700">
                      We stay ahead of industry trends and leverage the latest technologies to deliver innovative solutions that give you a competitive edge.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">Transparent Communication</h3>
                    <p className="text-navy-700">
                      We maintain open, honest communication throughout the project lifecycle, keeping you informed and involved at every stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team working together"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-navy-600 max-w-3xl mx-auto">
              We have experience working with clients across various industries, delivering tailored solutions to meet their unique needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">E-Commerce</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">FinTech</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Healthcare</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Real Estate</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Education</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Non-Profit</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your needs and explore how we can help you achieve your business goals.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;