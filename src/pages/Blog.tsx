import React, { useState } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import { Search } from 'lucide-react';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: '10 Strategies to Grow Your Business in 2025',
    excerpt: 'Discover the top strategies that successful businesses are using to grow and thrive in today\'s competitive landscape.',
    date: 'May 12, 2025',
    author: 'Sarah Johnson',
    authorImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Business',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'strategies-to-grow-business'
  },
  {
    id: 2,
    title: 'The Future of Web Development: Trends to Watch',
    excerpt: 'Explore the emerging trends in web development that are shaping the future of digital experiences and user interfaces.',
    date: 'Apr 29, 2025',
    author: 'David Rodriguez',
    authorImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'future-of-web-development'
  },
  {
    id: 3,
    title: 'Principles of Effective UI/UX Design',
    excerpt: 'Learn the fundamental principles of effective UI/UX design that can help you create engaging and user-friendly digital experiences.',
    date: 'Apr 18, 2025',
    author: 'Emily Patel',
    authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Design',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'effective-ui-ux-design'
  },
  {
    id: 4,
    title: 'How to Improve Your Digital Marketing ROI',
    excerpt: 'Discover practical strategies to optimize your digital marketing efforts and maximize your return on investment.',
    date: 'Apr 10, 2025',
    author: 'Michael Chen',
    authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Marketing',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'improve-digital-marketing-roi'
  },
  {
    id: 5,
    title: 'E-commerce Optimization: Boost Your Conversion Rate',
    excerpt: 'Learn proven techniques to optimize your e-commerce website and increase your conversion rate for better business results.',
    date: 'Apr 5, 2025',
    author: 'Lisa Wong',
    authorImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/6214477/pexels-photo-6214477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'ecommerce-optimization'
  },
  {
    id: 6,
    title: 'The Impact of AI on Modern Business Operations',
    excerpt: 'Explore how artificial intelligence is transforming business operations and creating new opportunities for growth and efficiency.',
    date: 'Mar 28, 2025',
    author: 'James Wilson',
    authorImage: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'ai-impact-business-operations'
  },
];

// Categories for filtering
const categories = [
  'All',
  'Business',
  'Technology',
  'Design',
  'Marketing',
  'E-commerce',
];

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Blog & Insights"
        subtitle="Explore our latest articles, insights, and updates on business, technology, design, and more."
        backgroundImage="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="relative flex-grow max-w-lg">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-navy-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative h-96">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {filteredPosts[0].category}
                    </span>
                    <span className="ml-4 text-navy-500">{filteredPosts[0].date}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-lg text-navy-700 mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={filteredPosts[0].authorImage}
                      alt={filteredPosts[0].author}
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                    <span className="text-navy-700 font-medium">{filteredPosts[0].author}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  author={post.author}
                  authorImage={post.authorImage}
                  category={post.category}
                  image={post.image}
                  slug={post.slug}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-navy-900 mb-2">No results found</h3>
              <p className="text-navy-700">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > 6 && (
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-navy-700 hover:bg-gray-50"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-600 text-sm font-medium text-white"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-navy-700 hover:bg-gray-50"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-navy-700 hover:bg-gray-50"
                >
                  3
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-navy-700 hover:bg-gray-50"
                >
                  Next
                </a>
              </nav>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-blue-100 mb-8">
              Stay up to date with our latest articles, insights, and updates delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-navy-900"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-blue-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;