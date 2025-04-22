import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Link } from '../components/Navigation';
import Button from '../components/Button';
import { ArrowRight, Check } from 'lucide-react';
import teamImage from '../assets/team.jpg'; // Adjust path as needed


const About: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="About R&E Diagnostics"
        subtitle="A drug safety lab specializing in drug hypersensitivity reaction"
        backgroundImage="https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Our Mission</h2>
              <p className="text-lg text-navy-700 mb-6">
              The Drug Safety Lab (M.J. Rieder laboratory) is a research lab focused on 
              understanding the molecular pathophysiology of adverse drug reactions (ADRs) for the purpose of developing safe and reliable diagnostic and predictive testing.
              </p>
              <p className="text-lg text-navy-700 mb-6">
              The lab has a long experience with in vitro testing for drug hypersensitivity reactions (DHRs, drug allergy) that extends for decades.The hair analysis division 
              of the lab is focused on using hair samples as matrix to measure patient exposure to drugs and 
              endogenous hormones such as cortisol. The latter is used as a marker for stress.We test blood samples from patients and healthy volunteers to aid diagnosis 
              and prediction of DHRs.
              </p>
              <p className="text-lg text-navy-700 mb-8">
              The lab also trains number of postdoctoral fellows and graduate students on the use of cutting edge technologies aiming at expanding our knowledge on how small 
              fraction of patients are prone to develop devastating and sometimes lethal ADRs to drugs that are otherwise safe for the majority of the population.
              </p>
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                 src={teamImage}
                alt="Team working together"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-lg font-semibold">Our Values</p>
                <p>Integrity • Innovation • Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-navy-600 max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as an organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Check className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Integrity</h3>
              <p className="text-navy-700">
                We operate with complete transparency and honesty. We do what we say and stand behind our work, building trust and long-term relationships with our clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Check className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Innovation</h3>
              <p className="text-navy-700">
                We constantly explore new technologies and approaches to solve complex problems. We embrace change and strive to stay ahead of industry trends.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Check className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Excellence</h3>
              <p className="text-navy-700">
                We are committed to delivering exceptional quality in everything we do. We take pride in our work and continuously strive to exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-navy-600 max-w-3xl mx-auto">
              We're a diverse group of passionate individuals dedicated to creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team member"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900">Alex Johnson</h3>
                <p className="text-blue-600 mb-3">Founder & CEO</p>
                <p className="text-navy-700 mb-4">
                  Alex founded Melisa with a vision to help businesses thrive in the digital age.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team member"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900">Sarah Chen</h3>
                <p className="text-blue-600 mb-3">Creative Director</p>
                <p className="text-navy-700 mb-4">
                  Sarah leads our design team, bringing creativity and innovation to every project.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team member"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900">David Rodriguez</h3>
                <p className="text-blue-600 mb-3">Technical Lead</p>
                <p className="text-navy-700 mb-4">
                  David brings technical expertise and leadership to our development team.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team member"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-900">Emily Patel</h3>
                <p className="text-blue-600 mb-3">Marketing Director</p>
                <p className="text-navy-700 mb-4">
                  Emily develops strategies that help our clients grow their digital presence.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/team">
              <Button variant="outline" size="lg" className="border-blue-600">
                View Full Team <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Journey</h2>
            <p className="text-lg text-navy-600 max-w-3xl mx-auto">
              From our founding to today, we've been on an exciting journey of growth and innovation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline Item */}
            <div className="flex flex-col md:flex-row mb-12">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="bg-blue-600 text-white py-2 px-4 rounded inline-block">2015</div>
                <h3 className="text-xl font-semibold text-navy-900 mt-2">Founded</h3>
              </div>
              <div className="md:w-2/3 md:pl-8 border-l-2 border-blue-200">
                <p className="text-navy-700">
                  Melisa was founded with a vision to help businesses harness the power of digital technology.
                </p>
              </div>
            </div>

            {/* Timeline Item */}
            <div className="flex flex-col md:flex-row mb-12">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="bg-blue-600 text-white py-2 px-4 rounded inline-block">2017</div>
                <h3 className="text-xl font-semibold text-navy-900 mt-2">Expansion</h3>
              </div>
              <div className="md:w-2/3 md:pl-8 border-l-2 border-blue-200">
                <p className="text-navy-700">
                  We expanded our team and services to meet growing demand, adding expertise in UI/UX design and mobile development.
                </p>
              </div>
            </div>

            {/* Timeline Item */}
            <div className="flex flex-col md:flex-row mb-12">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="bg-blue-600 text-white py-2 px-4 rounded inline-block">2020</div>
                <h3 className="text-xl font-semibold text-navy-900 mt-2">Global Reach</h3>
              </div>
              <div className="md:w-2/3 md:pl-8 border-l-2 border-blue-200">
                <p className="text-navy-700">
                  We began serving clients internationally, with projects across North America, Europe, and Asia.
                </p>
              </div>
            </div>

            {/* Timeline Item */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="bg-blue-600 text-white py-2 px-4 rounded inline-block">Today</div>
                <h3 className="text-xl font-semibold text-navy-900 mt-2">Industry Leader</h3>
              </div>
              <div className="md:w-2/3 md:pl-8 border-l-2 border-blue-200">
                <p className="text-navy-700">
                  Today, we're recognized as an industry leader in digital innovation, with a diverse portfolio of successful projects and satisfied clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's collaborate to bring your vision to life and create something amazing together.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Contact Us <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;