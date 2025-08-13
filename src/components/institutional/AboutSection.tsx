import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Feito com Amor',
      description: 'Cada doce é preparado artesanalmente com carinho e dedicação, mantendo o sabor caseiro que conquistou nossos clientes.'
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Utilizamos apenas ingredientes selecionados e técnicas tradicionais para garantir a excelência em cada produto.'
    },
    {
      icon: Users,
      title: 'Família Perdomo',
      description: 'Mais que uma empresa, somos uma família que cresceu junto com nossos clientes ao longo de 10 anos.'
    },
    {
      icon: Sparkles,
      title: 'Inovação Constante',
      description: 'Combinamos tradição com inovação, sempre criando novos sabores e experiências para surpreender.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-perdomo-blue mb-6">
            Sobre a Perdomo Doces
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nascida em 2015 com o sonho de levar doces artesanais de qualidade premium para toda família brasileira. 
            Hoje, celebramos uma década de tradição, sabor e muito amor em cada receita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-perdomo-blue">
              Nossa História Começou em Goiás
            </h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Em 2015, iniciamos nossa jornada com uma pequena confeitaria em Goiás, 
                movidos pela paixão por doces artesanais e o desejo de criar momentos especiais 
                na vida das pessoas.
              </p>
              <p>
                Ao longo dos anos, nossa receita de sucesso se espalhou por Goiânia, Anápolis, 
                Brasília e agora chegamos a São Paulo com nossa inovadora carreta itinerante, 
                levando o sabor autêntico da Perdomo para ainda mais brasileiros.
              </p>
              <p>
                Cada expansão mantém nossa essência: <strong className="text-perdomo-blue">
                qualidade artesanal, ingredientes premium e o carinho de sempre
                </strong> em cada doce produzido.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-perdomo-warm to-perdomo-light rounded-2xl shadow-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-8xl">
                🏪
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-perdomo-accent/20">
              <div className="text-2xl font-bold text-perdomo-blue">2015</div>
              <div className="text-sm text-gray-600">Fundação</div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-perdomo-light/30">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-perdomo-blue to-perdomo-blue/80 text-white rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-perdomo-blue mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center bg-gradient-to-r from-perdomo-blue to-perdomo-blue/90 text-white rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-6">Nossa Missão</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            "Adoçar a vida das pessoas com doces artesanais de qualidade excepcional, 
            criando momentos especiais e memórias afetivas que se perpetuam através das gerações, 
            sempre mantendo nossos valores familiares e o compromisso com a excelência."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;