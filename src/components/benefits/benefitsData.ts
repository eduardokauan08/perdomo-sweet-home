
export interface Benefit {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  backgroundColor: string;
  mainImage: string;
  additionalImages?: string[];
}

export const benefitsData: Benefit[] = [
  {
    id: "saude",
    title: "Plano de Saúde e Odontológico Completo",
    shortTitle: "Saúde",
    icon: "❤️",
    description: "Oferecemos cobertura médica e odontológica completa para você e sua família, garantindo tranquilidade e cuidado com a saúde de quem mais importa.",
    backgroundColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    mainImage: "/placeholder.svg",
    additionalImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "alimentacao",
    title: "Vale Alimentação e Refeição",
    shortTitle: "Alimentação",
    icon: "🍽️",
    description: "Cartões de vale alimentação e refeição para garantir uma alimentação de qualidade durante todo o mês, pensando no seu bem-estar.",
    backgroundColor: "bg-gradient-to-br from-green-50 to-green-100",
    mainImage: "/placeholder.svg",
    additionalImages: ["/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "ambiente",
    title: "Ambiente de Trabalho Colaborativo",
    shortTitle: "Ambiente",
    icon: "🤝",
    description: "Um ambiente acolhedor onde todos se respeitam e trabalham juntos. Aqui você encontra colegas que se tornam amigos e uma cultura de colaboração genuína.",
    backgroundColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    mainImage: "/placeholder.svg",
    additionalImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: "crescimento",
    title: "Oportunidades de Crescimento e Desenvolvimento",
    shortTitle: "Crescimento",
    icon: "📈",
    description: "Investimos no seu futuro com treinamentos, cursos e um plano de carreira estruturado. Seu crescimento profissional é nossa prioridade.",
    backgroundColor: "bg-gradient-to-br from-orange-50 to-orange-100",
    mainImage: "/placeholder.svg",
    additionalImages: ["/placeholder.svg"]
  },
  {
    id: "flexibilidade",
    title: "Horário Flexível e Home Office",
    shortTitle: "Flexibilidade",
    icon: "🏠",
    description: "Equilibre vida pessoal e profissional com horários flexíveis e possibilidade de trabalho remoto. Porque sabemos que cada pessoa tem seu ritmo.",
    backgroundColor: "bg-gradient-to-br from-teal-50 to-teal-100",
    mainImage: "/placeholder.svg",
    additionalImages: ["/placeholder.svg", "/placeholder.svg"]
  }
];
