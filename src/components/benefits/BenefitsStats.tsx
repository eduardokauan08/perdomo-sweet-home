
import React from 'react';
import { Heart, Users, Star, Award } from 'lucide-react';

const BenefitsStats = () => {
  const stats = [
    {
      icon: Heart,
      number: "98%",
      label: "Satisfação dos Colaboradores",
      description: "com nossos benefícios"
    },
    {
      icon: Users,
      number: "150+",
      label: "Famílias Beneficiadas",
      description: "em nossa rede de cuidado"
    },
    {
      icon: Star,
      number: "12",
      label: "Benefícios Exclusivos",
      description: "pensados especialmente para você"
    },
    {
      icon: Award,
      number: "39",
      label: "Anos de Tradição",
      description: "cuidando de nossa família"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-white/20"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-yellow-300/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Números que Falam por Si
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Nossa dedicação em cuidar de nossa família se reflete em cada estatística, 
            mostrando o compromisso real com o bem-estar de todos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                <div className="flex justify-center mb-6">
                  <div className="bg-white/20 p-4 rounded-xl group-hover:bg-white/30 transition-colors duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                
                <div className="text-lg font-semibold text-blue-100 mb-2">
                  {stat.label}
                </div>
                
                <div className="text-sm text-blue-200">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsStats;
