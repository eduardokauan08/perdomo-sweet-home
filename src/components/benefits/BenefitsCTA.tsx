
import React from 'react';
import { Heart, ArrowRight, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BenefitsCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-primary to-blue-800 rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/20 -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-yellow-300/30 translate-y-24 -translate-x-24"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-4">
                  <Heart className="h-16 w-16 text-pink-300 animate-pulse" />
                  <Users className="h-16 w-16 text-blue-200" />
                  <Star className="h-16 w-16 text-yellow-300" />
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Faça Parte da Nossa Família!
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Venha descobrir como é trabalhar em uma empresa que realmente se importa com seus colaboradores. 
                Na Perdomo, você não é apenas um funcionário, você é família.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Ver Vagas Abertas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Fale com RH
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Heart className="h-8 w-8 text-pink-300 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2">Ambiente Acolhedor</h3>
                  <p className="text-blue-100 text-sm">
                    Um lugar onde você se sente verdadeiramente em casa
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Users className="h-8 w-8 text-blue-200 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2">Equipe Unida</h3>
                  <p className="text-blue-100 text-sm">
                    Trabalhe com pessoas que se importam umas com as outras
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Star className="h-8 w-8 text-yellow-300 mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2">Crescimento Real</h3>
                  <p className="text-blue-100 text-sm">
                    Oportunidades concretas de desenvolvimento profissional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsCTA;
