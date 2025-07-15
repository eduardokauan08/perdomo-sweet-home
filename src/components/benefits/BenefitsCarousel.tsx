
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { benefitsData } from './benefitsData';

interface BenefitsCarouselProps {
  onBenefitClick: (benefitId: string) => void;
}

const BenefitsCarousel = ({ onBenefitClick }: BenefitsCarouselProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Benefícios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra as vantagens de fazer parte da nossa equipe. Clique em cada benefício para saber mais.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-4">
            {benefitsData.map((benefit) => (
              <CarouselItem key={benefit.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20"
                  onClick={() => onBenefitClick(benefit.id)}
                >
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.shortTitle}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Clique para ver detalhes
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default BenefitsCarousel;
