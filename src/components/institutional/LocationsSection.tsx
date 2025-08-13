import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Navigation, ShoppingBag, Truck } from 'lucide-react';

const LocationsSection = () => {
  const [selectedCity, setSelectedCity] = useState('goiania');

  const locations = {
    goiania: [
      {
        name: 'Perdomo Doces - Centro',
        address: 'Rua Central, 123 - Centro, Goiânia - GO',
        phone: '(62) 3333-1111',
        hours: 'Seg a Sáb: 8h às 18h | Dom: 9h às 16h',
        hasDelivery: true,
        hasIfood: true,
        type: 'flagship'
      },
      {
        name: 'Perdomo Doces - Setor Oeste',
        address: 'Av. Oeste, 456 - Setor Oeste, Goiânia - GO',
        phone: '(62) 3333-2222',
        hours: 'Seg a Sáb: 8h às 18h | Dom: 9h às 16h',
        hasDelivery: true,
        hasIfood: true,
        type: 'store'
      },
      {
        name: 'Perdomo Doces - Jardins',
        address: 'Rua das Flores, 789 - Jardins, Goiânia - GO',
        phone: '(62) 3333-3333',
        hours: 'Seg a Sáb: 9h às 17h',
        hasDelivery: false,
        hasIfood: false,
        type: 'store'
      }
    ],
    anapolis: [
      {
        name: 'Perdomo Doces - Anápolis',
        address: 'Av. Principal, 321 - Centro, Anápolis - GO',
        phone: '(62) 3333-4444',
        hours: 'Seg a Sáb: 8h às 18h | Dom: 9h às 16h',
        hasDelivery: true,
        hasIfood: true,
        type: 'store'
      }
    ],
    brasilia: [
      {
        name: 'Perdomo Doces - Asa Norte',
        address: 'SQN 102, Bloco A - Asa Norte, Brasília - DF',
        phone: '(61) 3333-5555',
        hours: 'Seg a Sáb: 8h às 19h | Dom: 9h às 17h',
        hasDelivery: true,
        hasIfood: true,
        type: 'flagship'
      },
      {
        name: 'Perdomo Doces - Águas Claras',
        address: 'Av. das Águas, 654 - Águas Claras, Brasília - DF',
        phone: '(61) 3333-6666',
        hours: 'Seg a Sáb: 8h às 18h | Dom: 9h às 16h',
        hasDelivery: true,
        hasIfood: true,
        type: 'store'
      },
      {
        name: 'Perdomo Doces - Taguatinga',
        address: 'Av. Central, 987 - Taguatinga, Brasília - DF',
        phone: '(61) 3333-7777',
        hours: 'Seg a Sáb: 9h às 17h',
        hasDelivery: false,
        hasIfood: false,
        type: 'counter'
      }
    ],
    saopaulo: [
      {
        name: 'Carreta Perdomo - Campinas',
        address: 'Região Central - Campinas - SP (Consulte localização)',
        phone: '(11) 9999-8888',
        hours: 'Seg a Sáb: 10h às 20h',
        hasDelivery: false,
        hasIfood: true,
        type: 'food_truck'
      },
      {
        name: 'Carreta Perdomo - São Paulo Capital',
        address: 'Região Central - São Paulo - SP (19 a 26/08)',
        phone: '(11) 9999-9999',
        hours: 'Seg a Sáb: 10h às 20h',
        hasDelivery: false,
        hasIfood: true,
        type: 'food_truck',
        featured: true
      }
    ]
  };

  const cities = [
    { id: 'goiania', name: 'Goiânia', state: 'GO', count: 3 },
    { id: 'anapolis', name: 'Anápolis', state: 'GO', count: 1 },
    { id: 'brasilia', name: 'Brasília', state: 'DF', count: 3 },
    { id: 'saopaulo', name: 'São Paulo', state: 'SP', count: 2, isNew: true }
  ];

  const getStoreTypeIcon = (type: string) => {
    switch (type) {
      case 'flagship':
        return '🏪';
      case 'food_truck':
        return '🚚';
      case 'counter':
        return '🏬';
      default:
        return '🍰';
    }
  };

  const getStoreTypeName = (type: string) => {
    switch (type) {
      case 'flagship':
        return 'Loja Principal';
      case 'food_truck':
        return 'Carreta Itinerante';
      case 'counter':
        return 'Apenas Balcão';
      default:
        return 'Loja Física';
    }
  };

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-perdomo-blue mb-6">
            Nossas Lojas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre a Perdomo Doces mais próxima de você. Estamos presentes em Goiás, 
            Distrito Federal e agora também em São Paulo com nossa carreta itinerante.
          </p>
        </div>

        {/* City Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cities.map((city) => (
            <Button
              key={city.id}
              variant={selectedCity === city.id ? "default" : "outline"}
              className={`relative ${
                selectedCity === city.id
                  ? 'bg-perdomo-blue hover:bg-perdomo-blue/90 text-white'
                  : 'border-perdomo-blue text-perdomo-blue hover:bg-perdomo-blue hover:text-white'
              }`}
              onClick={() => setSelectedCity(city.id)}
            >
              {city.name} - {city.state}
              <Badge variant="secondary" className="ml-2 bg-white/20 text-inherit border-0">
                {city.count}
              </Badge>
              {city.isNew && (
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              )}
            </Button>
          ))}
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations[selectedCity as keyof typeof locations]?.map((location, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden ${
                location.featured ? 'ring-2 ring-perdomo-accent ring-offset-2' : ''
              }`}
            >
              <CardContent className="p-0">
                {/* Header */}
                <div className={`p-4 ${
                  location.type === 'flagship' 
                    ? 'bg-gradient-to-r from-perdomo-blue to-perdomo-blue/80 text-white'
                    : location.type === 'food_truck'
                    ? 'bg-gradient-to-r from-perdomo-accent to-orange-500 text-white'
                    : 'bg-gradient-to-r from-perdomo-light to-perdomo-warm text-perdomo-blue'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl">{getStoreTypeIcon(location.type)}</div>
                    {location.featured && (
                      <Badge className="bg-white/20 text-white border-0 animate-pulse">
                        Destaque
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{location.name}</h3>
                  <div className="text-sm opacity-90">{getStoreTypeName(location.type)}</div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-perdomo-blue mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm leading-relaxed">{location.address}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-perdomo-blue flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{location.hours}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-perdomo-blue flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{location.phone}</p>
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {location.hasDelivery && (
                      <Badge variant="outline" className="border-green-500 text-green-700">
                        <Truck className="h-3 w-3 mr-1" />
                        Delivery
                      </Badge>
                    )}
                    {location.hasIfood && (
                      <Badge variant="outline" className="border-red-500 text-red-700">
                        <ShoppingBag className="h-3 w-3 mr-1" />
                        iFood
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-perdomo-blue text-perdomo-blue hover:bg-perdomo-blue hover:text-white"
                      onClick={() => {
                        const address = encodeURIComponent(location.address);
                        window.open(`https://maps.google.com/?q=${address}`, '_blank');
                      }}
                    >
                      <Navigation className="h-4 w-4 mr-1" />
                      Rotas
                    </Button>
                    
                    {location.hasIfood && (
                      <Button
                        size="sm"
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                        onClick={() => window.open('https://ifood.com.br', '_blank')}
                      >
                        <ShoppingBag className="h-4 w-4 mr-1" />
                        Pedir
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-perdomo-light to-perdomo-warm rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-perdomo-blue mb-4">
            Não encontrou uma loja perto de você?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Entre em contato conosco! Estamos sempre expandindo e pode ser que 
            em breve chegemos à sua cidade também.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-perdomo-blue hover:bg-perdomo-blue/90 text-white"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5562999999999', '_blank')}
            >
              Falar no WhatsApp
            </Button>
            <Button
              variant="outline"
              className="border-perdomo-blue text-perdomo-blue hover:bg-perdomo-blue hover:text-white"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Outros Contatos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;