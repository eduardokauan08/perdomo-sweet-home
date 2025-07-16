
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/news/NewsCard';
import { Button } from '@/components/ui/button';
import { getAllNews, getFeaturedNews } from '@/data/newsData';

const Notices = () => {
  const featuredNews = getFeaturedNews();
  const allNews = getAllNews();
  const otherNews = allNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Header da página */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-blue-800 text-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <Link to="/">
                <Button variant="ghost" className="text-white hover:bg-white/20 p-2">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                  Aconteceu na Perdomo
                </h1>
                <p className="text-xl text-blue-100">
                  Fique por dentro de todas as novidades da nossa família
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo principal */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Notícia em destaque */}
            {featuredNews && (
              <div className="mb-16">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Notícia em Destaque</h2>
                  <div className="w-20 h-1 bg-primary rounded"></div>
                </div>
                <div className="max-w-4xl">
                  <NewsCard article={featuredNews} featured />
                </div>
              </div>
            )}

            {/* Outras notícias */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Todas as Notícias</h2>
              <div className="w-20 h-1 bg-primary rounded"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {otherNews.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>

            {/* Caso não tenha notícias */}
            {otherNews.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">Nenhuma notícia encontrada no momento.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Notices;
