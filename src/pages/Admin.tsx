import React, { useState } from 'react';
import { ArrowLeft, Plus, Edit, Trash2, Save, X } from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState<'benefits' | 'products' | 'events'>('benefits');
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Mock data states - in real app these would come from API/database
  const [benefits, setBenefits] = useState([
    {
      id: "saude",
      title: "Plano de Saúde e Odontológico Completo",
      shortTitle: "Saúde",
      icon: "❤️",
      description: "Oferecemos cobertura médica e odontológica completa para você e sua família, garantindo tranquilidade e cuidado com a saúde de quem mais importa.",
      backgroundColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      mainImage: "/placeholder.svg",
      additionalImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    }
  ]);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Brigadeiro Tradicional',
      description: 'O clássico que conquistou corações há gerações',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
      category: 'Clássicos',
      rating: 5,
      story: 'Receita da vovó, feita com amor desde 1985',
      highlight: 'Mais vendido',
      ingredients: ['Chocolate belga', 'Leite condensado', 'Manteiga']
    }
  ]);

  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Reunião Geral de Resultados',
      date: '26/01',
      time: '14:00',
      type: 'Reunião',
      color: 'bg-blue-500'
    }
  ]);

  const handleSave = (data: any) => {
    if (activeSection === 'benefits') {
      if (isAddingNew) {
        setBenefits([...benefits, { ...data, id: Date.now().toString() }]);
      } else {
        setBenefits(benefits.map(b => b.id === data.id ? data : b));
      }
    } else if (activeSection === 'products') {
      if (isAddingNew) {
        setProducts([...products, { ...data, id: Date.now() }]);
      } else {
        setProducts(products.map(p => p.id === data.id ? data : p));
      }
    } else if (activeSection === 'events') {
      if (isAddingNew) {
        setEvents([...events, { ...data, id: Date.now() }]);
      } else {
        setEvents(events.map(e => e.id === data.id ? data : e));
      }
    }
    
    setEditingItem(null);
    setIsAddingNew(false);
    toast({
      title: "Sucesso!",
      description: `${activeSection === 'benefits' ? 'Benefício' : activeSection === 'products' ? 'Produto' : 'Evento'} ${isAddingNew ? 'adicionado' : 'atualizado'} com sucesso.`,
    });
  };

  const handleDelete = (id: any) => {
    if (activeSection === 'benefits') {
      setBenefits(benefits.filter(b => b.id !== id));
    } else if (activeSection === 'products') {
      setProducts(products.filter(p => p.id !== id));
    } else if (activeSection === 'events') {
      setEvents(events.filter(e => e.id !== id));
    }
    
    toast({
      title: "Item removido",
      description: `${activeSection === 'benefits' ? 'Benefício' : activeSection === 'products' ? 'Produto' : 'Evento'} removido com sucesso.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
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
            onClick={() => setIsAddingNew(true)}
            className="bg-primary hover:bg-primary/90"
          >
            <Plus className="h-4 w-4 mr-2" />
            Adicionar {activeSection === 'benefits' ? 'Benefício' : activeSection === 'products' ? 'Produto' : 'Evento'}
          </Button>
        </div>

        {/* Section Navigation */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm">
          {[
            { key: 'benefits', label: 'Benefícios' },
            { key: 'products', label: 'Produtos' },
            { key: 'events', label: 'Eventos & Aniversários' }
          ].map((section) => (
            <Button
              key={section.key}
              variant={activeSection === section.key ? "default" : "ghost"}
              onClick={() => setActiveSection(section.key as any)}
              className="flex-1"
            >
              {section.label}
            </Button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Items List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {activeSection === 'benefits' ? 'Benefícios' : activeSection === 'products' ? 'Produtos' : 'Eventos'}
            </h2>
            
            {/* Benefits List */}
            {activeSection === 'benefits' && benefits.map((benefit) => (
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
                        onClick={() => setEditingItem(benefit)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(benefit.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Products List */}
            {activeSection === 'products' && products.map((product) => (
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
                        onClick={() => setEditingItem(product)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(product.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Events List */}
            {activeSection === 'events' && events.map((event) => (
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
                        onClick={() => setEditingItem(event)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(event.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Edit Form */}
          {(editingItem || isAddingNew) && (
            <Card className="sticky top-24 h-fit">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {isAddingNew ? 'Adicionar' : 'Editar'} {activeSection === 'benefits' ? 'Benefício' : activeSection === 'products' ? 'Produto' : 'Evento'}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setEditingItem(null);
                      setIsAddingNew(false);
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <EditForm
                  item={editingItem}
                  section={activeSection}
                  isNew={isAddingNew}
                  onSave={handleSave}
                  onCancel={() => {
                    setEditingItem(null);
                    setIsAddingNew(false);
                  }}
                />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

// Edit Form Component
const EditForm = ({ item, section, isNew, onSave, onCancel }: any) => {
  const [formData, setFormData] = useState(item || {});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {section === 'benefits' && (
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
      )}

      {section === 'products' && (
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
      )}

      {section === 'events' && (
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
      )}

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
  );
};

export default Admin;