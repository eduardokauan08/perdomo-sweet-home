import React from 'react';
import { ArrowLeft, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface AdminHeaderProps {
  activeSection: 'benefits' | 'products' | 'events';
  onAddNew: () => void;
}

const AdminHeader = ({ activeSection, onAddNew }: AdminHeaderProps) => {
  const navigate = useNavigate();

  const getSectionLabel = () => {
    switch (activeSection) {
      case 'benefits': return 'Benefício';
      case 'products': return 'Produto';
      case 'events': return 'Evento';
      default: return '';
    }
  };

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="hover:bg-gray-100"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Centro de Edição</h1>
          <p className="text-gray-600">Gerencie o conteúdo do portal interno</p>
        </div>
      </div>
      
      <Button
        onClick={onAddNew}
        className="bg-primary hover:bg-primary/90"
      >
        <Plus className="h-4 w-4 mr-2" />
        Adicionar {getSectionLabel()}
      </Button>
    </div>
  );
};

export default AdminHeader;