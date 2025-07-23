import React, { useState } from 'react';
import { Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface EditModalProps {
  item: any;
  section: 'benefits' | 'products';
  isNew: boolean;
  onSave: (data: any) => void;
  onCancel: () => void;
  isOpen: boolean;
}

const EditModal = ({ item, section, isNew, onSave, onCancel, isOpen }: EditModalProps) => {
  const [formData, setFormData] = useState(item || {});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const getSectionTitle = () => {
    return section === 'benefits' ? 'Benefício' : 'Produto';
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

  const renderPreview = () => {
    if (section === 'benefits') {
      return (
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-lg">Preview do Benefício</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{formData.icon || '❓'}</span>
              <div>
                <h3 className="font-semibold">{formData.shortTitle || 'Título resumido'}</h3>
                <p className="text-sm text-muted-foreground">{formData.title || 'Título completo'}</p>
              </div>
            </div>
            {formData.mainImage && (
              <img 
                src={formData.mainImage} 
                alt="Preview" 
                className="w-full h-32 object-cover rounded-md"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            )}
            <p className="text-sm">{formData.description || 'Descrição do benefício aparecerá aqui...'}</p>
          </CardContent>
        </Card>
      );
    } else {
      return (
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-lg">Preview do Produto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.image && (
              <img 
                src={formData.image} 
                alt="Preview" 
                className="w-full h-32 object-cover rounded-md"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            )}
            <div>
              <h3 className="font-semibold">{formData.name || 'Nome do produto'}</h3>
              <p className="text-sm text-orange-600 font-medium">{formData.category || 'Categoria'}</p>
              {formData.highlight && (
                <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full mt-1">
                  {formData.highlight}
                </span>
              )}
            </div>
            <p className="text-sm">{formData.description || 'Descrição do produto aparecerá aqui...'}</p>
            <p className="text-xs text-muted-foreground italic">{formData.story || 'História do produto...'}</p>
          </CardContent>
        </Card>
      );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onCancel}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            {isNew ? 'Adicionar' : 'Editar'} {getSectionTitle()}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 overflow-hidden">
          <div className="overflow-y-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Formulário</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {section === 'benefits' && renderBenefitsForm()}
                  {section === 'products' && renderProductsForm()}

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
          </div>
          
          <div className="overflow-y-auto">
            {renderPreview()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;