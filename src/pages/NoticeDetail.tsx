
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Eye, MessageCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getNewsArticleBySlug } from '@/data/newsData';
import { getTimeAgo } from '@/utils/dateUtils';

const NoticeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/notices" replace />;
  }

  const article = getNewsArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/notices" replace />;
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'Produtos': 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-200',
      'RH': 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-200',
      'Treinamento': 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 border-purple-200',
      'Sustentabilidade': 'bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 border-emerald-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Botão Ver mais notícias - Topo */}
        <section className="bg-gray-50 py-4 px-6 border-b">
          <div className="max-w-4xl mx-auto">
            <Link to="/notices">
              <Button variant="ghost" className="text-primary hover:bg-primary/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Ver mais notícias
              </Button>
            </Link>
          </div>
        </section>

        {/* Banner principal */}
        <section className="relative">
          <div className="relative h-96 overflow-hidden">
            <img 
              src={article.bannerImage} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge className={`${getCategoryColor(article.category)} font-medium px-3 py-1`}>
                    {article.category}
                  </Badge>
                  <span className="text-white/80 text-sm">Por {article.author}</span>
                </div>
                
                <h1 className="text-white text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  {article.title}
                </h1>
                
                <div className="flex items-center space-x-6 text-white/80 text-sm">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Publicado {getTimeAgo(article.date)}
                  </span>
                  <span className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {article.views} visualizações
                  </span>
                  <span className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {article.comments} comentários
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime} de leitura
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo da notícia */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Excerpt/resumo */}
            <div className="text-xl text-gray-700 leading-relaxed mb-8 p-6 bg-gray-50 rounded-xl border-l-4 border-primary">
              {article.excerpt}
            </div>

            {/* Conteúdo principal */}
            <div className="prose prose-lg max-w-none mb-12">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Galeria de imagens (se houver) */}
            {article.images && article.images.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Galeria de Imagens</h3>
                <div className={`grid gap-4 ${
                  article.images.length === 1 ? 'grid-cols-1' :
                  article.images.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                  article.images.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
                  'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {article.images.map((image, index) => (
                    <div key={index} className="group cursor-pointer overflow-hidden rounded-xl">
                      <img 
                        src={image} 
                        alt={`Imagem ${index + 1}`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Botão Ver mais notícias - Rodapé */}
        <section className="bg-gray-50 py-8 px-6 border-t">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/notices">
              <Button className="bg-primary hover:bg-primary/90 px-8 py-3 rounded-xl">
                Ver mais notícias
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NoticeDetail;
