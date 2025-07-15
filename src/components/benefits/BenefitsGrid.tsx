
import React from 'react';
import { 
  Heart, 
  Utensils, 
  Users, 
  TrendingUp, 
  Clock, 
  Home,
  Shield,
  GraduationCap,
  Gift,
  Car,
  Baby,
  Dumbbell
} from 'lucide-react';

const BenefitsGrid = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Plano de Saúde e Odontológico",
      description: "Cobertura completa para você e sua família com os melhores planos do mercado",
      features: ["Cobertura nacional", "Sem carência", "Inclui dependentes"]
    },
    {
      icon: Utensils,
      title: "Vale Alimentação e Refeição",
      description: "Cartões alimentação e refeição para garantir sua nutrição e bem-estar",
      features: ["R$ 800 mensais", "Aceito em milhares de estabelecimentos", "Sem desconto"]
    },
    {
      icon: Users,
      title: "Ambiente Colaborativo",
      description: "Trabalhe em um ambiente acolhedor, respeitoso e que valoriza a diversidade",
      features: ["Equipe unida", "Comunicação aberta", "Respeito mútuo"]
    },
    {
      icon: TrendingUp,
      title: "Oportunidades de Crescimento",
      description: "Planos de carreira estruturados e oportunidades reais de desenvolvimento",
      features: ["Promoções internas", "Mentoria", "Plano de carreira"]
    },
    {
      icon: Clock,
      title: "Horário Flexível",
      description: "Flexibilidade de horários para equilibrar vida pessoal e profissional",
      features: ["Entrada flexível", "Banco de horas", "Sexta-feira reduzida"]
    },
    {
      icon: Home,
      title: "Home Office",
      description: "Modalidade híbrida com dias de trabalho remoto para maior comodidade",
      features: ["2x por semana", "Auxílio estrutura", "Flexibilidade total"]
    },
    {
      icon: Shield,
      title: "Seguro de Vida",
      description: "Proteção e segurança para você e sua família em todos os momentos",
      features: ["Cobertura ampla", "Sem custo", "Assistência 24h"]
    },
    {
      icon: GraduationCap,
      title: "Educação Continuada",
      description: "Investimos no seu desenvolvimento com cursos, treinamentos e especializações",
      features: ["Cursos pagos", "Universidade corporativa", "Certificações"]
    },
    {
      icon: Gift,
      title: "Benefícios Especiais",
      description: "Descontos exclusivos, presentes em datas especiais e muito mais",
      features: ["Desconto em produtos", "Kit natalino", "Presente aniversário"]
    },
    {
      icon: Car,
      title: "Vale Transporte",
      description: "Custeamos seu deslocamento para que você chegue sempre tranquilo",
      features: ["100% custeado", "Todos os modais", "Sem desconto"]
    },
    {
      icon: Baby,
      title: "Licença Maternidade/Paternidade",
      description: "Períodos estendidos para você aproveitar os primeiros momentos em família",
      features: ["6 meses maternidade", "30 dias paternidade", "Auxílio creche"]
    },
    {
      icon: Dumbbell,
      title: "Qualidade de Vida",
      description: "Programas de bem-estar, ginástica laboral e cuidados com a saúde mental",
      features: ["Ginástica laboral", "Psicólogo", "Massagem"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Nosso Pacote Completo de Benefícios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada benefício foi pensado para proporcionar mais qualidade de vida, 
            crescimento profissional e bem-estar para toda nossa família Perdomo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 group"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-primary to-blue-600 p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {benefit.description}
              </p>
              
              <ul className="space-y-2">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
