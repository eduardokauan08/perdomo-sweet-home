import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TimelineSection = () => {
  const timelineImages = [
    { src: '/placeholder.svg?height=500&width=750', alt: 'Confeitaria Perdomo - Fundação em 2015' },
    { src: '/placeholder.svg?height=750&width=500', alt: 'Primeira expansão - Loja Goiânia' },
    { src: '/placeholder.svg?height=500&width=750', alt: 'Chegada em Anápolis - Sabores regionais' },
    { src: '/placeholder.svg?height=750&width=500', alt: 'Adaptação digital - Delivery próprio' },
    { src: '/placeholder.svg?height=500&width=750', alt: 'Chegada ao DF - Tradição artesanal' },
    { src: '/placeholder.svg?height=750&width=500', alt: 'Consolidação regional - Múltiplas lojas' },
    { src: '/placeholder.svg?height=500&width=750', alt: 'Inovação e crescimento - Novas tecnologias' },
    { src: '/placeholder.svg?height=750&width=500', alt: 'Expansão São Paulo - Carreta itinerante' },
    { src: '/placeholder.svg?height=500&width=750', alt: 'Celebração 10 anos - Uma década de história' }
  ];

  const timelineEvents = [
    {
      year: '2015',
      title: 'Fundação da Perdomo Doces',
      description: 'Início da jornada em Goiás com uma pequena confeitaria artesanal, focada em qualidade e receitas familiares.',
      icon: '🏪',
      color: 'bg-perdomo-blue'
    },
    {
      year: '2017',
      title: 'Primeira Expansão',
      description: 'Abertura da segunda loja em Goiânia e início das primeiras parcerias com fornecedores locais.',
      icon: '📈',
      color: 'bg-green-500'
    },
    {
      year: '2019',
      title: 'Chegada em Anápolis',
      description: 'Expansão para Anápolis, consolidando nossa presença no interior de Goiás com novos sabores regionais.',
      icon: '🌟',
      color: 'bg-purple-500'
    },
    {
      year: '2020',
      title: 'Adaptação Digital',
      description: 'Implementação de delivery próprio e parcerias com plataformas digitais durante a pandemia.',
      icon: '📱',
      color: 'bg-blue-500'
    },
    {
      year: '2021',
      title: 'Chegada ao DF',
      description: 'Abertura das primeiras lojas em Brasília, levando nossa tradição artesanal para a capital federal.',
      icon: '🏛️',
      color: 'bg-yellow-500'
    },
    {
      year: '2022',
      title: 'Consolidação Regional',
      description: 'Abertura de múltiplas lojas no DF e consolidação como referência em doces artesanais da região.',
      icon: '🏆',
      color: 'bg-orange-500'
    },
    {
      year: '2023',
      title: 'Inovação e Crescimento',
      description: 'Implementação de novas tecnologias, ampliação do cardápio e início dos planos de expansão nacional.',
      icon: '🚀',
      color: 'bg-indigo-500'
    },
    {
      year: '2024',
      title: 'Expansão para São Paulo',
      description: 'Lançamento da carreta itinerante, chegando a Campinas e São Paulo Capital. Um marco na expansão nacional.',
      icon: '🚚',
      color: 'bg-perdomo-accent'
    },
    {
      year: '2025',
      title: 'Celebração de 10 Anos',
      description: 'Uma década de história, tradição e muito amor. Comemorando 10 anos adoçando a vida das pessoas.',
      icon: '🎉',
      color: 'bg-pink-500',
      featured: true
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-perdomo-light via-white to-perdomo-warm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-perdomo-blue mb-6">
            Nossa História
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma jornada de 10 anos marcada por crescimento, inovação e muito carinho. 
            Cada marco representa nosso compromisso em levar doces especiais para mais famílias.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-perdomo-blue via-perdomo-accent to-perdomo-blue hidden lg:block"></div>

        <div className="space-y-8 lg:space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={event.year} className="relative">
              {/* Mobile/Tablet Layout */}
              <div className="lg:hidden w-full">
                <Card className={`group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden ${
                  event.featured ? 'ring-2 ring-perdomo-accent ring-offset-2' : ''
                }`}>
                  <CardContent className="p-0">
                    <div className={`${event.color} text-white p-4`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{event.icon}</div>
                          <div className="text-2xl font-bold">{event.year}</div>
                        </div>
                        {event.featured && (
                          <Badge className="bg-white/20 text-white border-0 animate-pulse">
                            Especial
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-perdomo-blue mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
                {/* Card à esquerda (índices pares) */}
                <div className="col-span-5">
                  {index % 2 === 0 && (
                    <Card className={`group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden ${
                      event.featured ? 'ring-2 ring-perdomo-accent ring-offset-2' : ''
                    }`}>
                      <CardContent className="p-0">
                        <div className={`${event.color} text-white p-6`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="text-3xl">{event.icon}</div>
                              <div className="text-3xl font-bold">{event.year}</div>
                            </div>
                            {event.featured && (
                              <Badge className="bg-white/20 text-white border-0 animate-pulse">
                                Especial
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-perdomo-blue mb-3">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Ponto central */}
                <div className="col-span-2 flex justify-center">
                  <div className={`w-6 h-6 ${event.color} rounded-full shadow-lg z-10 ${
                    event.featured ? 'animate-pulse ring-4 ring-perdomo-accent ring-offset-2' : ''
                  }`}></div>
                </div>

                {/* Card à direita (índices ímpares) */}
                <div className="col-span-5">
                  {index % 2 === 1 && (
                    <Card className={`group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden ${
                      event.featured ? 'ring-2 ring-perdomo-accent ring-offset-2' : ''
                    }`}>
                      <CardContent className="p-0">
                        <div className={`${event.color} text-white p-6`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="text-3xl">{event.icon}</div>
                              <div className="text-3xl font-bold">{event.year}</div>
                            </div>
                            {event.featured && (
                              <Badge className="bg-white/20 text-white border-0 animate-pulse">
                                Especial
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-perdomo-blue mb-3">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Imagem do lado oposto ao card */}
                <div className="col-span-12 mt-8">
                  <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <div className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                      <img
                        src={timelineImages[index]?.src}
                        alt={timelineImages[index]?.alt}
                        className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                          index % 2 === 0 ? 'w-[750px] h-[500px]' : 'w-[500px] h-[750px]'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-sm font-medium leading-relaxed">
                          {timelineImages[index]?.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* Future Vision */}
        <div className="mt-20 text-center bg-gradient-to-r from-perdomo-blue to-perdomo-blue/90 text-white rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-6">O Futuro da Perdomo Doces</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            Nossos próximos 10 anos serão ainda mais doces! Planejamos expandir para outras regiões do Brasil, 
            sempre mantendo nossa essência artesanal e o carinho que nos trouxe até aqui.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              🌎 Expansão Nacional
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              🧁 Novos Sabores
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              📱 Inovação Digital
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              🤝 Parcerias Especiais
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;