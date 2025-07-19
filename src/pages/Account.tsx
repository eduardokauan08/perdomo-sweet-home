import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, Edit, Save, X } from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Account = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'João Silva',
    email: 'joao.silva@perdomo.com.br',
    phone: '(11) 99999-9999',
    department: 'Operação',
    position: 'Operador de Produção',
    admission: '15/03/2020',
    address: 'São Paulo, SP'
  });

  const [editData, setEditData] = useState(userInfo);

  const handleSave = () => {
    setUserInfo(editData);
    setIsEditing(false);
    toast({
      title: "Perfil atualizado!",
      description: "Suas informações foram atualizadas com sucesso.",
    });
  };

  const handleCancel = () => {
    setEditData(userInfo);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
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
              <h1 className="text-3xl font-bold text-gray-900">Minha Conta</h1>
              <p className="text-gray-600">Gerencie suas informações pessoais</p>
            </div>
          </div>
          
          {!isEditing && (
            <Button
              onClick={() => setIsEditing(true)}
              variant="outline"
            >
              <Edit className="h-4 w-4 mr-2" />
              Editar Perfil
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="lg:col-span-1">
            <CardContent className="p-6 text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarFallback className="text-2xl bg-primary text-white">
                  {userInfo.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold text-gray-900">{userInfo.name}</h2>
              <p className="text-gray-600">{userInfo.position}</p>
              <p className="text-sm text-gray-500 mt-1">{userInfo.department}</p>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Admissão: {userInfo.admission}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Informações Pessoais
                {isEditing && (
                  <div className="flex space-x-2">
                    <Button
                      onClick={handleSave}
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Salvar
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      size="sm"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Cancelar
                    </Button>
                  </div>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Nome */}
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-gray-400" />
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700">Nome Completo</label>
                  {isEditing ? (
                    <Input
                      value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                      className="mt-1"
                    />
                  ) : (
                    <p className="text-gray-900 mt-1">{userInfo.name}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  {isEditing ? (
                    <Input
                      type="email"
                      value={editData.email}
                      onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                      className="mt-1"
                    />
                  ) : (
                    <p className="text-gray-900 mt-1">{userInfo.email}</p>
                  )}
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700">Telefone</label>
                  {isEditing ? (
                    <Input
                      value={editData.phone}
                      onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                      className="mt-1"
                    />
                  ) : (
                    <p className="text-gray-900 mt-1">{userInfo.phone}</p>
                  )}
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700">Localização</label>
                  {isEditing ? (
                    <Input
                      value={editData.address}
                      onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                      className="mt-1"
                    />
                  ) : (
                    <p className="text-gray-900 mt-1">{userInfo.address}</p>
                  )}
                </div>
              </div>

              {/* Informações da Empresa */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Informações Profissionais</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Departamento</label>
                    <p className="text-gray-900 mt-1">{userInfo.department}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700">Cargo</label>
                    <p className="text-gray-900 mt-1">{userInfo.position}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700">Data de Admissão</label>
                    <p className="text-gray-900 mt-1">{userInfo.admission}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700">Status</label>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                      Ativo
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Account;