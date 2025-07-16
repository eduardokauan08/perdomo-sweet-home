
import React from 'react';
import { Clock, Eye, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NewsArticle } from '@/data/newsData';
import { getTimeAgo } from '@/utils/dateUtils';

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, featured = false }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      'Produtos': 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-200',
      'RH': 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-200',
      'Treinamento': 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 border-purple-200',
      'Sustentabilidade': 'bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 border-emerald-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  if (featured) {
    return (
      <Link to={`/notices/${article.slug}`}>
        <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-white">
          <div className="relative">
            <img 
              src={article.bannerImage} 
              alt={article.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Badge className={`${getCategoryColor(article.category)} font-medium px-3 py-1`}>
                  {article.category}
                </Badge>
                <span className="text-white/80 text-sm">Por {article.author}</span>
              </div>
              
              <h3 className="text-white text-2xl font-bold mb-3 leading-tight">
                {article.title}
              </h3>
              <p className="text-white/90 text-base leading-relaxed mb-4">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-white/80 text-sm">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {getTimeAgo(article.date)}
                  </span>
                  <span className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {article.views}
                  </span>
                  <span className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {article.comments}
                  </span>
                </div>
                <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/notices/${article.slug}`}>
      <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white">
        <CardContent className="p-0">
          <div className="flex">
            <div className="relative flex-shrink-0">
              <img 
                src={article.bannerImage} 
                alt={article.title}
                className="w-32 h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="p-6 flex-1">
              <div className="flex items-center space-x-2 mb-3">
                <Badge className={`${getCategoryColor(article.category)} text-xs font-medium`}>
                  {article.category}
                </Badge>
                <span className="text-xs text-gray-500">• {article.readTime} leitura</span>
              </div>
              
              <h4 className="font-bold text-base mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                {article.title}
              </h4>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-gray-500 space-x-3">
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {getTimeAgo(article.date)}
                  </span>
                  <span className="flex items-center">
                    <Eye className="h-3 w-3 mr-1" />
                    {article.views}
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewsCard;
