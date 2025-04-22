import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import { Link } from '../components/Navigation';
import { ArrowRight, Code, BarChart, Lightbulb, Users, ChevronRight } from 'lucide-react';
import heroImage from '../assets/HeroImage.jpg';
import ScientistImage from '../assets/Awatif.jpg'; // Adjust path as needed


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
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">About R&E Diagnostics</h2>
              <p className="text-lg text-navy-700 mb-6">
              The idea of establishing a drug safety laboratory stemed from the realization of the health and economic burden 
              of ADRs on local, national and global levels. Drug Hypersensitivity reactions (DHRs, drug allergy) represents a 
              serious and difficult ADRs to predict or diagnose. Due to their unpredictability and relative low incidence, 
              DHRs are almost always undetectable during drug development. It is 
              during the post-marketing stage and after a large number of patients, (with large genetic and environmental 
              diversity) are exposed, reports of DHRs start to show up in literature.
              </p>
              <p className="text-lg text-navy-700 mb-8">
              In a clinical patient care setting, presentation of DHRs is often non-specific (most commonly include skin rash and area swelling), 
              which may resemble other medical conditions. This can lead to two possible faulty scenarios: either the patient is undiagnosed increasing the 
              risk of severe reactions in the future; or The patient is falsely misdiagnosed as ‘drug allergic’ depriving him/her from more effective, 
              safe and inexpensive drugs
              </p>
            </div>
            <div className="relative">
              <img
                src={ScientistImage}
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

      {/* Recent Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Recent Publications</h2>
              <p className="text-lg text-navy-600">
                Explore our latest articles and stay up to date with current research
              </p>
            </div>
            <Link to="/blog" className="mt-6 md:mt-0">
              <Button variant="text" className="flex items-center">
                View All Posts <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;