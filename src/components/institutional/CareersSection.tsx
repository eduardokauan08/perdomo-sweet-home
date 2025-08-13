import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Heart, 
  GraduationCap, 
  TrendingUp, 
  Coffee, 
  Award,
  ArrowRight,
  MessageCircle 
} from 'lucide-react';

const CareersSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Ambiente Familiar',
      description: 'Trabalhe em um ambiente acolhedor onde cada colaborador é valorizado como parte da família.'
    },
    {
      icon: GraduationCap,
      title: 'Desenvolvimento',
      description: 'Treinamentos contínuos e oportunidades de crescimento profissional e pessoal.'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento',
      description: 'Plano de carreira estruturado com possibilidades reais de promoção interna.'
    },
    {
      icon: Coffee,
      title: 'Benefícios',
      description: 'Vale alimentação, plano de saúde, e claro, doces liberados!'
    }
  ];

  const openPositions = [
    {
      title: 'Confeiteiro(a) - São Paulo',
      location: 'São Paulo - SP',
      type: 'Presencial',
      department: 'Produção',
      description: 'Experiência com doces artesanais e disposição para trabalhar em carreta itinerante.',
      isNew: true
    },
    {
      title: 'Vendedor(a) - Brasília',
      location: 'Brasília - DF',
      type: 'Presencial',
      department: 'Vendas',
      description: 'Atendimento ao cliente, vendas e operação de caixa. Experiência desejável.',
      isNew: false
    },
    {
      title: 'Auxiliar de Produção - Goiânia',
      location: 'Goiânia - GO',
      type: 'Presencial',
      department: 'Produção',
      description: 'Apoio na produção artesanal, organização e limpeza. Primeiro emprego bem-vindo.',
      isNew: false
    },
    {
      title: 'Motorista - Carreta SP',
      location: 'São Paulo - SP',
      type: 'Presencial',
      department: 'Logística',
      description: 'CNH categoria B, experiência com food truck e disponibilidade para viagens.',
      isNew: true
    }
  ];

  const companyValues = [
    '🏆 Excelência em tudo que fazemos',
    '🤝 Trabalho em equipe e colaboração',
    '❤️ Paixão pelos doces e pelo atendimento',
    '🌱 Crescimento pessoal e profissional',
    '🎯 Foco no cliente e na qualidade',
    '✨ Inovação com tradição'
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-perdomo-light via-white to-perdomo-warm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-perdomo-blue mb-6">
            Trabalhe Conosco
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Faça parte da família Perdomo Doces! Junte-se a nós e ajude a adoçar a vida 
            de milhares de pessoas em uma empresa que valoriza cada colaborador.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-perdomo-blue text-center mb-12">
            Por que trabalhar na Perdomo Doces?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-perdomo-light/30">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-perdomo-blue to-perdomo-blue/80 text-white rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-perdomo-blue mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-12">
            <h3 className="text-3xl font-bold text-perdomo-blue">
              Vagas Abertas
            </h3>
            <Badge className="ml-3 bg-green-500 text-white animate-pulse">
              {openPositions.length} vagas
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-perdomo-blue to-perdomo-blue/80 text-white p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xl font-bold mb-2">{position.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-white/90">
                          <span>📍 {position.location}</span>
                          <span>🏢 {position.type}</span>
                        </div>
                      </div>
                      {position.isNew && (
                        <Badge className="bg-green-500 text-white border-0 animate-pulse">
                          Nova
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <Badge variant="outline" className="border-perdomo-blue text-perdomo-blue">
                        {position.department}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <Button
                      className="w-full bg-perdomo-blue hover:bg-perdomo-blue/90 text-white group"
                      onClick={() => {
                        const message = encodeURIComponent(`Olá! Tenho interesse na vaga: ${position.title} - ${position.location}`);
                        window.open(`https://api.whatsapp.com/send?phone=5562999999999&text=${message}`, '_blank');
                      }}
                    >
                      Candidatar-se
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-perdomo-accent/20">
          <h3 className="text-2xl lg:text-3xl font-bold text-perdomo-blue text-center mb-8">
            Nossos Valores
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {companyValues.map((value, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-perdomo-light to-perdomo-warm rounded-xl">
                <span className="text-lg font-medium text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-perdomo-blue">
              Como se candidatar?
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-perdomo-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-perdomo-blue">Escolha a vaga</h4>
                  <p className="text-gray-600">Veja as vagas disponíveis e escolha a que mais combina com você.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-perdomo-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-perdomo-blue">Entre em contato</h4>
                  <p className="text-gray-600">Envie uma mensagem pelo WhatsApp com seu interesse na vaga.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-perdomo-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-perdomo-blue">Processo seletivo</h4>
                  <p className="text-gray-600">Participaremos de um bate-papo para nos conhecermos melhor.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-perdomo-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-perdomo-blue">Bem-vindo à família!</h4>
                  <p className="text-gray-600">Junte-se à equipe e comece sua jornada na Perdomo Doces.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-perdomo-warm to-perdomo-accent/20 rounded-2xl shadow-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-8xl">
                👥
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-perdomo-accent/20">
              <div className="text-2xl font-bold text-perdomo-blue">200+</div>
              <div className="text-sm text-gray-600">Colaboradores</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-perdomo-blue to-perdomo-blue/90 text-white rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-6">Pronto para fazer parte da nossa família?</h3>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Não encontrou a vaga ideal? Não tem problema! Envie seu currículo mesmo assim. 
            Estamos sempre em busca de talentos especiais para nossa equipe.
          </p>
          <Button
            size="lg"
            className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
            onClick={() => {
              const message = encodeURIComponent('Olá! Gostaria de enviar meu currículo para futuras oportunidades na Perdomo Doces.');
              window.open(`https://api.whatsapp.com/send?phone=5562999999999&text=${message}`, '_blank');
            }}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Enviar Currículo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;