import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface User {
  id: string;
  nome: string;
  sobrenome: string;
  usuario: string;
  senha?: string;
  dataNascimento: string;
  initials: string;
}

interface UserModalProps {
  user: User | null;
  isNew: boolean;
  onSave: (data: Omit<User, 'id' | 'initials'>) => void;
  onCancel: () => void;
  isOpen: boolean;
}

const UserModal = ({ user, isNew, onSave, onCancel, isOpen }: UserModalProps) => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    usuario: '',
    senha: '',
    dataNascimento: ''
  });

  const [errors, setErrors] = useState({
    nome: '',
    usuario: '',
    senha: ''
  });

  useEffect(() => {
    if (user && !isNew) {
      setFormData({
        nome: user.nome,
        sobrenome: user.sobrenome,
        usuario: user.usuario,
        senha: '',
        dataNascimento: user.dataNascimento
      });
    } else {
      setFormData({
        nome: '',
        sobrenome: '',
        usuario: '',
        senha: '',
        dataNascimento: ''
      });
    }
    setErrors({ nome: '', usuario: '', senha: '' });
  }, [user, isNew]);

  const validateForm = () => {
    const newErrors = { nome: '', usuario: '', senha: '' };
    let isValid = true;

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
      isValid = false;
    }

    if (!formData.usuario.trim()) {
      newErrors.usuario = 'Usuário é obrigatório';
      isValid = false;
    }

    if (isNew && !formData.senha.trim()) {
      newErrors.senha = 'Senha é obrigatória na criação';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    onSave(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onCancel}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isNew ? 'Adicionar Usuário' : 'Editar Usuário'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome *</Label>
            <Input
              id="nome"
              value={formData.nome}
              onChange={(e) => handleInputChange('nome', e.target.value)}
              placeholder="Digite o nome"
              className={errors.nome ? 'border-red-500' : ''}
            />
            {errors.nome && (
              <p className="text-sm text-red-500">{errors.nome}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="sobrenome">Sobrenome</Label>
            <Input
              id="sobrenome"
              value={formData.sobrenome}
              onChange={(e) => handleInputChange('sobrenome', e.target.value)}
              placeholder="Digite o sobrenome"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="usuario">Usuário *</Label>
            <Input
              id="usuario"
              value={formData.usuario}
              onChange={(e) => handleInputChange('usuario', e.target.value)}
              placeholder="Digite o nome de usuário"
              className={errors.usuario ? 'border-red-500' : ''}
            />
            {errors.usuario && (
              <p className="text-sm text-red-500">{errors.usuario}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="senha">
              Senha {isNew ? '*' : '(deixe em branco para manter a atual)'}
            </Label>
            <Input
              id="senha"
              type="password"
              value={formData.senha}
              onChange={(e) => handleInputChange('senha', e.target.value)}
              placeholder={isNew ? "Digite a senha" : "Nova senha (opcional)"}
              className={errors.senha ? 'border-red-500' : ''}
            />
            {errors.senha && (
              <p className="text-sm text-red-500">{errors.senha}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="dataNascimento">Data de Nascimento</Label>
            <Input
              id="dataNascimento"
              type="date"
              value={formData.dataNascimento}
              onChange={(e) => handleInputChange('dataNascimento', e.target.value)}
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              {isNew ? 'Criar' : 'Salvar'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;