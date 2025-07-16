
export interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  views: number;
  comments: number;
  featured: boolean;
  author: string;
  bannerImage: string;
  images: string[];
}

export const newsData: NewsArticle[] = [
  {
    id: 1,
    slug: 'novo-produto-brigadeiro-gourmet-pistache',
    title: 'Novo produto: Brigadeiro Gourmet de Pistache',
    excerpt: 'Conheça nossa mais nova criação que promete conquistar paladares exigentes com sabor único e apresentação especial. Uma receita desenvolvida com muito carinho pela nossa equipe.',
    content: `Nossa equipe de desenvolvimento de produtos tem o prazer de apresentar a mais nova adição ao nosso catálogo: o Brigadeiro Gourmet de Pistache.

Este novo doce representa meses de pesquisa e desenvolvimento, combinando a tradição brasileira do brigadeiro com a sofisticação do pistache importado. O resultado é uma experiência gastronômica única que certamente encantará nossos clientes mais exigentes.

A receita exclusiva utiliza chocolate belga premium e pistaches cuidadosamente selecionados, resultando em uma textura cremosa e sabor equilibrado. Cada brigadeiro é finalizado à mão com lâminas de pistache tostado, garantindo não apenas um sabor excepcional, mas também uma apresentação visualmente impactante.

Este lançamento faz parte da nossa estratégia de inovação contínua, sempre buscando surpreender e encantar nossos clientes com produtos únicos e de alta qualidade.`,
    category: 'Produtos',
    date: '2025-01-15T10:00:00Z',
    readTime: '3 min',
    views: 245,
    comments: 12,
    featured: true,
    author: 'Equipe Produto',
    bannerImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop'
    ]
  },
  {
    id: 2,
    slug: 'programa-reconhecimento-colaboradores-destaque',
    title: 'Programa de Reconhecimento - Colaboradores Destaque',
    excerpt: 'Celebramos os talentos que fazem a diferença na nossa equipe. Confira os homenageados deste mês e suas conquistas.',
    content: `Este mês, temos o prazer de reconhecer colaboradores que se destacaram por sua dedicação, inovação e espírito de equipe. O Programa de Reconhecimento Perdomo foi criado para valorizar aqueles que contribuem de forma excepcional para o sucesso da nossa empresa.

Os critérios de avaliação incluem qualidade do trabalho, iniciativa, colaboração e impacto positivo no ambiente de trabalho. Cada indicação é cuidadosamente avaliada pela nossa equipe de gestão.

Parabenizamos todos os homenageados e agradecemos o comprometimento de toda a equipe Perdomo!`,
    category: 'RH',
    date: '2025-01-14T15:30:00Z',
    readTime: '2 min',
    views: 189,
    comments: 8,
    featured: false,
    author: 'RH Perdomo',
    bannerImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop'
    ]
  },
  {
    id: 3,
    slug: 'workshop-tecnicas-avancadas-confeitaria',
    title: 'Workshop: Técnicas Avançadas de Confeitaria',
    excerpt: 'Inscrições abertas para o workshop que acontecerá na próxima semana com chef renomado internacional.',
    content: `Estamos organizando um workshop exclusivo de técnicas avançadas de confeitaria com o renomado chef internacional Pierre Laurent, especialista em doces franceses e técnicas modernas de pâtisserie.

O evento acontecerá na próxima semana e as vagas são limitadas. Será uma oportunidade única de aprendizado e desenvolvimento profissional para nossa equipe.

Durante o workshop, serão abordadas técnicas como tempering de chocolate, criação de mousses aeradas, trabalho com açúcar e decoração artística. Todos os participantes receberão certificado de participação.

As inscrições podem ser feitas através do RH até esta sexta-feira.`,
    category: 'Treinamento',
    date: '2025-01-13T09:15:00Z',
    readTime: '4 min',
    views: 156,
    comments: 15,
    featured: false,
    author: 'Desenvolvimento',
    bannerImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=300&fit=crop'
    ]
  },
  {
    id: 4,
    slug: 'nova-linha-producao-sustentavel',
    title: 'Nova Linha de Produção Sustentável',
    excerpt: 'Investimento em equipamentos eco-friendly marca novo capítulo na nossa jornada sustentável.',
    content: `A Perdomo dá mais um passo importante em direção à sustentabilidade com a inauguração de uma nova linha de produção 100% eco-friendly.

Os novos equipamentos reduzem em 40% o consumo de energia e utilizam tecnologia de ponta para minimizar desperdícios. Este investimento reforça nosso compromisso com o meio ambiente e com a responsabilidade social.

A nova linha estará operacional a partir do próximo mês e permitirá aumentar nossa capacidade produtiva mantendo os mais altos padrões de qualidade e sustentabilidade.`,
    category: 'Sustentabilidade',
    date: '2025-01-12T14:20:00Z',
    readTime: '3 min',
    views: 98,
    comments: 6,
    featured: false,
    author: 'Operações',
    bannerImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=600&fit=crop',
    images: []
  }
];

export const getNewsArticleBySlug = (slug: string): NewsArticle | undefined => {
  return newsData.find(article => article.slug === slug);
};

export const getFeaturedNews = (): NewsArticle | undefined => {
  return newsData.find(article => article.featured);
};

export const getRecentNews = (count: number = 3): NewsArticle[] => {
  return newsData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getAllNews = (): NewsArticle[] => {
  return newsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
