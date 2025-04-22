import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconBgColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  iconBgColor = 'bg-blue-100',
}) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className={`${iconBgColor} p-3 rounded-lg mb-4`}>
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-navy-900 mb-2">{title}</h3>
      <p className="text-navy-600">{description}</p>
    </div>
  );
};

export default FeatureCard;