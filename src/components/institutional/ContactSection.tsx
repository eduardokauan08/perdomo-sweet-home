import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Instagram, 
  MessageCircle, 
  Phone, 
  Mail, 
  ShoppingBag, 
  Users, 
  Star,
  ArrowRight 
} from 'lucide-react';

const ContactSection = () => {
  const contactChannels = [
    {
      id: 'instagram',
      title: 'Instagram',
      description: 'Acompanhe nossos doces, novidades e bastidores',
      icon: Instagram,
      color: 'bg-gradient-to-r from-pink-500 to-purple-600',
      action: 'Seguir @perdomo_doces',
      url: 'https://instagram.com/perdomo_doces',
      badge: 'Social'
    },
    {
      id: 'ifood',
      title: 'iFood',
      description: 'Peça seus doces favoritos com delivery rápido',
      icon: ShoppingBag,
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      action: 'Fazer Pedido',
      url: 'https://ifood.com.br',
      badge: 'Delivery'
    },
    {
      id: 'whatsapp-community',
      title: 'WhatsApp Community',
      description: 'Participe da nossa comunidade de clientes especiais',
      icon: Users,
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      action: 'Entrar na Comunidade',
      url: 'https://api.whatsapp.com/send?phone=5562999999999',
      badge: 'Comunidade'
    },
    {
      id: 'sac',
      title: 'SAC - Atendimento',
      description: 'Suporte, dúvidas e informações gerais',
      icon: Phone,
      color: 'bg-gradient-to-r from-perdomo-blue to-blue-600',
      action: 'Falar com SAC',
      url: 'tel:+556233330000',
      badge: 'Suporte'
    },
    {
      id: 'eventos',
      title: 'Eventos Corporativos',
      description: 'Encomendas especiais para empresas e eventos',
      icon: Star,
      color: 'bg-gradient-to-r from-perdomo-accent to-orange-600',
      action: 'Solicitar Orçamento',
      url: 'https://api.whatsapp.com/send?phone=5562999999999&text=Olá! Gostaria de solicitar um orçamento para evento corporativo.',
      badge: 'Corporativo'
    },
    {
      id: 'email',
      title: 'E-mail Comercial',
      description: 'Parcerias, fornecedores e contatos comerciais',
      icon: Mail,
      color: 'bg-gradient-to-r from-gray-600 to-gray-700',
      action: 'Enviar E-mail',
      url: 'mailto:comercial@perdomo.com.br',
      badge: 'Comercial'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-perdomo-blue mb-6">
            Fale Conosco
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos sempre prontos para atender você! Escolha o canal que mais se adequa 
            às suas necessidades e entre em contato conosco.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactChannels.map((channel) => (
            <Card 
              key={channel.id} 
              className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className={`${channel.color} text-white p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                        <channel.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{channel.title}</h3>
                      </div>
                    </div>
                    <Badge className="bg-white/20 text-white border-0">
                      {channel.badge}
                    </Badge>
                  </div>
                  <p className="text-white/90 text-sm mb-4 leading-relaxed">
                    {channel.description}
                  </p>
                  <Button
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm group"
                    onClick={() => {
                      if (channel.url.startsWith('tel:') || channel.url.startsWith('mailto:')) {
                        window.location.href = channel.url;
                      } else {
                        window.open(channel.url, '_blank');
                      }
                    }}
                  >
                    {channel.action}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Access */}
        <div className="bg-gradient-to-r from-perdomo-light to-perdomo-warm rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-perdomo-blue mb-4">
              Acesso Rápido
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              As ações mais comuns dos nossos clientes para facilitar sua experiência conosco.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              className="h-16 bg-red-500 hover:bg-red-600 text-white flex-col"
              onClick={() => window.open('https://ifood.com.br', '_blank')}
            >
              <ShoppingBag className="h-5 w-5 mb-1" />
              <span className="text-sm">Pedir no iFood</span>
            </Button>
            
            <Button
              variant="outline"
              className="h-16 border-green-500 text-green-700 hover:bg-green-500 hover:text-white flex-col"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5562999999999', '_blank')}
            >
              <MessageCircle className="h-5 w-5 mb-1" />
              <span className="text-sm">WhatsApp</span>
            </Button>

            <Button
              variant="outline"
              className="h-16 border-purple-500 text-purple-700 hover:bg-purple-500 hover:text-white flex-col"
              onClick={() => window.open('https://instagram.com/perdomo_doces', '_blank')}
            >
              <Instagram className="h-5 w-5 mb-1" />
              <span className="text-sm">Instagram</span>
            </Button>

            <Button
              variant="outline"
              className="h-16 border-perdomo-blue text-perdomo-blue hover:bg-perdomo-blue hover:text-white flex-col"
              onClick={() => {
                const element = document.getElementById('locations');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Star className="h-5 w-5 mb-1" />
              <span className="text-sm">Ver Lojas</span>
            </Button>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="border-0 bg-gradient-to-br from-white to-perdomo-light/30">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-perdomo-blue mb-4">
                Horários de Atendimento
              </h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Lojas Físicas:</span>
                  <span className="font-medium">Seg à Sáb: 8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="font-medium">9h às 16h</span>
                </div>
                <div className="flex justify-between">
                  <span>SAC WhatsApp:</span>
                  <span className="font-medium">Seg à Sex: 8h às 17h</span>
                </div>
                <div className="flex justify-between">
                  <span>Carreta SP:</span>
                  <span className="font-medium">Seg à Sáb: 10h às 20h</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-white to-perdomo-warm/30">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-perdomo-blue mb-4">
                Informações Importantes
              </h4>
              <div className="space-y-3 text-gray-600 text-sm">
                <p>• Delivery disponível nas lojas com iFood</p>
                <p>• Encomendas especiais com 48h de antecedência</p>
                <p>• Eventos corporativos: orçamento personalizado</p>
                <p>• Carreta SP: consulte localização atual no Instagram</p>
                <p>• SAC: atendimento prioritário via WhatsApp</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;