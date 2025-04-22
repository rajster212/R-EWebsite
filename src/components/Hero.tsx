import React from 'react';
import Button from './Button';
import { Link } from './Navigation';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage = 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
}) => {
  return (
    <div className="relative bg-navy-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900 bg-opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 lg:py-48">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in animation-delay-200">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
            <Link to={ctaLink}>
              <Button variant="primary" size="lg">
                {ctaText} <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Button>
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link to={secondaryCtaLink}>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                  {secondaryCtaText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-24 md:h-32"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;