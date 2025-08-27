import React from 'react';
import { Shield, ArrowLeft, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AccessBlocked = () => {
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

      {/* Animated security elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 animate-pulse">
          <div className="w-6 h-6 bg-destructive/20 rounded-full"></div>
        </div>
        <div className="absolute top-40 right-32 animate-pulse delay-300">
          <div className="w-4 h-4 bg-destructive/30 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-pulse delay-700">
          <div className="w-5 h-5 bg-destructive/25 rounded-full"></div>
        </div>
        <div className="absolute top-60 right-20 animate-pulse delay-500">
          <div className="w-3 h-3 bg-destructive/20 rounded-full"></div>
        </div>
      </div>

      <div className="text-center z-10 max-w-2xl mx-auto px-6">
        {/* Lock icon with animation */}
        <div className="relative mb-8">
          <div className="mx-auto w-32 h-32 bg-gradient-to-b from-destructive/10 to-destructive/20 rounded-full flex items-center justify-center animate-pulse-gentle">
            <Lock className="w-16 h-16 text-destructive animate-pulse" />
          </div>
        </div>

        {/* Main content */}
        <h1 className="font-display text-4xl md:text-6xl font-bold text-destructive mb-4">
          Acesso
          <span className="text-destructive/80 block">
            Bloqueado
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 font-light leading-relaxed">
          Você não tem permissão para acessar esta página.
          <br />
          <span className="font-medium text-destructive/80">Entre em contato com o administrador</span>
        </p>

        <div className="flex items-center justify-center gap-6 mb-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-destructive" />
            <span className="font-medium">Área Restrita</span>
          </div>
        </div>

        {/* Security info card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-destructive/10">
          <h3 className="font-display text-xl font-semibold text-destructive mb-4">
            Medidas de Segurança
          </h3>
          <div className="space-y-3 text-left max-w-md mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full"></div>
              <span className="text-sm text-muted-foreground">Acesso controlado por permissões</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full"></div>
              <span className="text-sm text-muted-foreground">Tentativa de acesso registrada</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full"></div>
              <span className="text-sm text-muted-foreground">Contate o suporte se necessário</span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <Button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto"
          >
            Voltar ao Início
          </Button>
          <p className="text-sm text-muted-foreground">
            Precisa de ajuda? Entre em contato conosco 🔒
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessBlocked;