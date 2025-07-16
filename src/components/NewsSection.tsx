
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NewsCard from '@/components/news/NewsCard';
import { getFeaturedNews, getRecentNews } from '@/data/newsData';

const NewsSection = () => {
  const featuredNews = getFeaturedNews();
  const recentNews = getRecentNews(2).filter(article => !article.featured);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              O que está acontecendo na Perdomo
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              Fique por dentro das últimas novidades, projetos e conquistas da nossa família. 
              Transparência e comunicação que nos conectam.
            </p>
          </div>
          <Link to="/notices">
            <Button className="hidden md:flex bg-primary hover:bg-primary/90 px-6 py-3 rounded-xl">
              Ver todas as notícias
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News */}
          {featuredNews && (
            <div className="lg:col-span-2">
              <NewsCard article={featuredNews} featured />
            </div>
          )}

          {/* Recent News */}
          <div className="space-y-6">
            {recentNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              📢 Tem uma notícia para compartilhar?
            </h3>
            <p className="text-gray-600 mb-6">
              Conte para toda a família Perdomo! Envie suas sugestões de conteúdo para nossa equipe de comunicação.
            </p>
            <Button className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-xl">
              Enviar Sugestão
            </Button>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link to="/notices">
            <Button className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-xl w-full">
              Ver todas as notícias
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
