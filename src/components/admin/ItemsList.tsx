import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ItemsListProps {
  activeSection: 'benefits' | 'products' | 'events';
  benefits: any[];
  products: any[];
  events: any[];
  onEdit: (item: any) => void;
  onDelete: (id: any) => void;
}

const ItemsList = ({ activeSection, benefits, products, events, onEdit, onDelete }: ItemsListProps) => {
  const getSectionTitle = () => {
    switch (activeSection) {
      case 'benefits': return 'Benefícios';
      case 'products': return 'Produtos';
      case 'events': return 'Eventos';
      default: return '';
    }
  };

  const renderBenefitItem = (benefit: any) => (
    <Card key={benefit.id} className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{benefit.icon}</span>
            <div>
              <h3 className="font-semibold">{benefit.shortTitle}</h3>
              <p className="text-sm text-gray-600 truncate max-w-xs">{benefit.description}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(benefit)}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(benefit.id)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderProductItem = (product: any) => (
    <Card key={product.id} className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <div className="flex space-x-2">
                <Badge className="text-xs">{product.category}</Badge>
                <Badge variant="secondary" className="text-xs">{product.highlight}</Badge>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(product)}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(product.id)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderEventItem = (event: any) => (
    <Card key={event.id} className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${event.color}`}></div>
            <div>
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.date} às {event.time}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(event)}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(event.id)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">
        {getSectionTitle()}
      </h2>
      
      {activeSection === 'benefits' && benefits.map(renderBenefitItem)}
      {activeSection === 'products' && products.map(renderProductItem)}
      {activeSection === 'events' && events.map(renderEventItem)}
    </div>
  );
};

export default ItemsList;