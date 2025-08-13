import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Truck, Star, ArrowRight, Sparkles } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Carreta Itinerante em São Paulo',
      description: 'Nossa carreta está percorrendo São Paulo de 08/08 a 31/08, com destaque especial na capital de 19 a 26/08. Doces frescos, delivery pelo iFood e toda tradição Perdomo chegando até você!',
      date: '08 - 31 Agosto 2024',
      location: 'São Paulo - SP',
      badge: 'Novidade',
      icon: Truck,
      color: 'bg-green-500',
      featured: true
    },
    {
      id: 2,
      title: 'Celebração de 10 Anos',
      description: 'Uma década de muito amor, dedicação e doces que marcaram a vida de milhares de famílias. Venha celebrar conosco essa conquista especial!',
      date: '2025',
      location: 'Todas as Lojas',
      badge: 'Especial',
      icon: Sparkles,
      color: 'bg-perdomo-accent',
      featured: true
    },
    {
      id: 3,
      title: 'Expansão para Campinas',
      description: 'Nossa carreta também está atendendo Campinas com delivery pelo iFood. A tradição Perdomo chegando a mais cidades do interior paulista.',
      date: 'Agosto 2024',
      location: 'Campinas - SP',
      badge: 'Expansão',
      icon: Star,
      color: 'bg-blue-500',
      featured: false
    }
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-perdomo-light to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-perdomo-blue mb-6">
            Últimas Novidades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fique por dentro de tudo que está acontecendo na Perdomo Doces. 
            Novidades, expansões e momentos especiais da nossa família.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card 
              key={item.id} 
              className={`group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden ${
                item.featured 
                  ? 'lg:col-span-2 lg:row-span-1' 
                  : ''
              } ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              <CardContent className="p-0">
                <div className={`${item.featured ? 'lg:flex' : ''}`}>
                  {/* Visual Section */}
                  <div className={`relative ${item.featured ? 'lg:w-1/2' : ''} bg-gradient-to-br from-perdomo-warm to-perdomo-accent/20 p-8 lg:p-12 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className={`inline-flex items-center justify-center w-20 h-20 ${item.color} text-white rounded-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="h-10 w-10" />
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="bg-white/80 text-perdomo-blue border-perdomo-blue/20"
                      >
                        {item.badge}
                      </Badge>
                    </div>
                    
                    {/* Floating decorations */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
                    <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-6 lg:p-8 ${item.featured ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center' : ''}`}>
                    <div className="space-y-4">
                      <h3 className={`font-bold text-perdomo-blue leading-tight ${
                        item.featured ? 'text-2xl lg:text-3xl' : 'text-xl'
                      }`}>
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.date}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2" />
                          {item.location}
                        </div>
                      </div>

                      {item.featured && (
                        <div className="pt-4">
                          <Button
                            className="bg-perdomo-blue hover:bg-perdomo-blue/90 text-white group"
                            onClick={() => {
                              if (item.id === 1) {
                                const element = document.getElementById('locations');
                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                          >
                            {item.id === 1 ? 'Ver Localização' : 'Saiba Mais'}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-perdomo-accent/20">
            <h3 className="text-2xl lg:text-3xl font-bold text-perdomo-blue mb-4">
              Não perca nenhuma novidade!
            </h3>
            <p className="text-gray-600 mb-6">
              Siga nossas redes sociais e fique sempre por dentro das últimas novidades, 
              promoções e eventos especiais da Perdomo Doces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                onClick={() => window.open('https://instagram.com/perdomo_doces', '_blank')}
              >
                Seguir no Instagram
              </Button>
              <Button
                variant="outline"
                className="border-perdomo-blue text-perdomo-blue hover:bg-perdomo-blue hover:text-white"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5562999999999', '_blank')}
              >
                WhatsApp Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;