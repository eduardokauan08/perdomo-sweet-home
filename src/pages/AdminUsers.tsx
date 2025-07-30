import React, { useState } from 'react';
import Header from '@/components/Header';
import { ArrowLeft, Plus, Search, Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import UserModal from '@/components/admin/UserModal';

interface User {
  id: string;
  nome: string;
  sobrenome: string;
  usuario: string;
  senha?: string;
  dataNascimento: string;
  initials: string;
}

const AdminUsers = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Mock data - in real app this would come from API/database
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      nome: 'João',
      sobrenome: 'Silva',
      usuario: 'joao.silva',
      dataNascimento: '1990-05-15',
      initials: 'JS'
    },
    {
      id: '2',
      nome: 'Maria',
      sobrenome: 'Santos',
      usuario: 'maria.santos',
      dataNascimento: '1985-08-22',
      initials: 'MS'
    },
    {
      id: '3',
      nome: 'Pedro',
      sobrenome: 'Costa',
      usuario: 'pedro.costa',
      dataNascimento: '1992-12-03',
      initials: 'PC'
    }
  ]);

  const filteredUsers = users.filter(user =>
    user.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.sobrenome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.usuario.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = (userData: Omit<User, 'id' | 'initials'>) => {
    const initials = `${userData.nome.charAt(0)}${userData.sobrenome.charAt(0)}`.toUpperCase();
    
    if (isAddingNew) {
      const newUser: User = {
        ...userData,
        id: Date.now().toString(),
        initials
      };
      setUsers([...users, newUser]);
      toast({
        title: "Sucesso!",
        description: "Usuário criado com sucesso.",
      });
    } else if (editingUser) {
      const updatedUser: User = {
        ...userData,
        id: editingUser.id,
        initials
      };
      setUsers(users.map(u => u.id === editingUser.id ? updatedUser : u));
      toast({
        title: "Sucesso!",
        description: "Usuário atualizado com sucesso.",
      });
    }
    
    setEditingUser(null);
    setIsAddingNew(false);
  };

  const handleDelete = (id: string) => {
    setUsers(users.filter(u => u.id !== id));
    toast({
      title: "Usuário removido",
      description: "Usuário removido com sucesso.",
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
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
              <h1 className="text-3xl font-bold text-gray-900">Centro de Administração</h1>
              <p className="text-gray-600">Gerencie usuários do sistema</p>
            </div>
          </div>
          
          <Button
            onClick={() => setIsAddingNew(true)}
            className="bg-primary hover:bg-primary/90"
          >
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Usuário
          </Button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Buscar usuários..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Users List */}
        <div className="grid gap-4">
          {filteredUsers.map((user) => (
            <Card key={user.id} className="hover:shadow-md transition-shadow">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-white font-semibold">
                      {user.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {user.nome} {user.sobrenome}
                    </h3>
                    <p className="text-gray-600">@{user.usuario}</p>
                    <p className="text-sm text-gray-500">
                      Nascimento: {formatDate(user.dataNascimento)}
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEditingUser(user)}
                  >
                    <Pencil className="h-4 w-4 mr-2" />
                    Editar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(user.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Excluir
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Nenhum usuário encontrado.</p>
          </div>
        )}

        {/* User Modal */}
        {(editingUser || isAddingNew) && (
          <UserModal
            user={editingUser}
            isNew={isAddingNew}
            onSave={handleSave}
            onCancel={() => {
              setEditingUser(null);
              setIsAddingNew(false);
            }}
            isOpen={true}
          />
        )}
      </div>
    </div>
  );
};

export default AdminUsers;