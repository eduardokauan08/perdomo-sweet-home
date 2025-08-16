import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Star, MapPin, Calendar, Cake, ShoppingBag } from 'lucide-react';
import { heroImages } from '@/data/brandImages';
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-secondary via-primary-soft to-primary/10 overflow-hidden">
      {/* Background decorations doces */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-gentle-bounce"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl animate-soft-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-primary/15 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-gentle-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex items-center min-h-screen py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 shadow-lg">
              <Star className="h-4 w-4 text-primary mr-2 animate-soft-pulse" />
              <span className="text-sweet-chocolate font-semibold text-sm">Celebrando 10 anos de doçura • 2015-2025</span>
            </div>

            <div className="space-y-6">
              <h1 className="font-display text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                <span className="block text-primary">Perdomo</span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Doces</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed">
                <span className="font-semibold text-primary">10 anos</span> adoçando vidas com 
                <span className="font-semibold text-accent"> doces artesanais</span> premium. 
                <span className="block mt-2 text-primary">De Goiás para o Brasil, levando tradição e sabor a cada mordida.</span>
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center bg-card/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-primary/20 shadow-sm">
                  <Cake className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sweet-chocolate font-medium">Doces Artesanais Premium</span>
                </div>
                <div className="flex items-center bg-card/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-primary/20 shadow-sm">
                  <MapPin className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sweet-chocolate font-medium">GO • DF • SP</span>
                </div>
                <div className="flex items-center bg-card/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-primary/20 shadow-sm">
                  <Heart className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sweet-chocolate font-medium">Feito com Amor</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('localizacoes')}
              >
                <MapPin className="mr-2 h-5 w-5" />
                Encontre Nossa Loja
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm"
                onClick={() => window.open('https://ifood.com.br', '_blank')}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Peça pelo iFood
              </Button>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              <div className="text-center bg-card/70 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-primary">10</div>
                <div className="text-sm text-sweet-chocolate/70 font-medium">Anos de História</div>
              </div>
              <div className="text-center bg-card/70 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-primary">7+</div>
                <div className="text-sm text-sweet-chocolate/70 font-medium">Lojas Físicas</div>
              </div>
              <div className="text-center bg-card/70 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-sweet-chocolate/70 font-medium">Estados</div>
              </div>
              <div className="text-center bg-card/70 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-primary">50k+</div>
                <div className="text-sm text-sweet-chocolate/70 font-medium">Clientes Felizes</div>
              </div>
            </div>
          </div>

          {/* Visual Collage */}
          <div className="relative lg:pl-12">
            <div className="relative">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                <figure className="col-span-2 row-span-2 aspect-square rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
                  <img src={heroImages[0].src} alt={heroImages[0].alt} className="w-full h-full object-cover" loading="lazy" />
                </figure>
                <figure className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-primary/10">
                  <img src={heroImages[1].src} alt={heroImages[1].alt} className="w-full h-full object-cover" loading="lazy" />
                </figure>
                <figure className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-primary/10">
                  <img src={heroImages[2].src} alt={heroImages[2].alt} className="w-full h-full object-cover" loading="lazy" />
                </figure>
                <figure className="aspect-square rounded-2xl overflow-hidden shadow-xl border border-primary/10">
                  <img src={heroImages[3].src} alt={heroImages[3].alt} className="w-full h-full object-cover" loading="lazy" />
                </figure>
                <figure className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-primary/10">
                  <img src={heroImages[4].src} alt={heroImages[4].alt} className="w-full h-full object-cover" loading="lazy" />
                </figure>
              </div>

              {/* Floating info chips */}
              <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-md rounded-2xl shadow-xl p-4 animate-float border border-primary/20">
                <div className="text-2xl mb-2">🚚</div>
                <div className="text-sm font-semibold text-primary">Carreta SP</div>
                <div className="text-xs text-foreground/70">Agosto 2024</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-md rounded-2xl shadow-xl p-4 animate-float border border-primary/20" style={{animationDelay: '1s'}}>
                <div className="text-2xl mb-2">🎉</div>
                <div className="text-sm font-semibold text-primary">10 Anos</div>
                <div className="text-xs text-foreground/70">2015-2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;