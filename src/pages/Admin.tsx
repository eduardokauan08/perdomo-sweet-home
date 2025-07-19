import React, { useState } from 'react';
import Header from '@/components/Header';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminNavigation from '@/components/admin/AdminNavigation';
import ItemsList from '@/components/admin/ItemsList';
import EditForm from '@/components/admin/EditForm';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
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
        <AdminHeader 
          activeSection={activeSection}
          onAddNew={() => setIsAddingNew(true)}
        />

        <AdminNavigation 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ItemsList
            activeSection={activeSection}
            benefits={benefits}
            products={products}
            events={events}
            onEdit={setEditingItem}
            onDelete={handleDelete}
          />

          {(editingItem || isAddingNew) && (
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
          )}
        </div>
      </div>
    </div>
  );
};


export default Admin;