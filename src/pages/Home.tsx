import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import { Link } from '../components/Navigation';
import { ArrowRight, Code, BarChart, Lightbulb, Users, ChevronRight } from 'lucide-react';
import heroImage from '../assets/HeroImage.jpg';


const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="In vitro Diagnostic tests"
        subtitle="In the Drug Safety Lab, we offer a pattery of in vitro tests with proved vlaue in diagnosis of Drug hypersensitivity. These test are particulrly useful for diagnosis of hypersensitivity reactions to drug s such as aromatic anticonvulsants, sulfonamides, NSAIDs, allopurinol, and beta-lactam antibiotics."
        ctaText="Get Started"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/about"
        backgroundImage={heroImage}
      />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Services</h2>
            <p className="text-lg text-navy-600 max-w-3xl mx-auto">
            Improving patient health through personalised testing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="The Lymphocyte Toxicity Assay"
              description="."
              icon={Code}
            />
            <FeatureCard
              title="The in vitro Platelet Toxicity Assay"
              description="."
              icon={BarChart}
            />
            <FeatureCard
              title="The Lymphocyte Transformation test (LTT)"
              description="."
              icon={Lightbulb}
            />
            <FeatureCard
              title="The Basophil Activation Test (BAT)"
              description="."
              icon={Users}
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-blue-600">
                View All Services <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">About Melisa</h2>
              <p className="text-lg text-navy-700 mb-6">
                Since 2015, we've been helping businesses transform their digital presence and operations. 
                Our team of experts combines technical expertise with creative thinking to deliver exceptional results.
              </p>
              <p className="text-lg text-navy-700 mb-8">
                We believe in building long-term partnerships with our clients, understanding their unique needs, 
                and delivering solutions that drive real business value.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-blue-600 font-bold text-xl">50+</span>
                  </div>
                  <p className="text-navy-700">Clients Worldwide</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-blue-600 font-bold text-xl">100+</span>
                  </div>
                  <p className="text-navy-700">Projects Completed</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <span className="text-blue-600 font-bold text-xl">98%</span>
                  </div>
                  <p className="text-navy-700">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team working together"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-lg font-semibold">8+ Years</p>
                <p>of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-navy-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Working with Melisa was a game-changer for our business. Their team delivered a stunning website that perfectly captures our brand and has significantly increased our online conversions."
              author="Sarah Johnson"
              role="CEO"
              company="TechStart Inc."
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TestimonialCard
              quote="The team at Melisa truly understands our business needs. They've helped us implement digital strategies that have driven real growth and ROI. Highly recommended!"
              author="Michael Chen"
              role="Marketing Director"
              company="Global Solutions"
              image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TestimonialCard
              quote="Professional, responsive, and incredibly talented. Melisa delivered our project on time and exceeded our expectations. We continue to work with them for all our digital needs."
              author="Emily Rodriguez"
              role="Operations Manager"
              company="Innovate Co."
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's work together to bring your ideas to life and help your business thrive in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Get Started <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Latest Insights</h2>
              <p className="text-lg text-navy-600">
                Explore our latest articles and stay up to date with industry trends.
              </p>
            </div>
            <Link to="/blog" className="mt-6 md:mt-0">
              <Button variant="text" className="flex items-center">
                View All Posts <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Blog post"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-navy-500 text-sm">May 12, 2025</span>
                  <span className="mx-2">•</span>
                  <span className="text-blue-600 text-sm">Business</span>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  10 Strategies to Grow Your Business in 2025
                </h3>
                <p className="text-navy-600 mb-4">
                  Discover the top strategies that successful businesses are using to grow and thrive in today's competitive landscape.
                </p>
                <Link to="/blog/strategies-to-grow-business" className="text-blue-600 hover:text-blue-700 transition-colors duration-300 flex items-center text-sm font-medium">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Blog post"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-navy-500 text-sm">Apr 29, 2025</span>
                  <span className="mx-2">•</span>
                  <span className="text-blue-600 text-sm">Technology</span>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  The Future of Web Development: Trends to Watch
                </h3>
                <p className="text-navy-600 mb-4">
                  Explore the emerging trends in web development that are shaping the future of digital experiences and user interfaces.
                </p>
                <Link to="/blog/future-of-web-development" className="text-blue-600 hover:text-blue-700 transition-colors duration-300 flex items-center text-sm font-medium">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Blog post"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-navy-500 text-sm">Apr 18, 2025</span>
                  <span className="mx-2">•</span>
                  <span className="text-blue-600 text-sm">Design</span>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  Principles of Effective UI/UX Design
                </h3>
                <p className="text-navy-600 mb-4">
                  Learn the fundamental principles of effective UI/UX design that can help you create engaging and user-friendly digital experiences.
                </p>
                <Link to="/blog/effective-ui-ux-design" className="text-blue-600 hover:text-blue-700 transition-colors duration-300 flex items-center text-sm font-medium">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;