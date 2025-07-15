
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BenefitsCarousel from '@/components/benefits/BenefitsCarousel';
import BenefitSection from '@/components/benefits/BenefitSection';
import { benefitsData } from '@/components/benefits/benefitsData';

const Beneficios = () => {
  const scrollToBenefit = (benefitId: string) => {
    const element = document.getElementById(benefitId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Benefícios de Trabalhar Conosco
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Mais do que um emprego, oferecemos uma carreira com propósito, 
            benefícios que fazem a diferença e um ambiente onde você pode crescer.
          </p>
        </div>
      </section>

      {/* Benefits Carousel */}
      <BenefitsCarousel onBenefitClick={scrollToBenefit} />

      {/* Benefits Sections */}
      {benefitsData.map((benefit) => (
        <BenefitSection key={benefit.id} benefit={benefit} />
      ))}

      <Footer />
    </div>
  );
};

export default Beneficios;
