import React, { useState } from 'react';
import { Menu, X, Instagram, MessageCircle, ShoppingBag, Phone, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstitutionalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Sobre', id: 'about' },
    { label: 'Novidades', id: 'news' },
    { label: 'Nossas Lojas', id: 'locations' },
    { label: 'História', id: 'timeline' },
    { label: 'Trabalhe Conosco', id: 'careers' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-br from-perdomo-blue to-perdomo-blue/80 text-white px-5 py-2.5 rounded-xl font-bold text-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            Perdomo
          </div>
          <div className="hidden md:block">
            <span className="text-gray-700 font-semibold text-lg">Doces Artesanais</span>
            <div className="text-xs text-gray-500 font-medium">10 anos adoçando sua vida</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-600 hover:text-perdomo-blue font-medium transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Quick Actions */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-perdomo-blue/10 text-perdomo-blue"
            onClick={() => window.open('https://instagram.com/perdomo_doces', '_blank')}
          >
            <Instagram className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-perdomo-blue/10 text-perdomo-blue"
            onClick={() => window.open('https://ifood.com.br', '_blank')}
          >
            <ShoppingBag className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            className="hidden md:flex items-center gap-2 border-perdomo-blue text-perdomo-blue hover:bg-perdomo-blue hover:text-white"
            onClick={() => window.location.href = '/portal'}
          >
            <Users className="h-4 w-4" />
            Portal Interno
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-600 hover:text-perdomo-blue font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="outline"
              className="w-full mt-4 border-perdomo-blue text-perdomo-blue hover:bg-perdomo-blue hover:text-white"
              onClick={() => window.location.href = '/portal'}
            >
              <Users className="h-4 w-4 mr-2" />
              Portal Interno
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default InstitutionalHeader;