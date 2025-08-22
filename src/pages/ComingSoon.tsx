import React from 'react';
import { ChefHat, Heart, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center relative overflow-hidden">
      {/* Back button */}
      <Button
        variant="outline"
        size="sm"
        className="absolute top-6 left-6 z-20"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar
      </Button>
      {/* Animated ingredients falling */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating ingredients */}
        <div className="absolute top-20 left-20 animate-bounce-slow">
          <div className="w-8 h-8 bg-amber-400 rounded-full opacity-70"></div>
        </div>
        <div className="absolute top-40 right-32 animate-bounce-delayed">
          <div className="w-6 h-6 bg-pink-300 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-60 left-1/4 animate-float">
          <div className="w-5 h-5 bg-orange-300 rounded opacity-50"></div>
        </div>
        <div className="absolute bottom-40 right-20 animate-bounce-slow">
          <div className="w-7 h-7 bg-yellow-300 rounded-full opacity-65"></div>
        </div>
        <div className="absolute top-80 left-3/4 animate-float-delayed">
          <div className="w-4 h-4 bg-red-300 rounded-full opacity-55"></div>
        </div>
        
        {/* Sugar particles */}
        <div className="absolute top-32 left-1/2 animate-sparkle">
          <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
        </div>
        <div className="absolute top-72 right-1/4 animate-sparkle-delayed">
          <div className="w-3 h-3 bg-white rounded opacity-70"></div>
        </div>
      </div>

      <div className="text-center z-10 max-w-2xl mx-auto px-6">
        {/* Animated mixing bowl */}
        <div className="relative mb-8">
          <div className="mx-auto w-32 h-32 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full relative animate-pulse-gentle">
            {/* Bowl rim */}
            <div className="absolute -top-2 left-2 right-2 h-6 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
            
            {/* Whisk animation */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 animate-spin-slow">
              <ChefHat className="w-16 h-16 text-primary" />
            </div>
          </div>
        </div>

        {/* Main content */}
        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-4">
          Estamos 
          <span className="text-accent block font-script">
            Preparando
          </span>
          Algo Especial
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 font-light leading-relaxed">
          Nossa equipe está trabalhando com muito carinho para criar
          <br />
          <span className="font-medium text-primary">uma nova experiência doce para você</span>
        </p>

        <div className="flex items-center justify-center gap-6 mb-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="font-medium">Em breve</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
            <span className="font-medium">Feito com amor</span>
          </div>
        </div>

        {/* Recipe steps animation */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary/10">
          <h3 className="font-display text-xl font-semibold text-primary mb-4">
            Receita em Andamento...
          </h3>
          <div className="space-y-3 text-left max-w-md mx-auto">
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Selecionando ingredientes premium</span>
            </div>
            <div className="flex items-center gap-3 animate-fade-in-delayed">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Misturando com tecnologia</span>
            </div>
            <div className="flex items-center gap-3 animate-fade-in-delayed-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Adicionando um toque especial</span>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground font-light">
          Volte em breve para descobrir nossa nova criação! 🍰
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;