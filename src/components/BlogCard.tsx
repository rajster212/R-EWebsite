import React from 'react';
import { Link } from './Navigation';
import { ArrowUpRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorImage: string;
  category: string;
  image: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  date,
  author,
  authorImage,
  category,
  image,
  slug,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center mb-3">
          <span className="text-navy-500 text-sm">{date}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-navy-900 mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-navy-600 mb-4 line-clamp-3 flex-grow">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <img
              src={authorImage}
              alt={author}
              className="w-8 h-8 rounded-full mr-2 object-cover"
            />
            <span className="text-navy-700 text-sm font-medium">{author}</span>
          </div>
          
          <Link to={`/blog/${slug}`} className="text-blue-600 hover:text-blue-700 transition-colors duration-300 flex items-center text-sm font-medium">
            Read More
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;