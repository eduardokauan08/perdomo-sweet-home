
import React from 'react';
import { Heart, Users, Star } from 'lucide-react';

const BenefitsHero = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-yellow-300/30"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-pink-300/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <Heart className="h-12 w-12 text-pink-300 animate-pulse" />
              <Users className="h-12 w-12 text-blue-200" />
              <Star className="h-12 w-12 text-yellow-300" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Benefícios de Trabalhar Conosco
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Na Perdomo, acreditamos que nossos colaboradores são nossa maior riqueza. 
            Por isso, oferecemos um pacote completo de benefícios pensado especialmente para você e sua família.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 flex items-center space-x-3">
              <Heart className="h-6 w-6 text-pink-300" />
              <span className="text-lg font-semibold">Cuidamos de Você</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 flex items-center space-x-3">
              <Users className="h-6 w-6 text-blue-200" />
              <span className="text-lg font-semibold">Valorizamos sua Família</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsHero;
