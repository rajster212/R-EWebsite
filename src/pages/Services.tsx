import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Button from '../components/Button';
import { Link } from '../components/Navigation';
import { ArrowRight, Code, BarChart, Lightbulb, Users, Globe, Zap, LineChart, Smartphone } from 'lucide-react';
import heroImage from '../assets/HeroImage.jpg';

const Services: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Test/types"
        backgroundImage={heroImage}
      />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">In vitro Diagnostic tests</h2>
            <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            In vitro diagnostic tests have the advantage over in vivo tests (e.g., skin patch test, prick test, intradermal) and systemic rechallenge of being safe and carrying no potential harm to patients. In the Drug Safety Lab, we offer a pattery of in vitro tests with proved vlaue in diagnosis of Drug hypersensitivity. These test are particulrly useful for diagnosis of hypersensitivity reactions to drug s such as aromatic anticonvulsants, sulfonamides, NSAIDs, allopurinol, and beta-lactam antibiotics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">The Lymphocyte Toxicity Assay</h3>
                <p className="text-navy-700 mb-6">
                The LTA is a safe in vitro test used to identify patients who are at high risk of developing DHS. The test has been used for decades to test patient susceptibility to DHS.
                </p>
                <Link to="/web-development">
                  <Button variant="text" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
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
    </Layout>
  );
};

export default Services;