
import React from 'react';
import { 
  BookOpen, 
  Gift, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Calendar,
  FileText,
  Coffee,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const QuickActions = () => {
  const actions = [
    {
      icon: BookOpen,
      title: 'Treinamentos',
      description: 'Cursos e capacitações',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      category: 'Desenvolvimento',
      onClick: () => {
        console.log('Navegando para Treinamentos...');
        // Aqui você pode adicionar a lógica de navegação
      }
    },
    {
      icon: Gift,
      title: 'Benefícios',
      description: 'Vantagens e descontos',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      category: 'RH',
      onClick: () => {
        console.log('Navegando para Benefícios...');
        // Aqui você pode adicionar a lógica de navegação
      }
    },
    {
      icon: MessageSquare,
      title: 'Comunicados',
      description: 'Notícias e atualizações',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      category: 'Comunicação',
      onClick: () => {
        console.log('Navegando para Comunicados...');
        // Aqui você pode adicionar a lógica de navegação
      }
    },
    {
      icon: TrendingUp,
      title: 'Projetos',
      description: 'Iniciativas em andamento',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700',
      category: 'Estratégia',
      onClick: () => {
        console.log('Navegando para Projetos...');
        // Aqui você pode adicionar a lógica de navegação
      }
    },
    {
      icon: Users,
      title: 'Equipe',
      description: 'Diretório e contatos',
      color: 'bg-gradient-to-br from-pink-500 to-pink-600',
      hoverColor: 'hover:from-pink-600 hover:to-pink-700',
      category: 'Pessoas',
      onClick: () => {
        console.log('Navegando para Equipe...');
        // Aqui você pode adicionar a lógica de navegação
      }
    },
    {
      icon: Calendar,
      title: 'Eventos',
      description: 'Agenda e comemorações',
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      hoverColor: 'hover:from-indigo-600 hover:to-indigo-700',
      category: 'Agenda',
      onClick: () => {
        console.log('Navegando para Eventos...');
        // Aqui você pode adicionar a lógica de navegação
      }
    },
    {
      icon: FileText,
      title: 'Documentos',
      description: 'Políticas e formulários',
      color: 'bg-gradient-to-br from-teal-500 to-teal-600',
      hoverColor: 'hover:from-teal-600 hover:to-teal-700',
      category: 'Recursos',
      onClick: () => {
        console.log('Navegando para Documentos...');
        // Aqui você pode adicionar a lógica de navegação
      }
    },
    {
      icon: Coffee,
      title: 'Suporte',
      description: 'TI e RH',
      color: 'bg-gradient-to-br from-amber-500 to-amber-600',
      hoverColor: 'hover:from-amber-600 hover:to-amber-700',
      category: 'Ajuda',
      onClick: () => {
        console.log('Navegando para Suporte...');
        // Aqui você pode adicionar a lógica de navegação
      }
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Acesso Rápido
          </h2>
          <p class="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Tudo que você precisa, na palma da sua mão. Navegue facilmente pelas principais funcionalidades do portal.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              className="w-full text-left"
            >
              <Card 
                className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 bg-white overflow-hidden h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center relative h-full">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className={`${action.color} ${action.hoverColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl`}>
                      <action.icon className="h-10 w-10 text-white" />
                    </div>
                    
                    <div className="space-y-2 mb-4 flex-grow">
                      <h3 className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {action.description}
                      </p>
                    </div>
                    
                    <div className="text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full inline-block">
                      {action.category}
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              💡 Não encontrou o que procura?
            </h3>
            <p className="text-gray-600 mb-4">
              Entre em contato com nosso suporte interno. Estamos aqui para ajudar!
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <span className="flex items-center text-gray-600">
                <Coffee className="h-4 w-4 mr-1" />
                TI: (11) 3000-1000
              </span>
              <span className="text-gray-400">|</span>
              <span className="flex items-center text-gray-600">
                <Users className="h-4 w-4 mr-1" />
                RH: (11) 3000-2000
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
