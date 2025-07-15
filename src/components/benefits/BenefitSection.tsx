
import React from 'react';
import { Benefit } from './benefitsData';

interface BenefitSectionProps {
  benefit: Benefit;
}

const BenefitSection = ({ benefit }: BenefitSectionProps) => {
  return (
    <section 
      id={benefit.id}
      className={`py-20 ${benefit.backgroundColor} scroll-mt-20`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-5xl">{benefit.icon}</span>
              <h2 className="text-4xl font-bold text-gray-900">
                {benefit.title}
              </h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              {benefit.description}
            </p>
          </div>

          {/* Main Image */}
          <div className="flex justify-center">
            <img 
              src={benefit.mainImage} 
              alt={benefit.title}
              className="w-full max-w-md rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>

        {/* Additional Images Grid */}
        {benefit.additionalImages && benefit.additionalImages.length > 0 && (
          <div className="mt-16">
            <div className={`grid gap-6 ${
              benefit.additionalImages.length === 1 
                ? 'grid-cols-1 max-w-md mx-auto'
                : benefit.additionalImages.length === 2 
                ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
                : benefit.additionalImages.length === 3
                ? 'grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto'
            }`}>
              {benefit.additionalImages.map((image, index) => (
                <div key={index} className="group">
                  <img 
                    src={image} 
                    alt={`${benefit.title} - ${index + 1}`}
                    className="w-full h-48 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BenefitSection;
