
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BenefitsHero from '@/components/benefits/BenefitsHero';
import BenefitsGrid from '@/components/benefits/BenefitsGrid';
import BenefitsStats from '@/components/benefits/BenefitsStats';
import BenefitsCTA from '@/components/benefits/BenefitsCTA';

const Beneficios = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BenefitsHero />
      <BenefitsGrid />
      <BenefitsStats />
      <BenefitsCTA />
      <Footer />
    </div>
  );
};

export default Beneficios;
