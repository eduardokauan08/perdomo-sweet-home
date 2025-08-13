import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Instagram, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ShoppingBag,
  Heart,
  Users
} from 'lucide-react';

const InstitutionalFooter = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/perdomo_doces',
      color: 'hover:text-pink-500'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://api.whatsapp.com/send?phone=5562999999999',
      color: 'hover:text-green-500'
    },
    {
      name: 'iFood',
      icon: ShoppingBag,
      url: 'https://ifood.com.br',
      color: 'hover:text-red-500'
    }
  ];

  const quickLinks = [
    { name: 'Sobre Nós', id: 'about' },
    { name: 'Nossas Lojas', id: 'locations' },
    { name: 'Nossa História', id: 'timeline' },
    { name: 'Trabalhe Conosco', id: 'careers' },
    { name: 'Contato', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-perdomo-blue to-perdomo-blue/90 text-white">
      {/* Background decorations */}
      <div className="absolute overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-perdomo-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <div className="bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-xl font-bold text-xl shadow-lg inline-block mb-4">
                  Perdomo
                </div>
                <h3 className="text-xl font-semibold">Doces Artesanais</h3>
                <p className="text-white/80 text-sm">10 anos adoçando sua vida</p>
              </div>
              
              <p className="text-white/90 leading-relaxed">
                Tradição familiar em doces artesanais premium. 
                De Goiás para o Brasil, levando sabor e carinho a cada família.
              </p>

              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    className={`bg-white/10 hover:bg-white/20 text-white ${social.color} transition-all duration-300`}
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-white/80 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Contatos Principais</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-white/60 flex-shrink-0" />
                  <span className="text-white/90">(62) 3333-0000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-4 w-4 text-white/60 flex-shrink-0" />
                  <span className="text-white/90">(62) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-white/60 flex-shrink-0" />
                  <span className="text-white/90">contato@perdomo.com.br</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-white/60 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">
                    Matriz: Goiânia - GO<br />
                    Filiais: Anápolis, Brasília, SP
                  </span>
                </div>
              </div>
            </div>

            {/* Mission & Access Portal */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Nossa Missão</h4>
              <p className="text-white/90 text-sm leading-relaxed">
                Adoçar a vida das pessoas com doces artesanais de qualidade excepcional, 
                criando momentos especiais e memórias afetivas.
              </p>
              
              <div className="pt-4">
                <h5 className="font-semibold mb-3 flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Área do Colaborador
                </h5>
                <Button
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10"
                  onClick={() => window.location.href = '/portal'}
                >
                  Acessar Portal Interno
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-sm text-white/80">
                <Heart className="h-4 w-4 text-red-400" />
                <span>© 2025 Perdomo Doces - Feito com amor há 10 anos</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-white/80">
                <button 
                  className="hover:text-white transition-colors"
                  onClick={() => {
                    // Privacy policy logic here
                  }}
                >
                  Política de Privacidade
                </button>
                <button 
                  className="hover:text-white transition-colors"
                  onClick={() => {
                    // Terms logic here
                  }}
                >
                  Termos de Uso
                </button>
                <span className="text-white/60">|</span>
                <span className="text-perdomo-accent font-medium">
                  Site v1.0 • 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default InstitutionalFooter;