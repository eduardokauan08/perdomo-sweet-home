import React, { useState } from 'react';
import { Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface EditFormProps {
  item: any;
  section: 'benefits' | 'products' | 'events';
  isNew: boolean;
  onSave: (data: any) => void;
  onCancel: () => void;
}

const EditForm = ({ item, section, isNew, onSave, onCancel }: EditFormProps) => {
  const [formData, setFormData] = useState(item || {});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const getSectionTitle = () => {
    switch (section) {
      case 'benefits': return 'Benefício';
      case 'products': return 'Produto';
      case 'events': return 'Evento';
      default: return '';
    }
  };

  const renderBenefitsForm = () => (
    <>
      <Input
        placeholder="Título completo"
        value={formData.title || ''}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <Input
        placeholder="Título resumido"
        value={formData.shortTitle || ''}
        onChange={(e) => setFormData({ ...formData, shortTitle: e.target.value })}
        required
      />
      <Input
        placeholder="Ícone (emoji)"
        value={formData.icon || ''}
        onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
        required
      />
      <Textarea
        placeholder="Descrição"
        value={formData.description || ''}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />
      <Input
        placeholder="URL da imagem principal"
        value={formData.mainImage || ''}
        onChange={(e) => setFormData({ ...formData, mainImage: e.target.value })}
      />
    </>
  );

  const renderProductsForm = () => (
    <>
      <Input
        placeholder="Nome do produto"
        value={formData.name || ''}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <Textarea
        placeholder="Descrição"
        value={formData.description || ''}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />
      <Input
        placeholder="Categoria"
        value={formData.category || ''}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        required
      />
      <Input
        placeholder="Destaque"
        value={formData.highlight || ''}
        onChange={(e) => setFormData({ ...formData, highlight: e.target.value })}
        required
      />
      <Input
        placeholder="História do produto"
        value={formData.story || ''}
        onChange={(e) => setFormData({ ...formData, story: e.target.value })}
        required
      />
      <Input
        placeholder="URL da imagem"
        value={formData.image || ''}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        required
      />
    </>
  );

  const renderEventsForm = () => (
    <>
      <Input
        placeholder="Título do evento"
        value={formData.title || ''}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <Input
        placeholder="Data (dd/mm)"
        value={formData.date || ''}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
      />
      <Input
        placeholder="Horário (hh:mm)"
        value={formData.time || ''}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        required
      />
      <Input
        placeholder="Tipo do evento"
        value={formData.type || ''}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        required
      />
    </>
  );

  return (
    <Card className="sticky top-24 h-fit">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {isNew ? 'Adicionar' : 'Editar'} {getSectionTitle()}
          <Button
            variant="ghost"
            size="sm"
            onClick={onCancel}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {section === 'benefits' && renderBenefitsForm()}
          {section === 'products' && renderProductsForm()}
          {section === 'events' && renderEventsForm()}

          <div className="flex space-x-2 pt-4">
            <Button type="submit" className="flex-1">
              <Save className="h-4 w-4 mr-2" />
              Salvar
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default EditForm;