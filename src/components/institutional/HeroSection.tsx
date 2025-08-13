import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Star, MapPin, Calendar } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-perdomo-warm via-white to-perdomo-light py-20 lg:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-perdomo-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-perdomo-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-perdomo-accent/15 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-perdomo-accent/20 shadow-sm">
              <Calendar className="h-4 w-4 text-perdomo-accent mr-2" />
              <span className="text-perdomo-blue font-semibold text-sm">Celebrando 10 anos • 2015-2025</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-perdomo-blue leading-tight">
                Perdomo
                <span className="block text-perdomo-accent">Doces</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                <span className="font-semibold text-perdomo-blue">10 anos</span> adoçando vidas com 
                <span className="font-semibold text-perdomo-accent"> doces artesanais</span> premium. 
                De Goiás para o Brasil, levando tradição e sabor a cada mordida.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center bg-white/60 px-3 py-2 rounded-lg">
                  <Star className="h-4 w-4 text-perdomo-accent mr-2" />
                  Doces Artesanais Premium
                </div>
                <div className="flex items-center bg-white/60 px-3 py-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-perdomo-accent mr-2" />
                  GO • DF • SP
                </div>
                <div className="flex items-center bg-white/60 px-3 py-2 rounded-lg">
                  <Heart className="h-4 w-4 text-perdomo-accent mr-2" />
                  Feito com Amor
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-perdomo-blue hover:bg-perdomo-blue/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection('locations')}
              >
                Encontre Nossa Loja
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-perdomo-blue text-perdomo-blue hover:bg-perdomo-blue hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                onClick={() => window.open('https://ifood.com.br', '_blank')}
              >
                Peça pelo iFood
              </Button>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-gray-200/60">
              <div className="text-center">
                <div className="text-3xl font-bold text-perdomo-blue">10</div>
                <div className="text-sm text-gray-600 font-medium">Anos de História</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-perdomo-blue">7+</div>
                <div className="text-sm text-gray-600 font-medium">Lojas Físicas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-perdomo-blue">3</div>
                <div className="text-sm text-gray-600 font-medium">Estados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-perdomo-blue">1000s</div>
                <div className="text-sm text-gray-600 font-medium">Clientes Felizes</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:pl-12">
            <div className="relative">
              {/* Main image placeholder */}
              <div className="aspect-square bg-gradient-to-br from-perdomo-accent/20 to-perdomo-blue/20 rounded-3xl shadow-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  🍰
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="text-2xl mb-2">🚚</div>
                <div className="text-sm font-semibold text-perdomo-blue">Carreta SP</div>
                <div className="text-xs text-gray-600">Agosto 2024</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{animationDelay: '1s'}}>
                <div className="text-2xl mb-2">🎉</div>
                <div className="text-sm font-semibold text-perdomo-blue">10 Anos</div>
                <div className="text-xs text-gray-600">2015-2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;