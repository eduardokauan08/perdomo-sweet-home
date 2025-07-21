import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MessageSquare, User, Building, MapPin } from 'lucide-react';
import { Employee } from '@/data/organizationData';

interface EmployeeModalProps {
  employee: Employee | null;
  isOpen: boolean;
  onClose: () => void;
}

const EmployeeModal: React.FC<EmployeeModalProps> = ({
  employee,
  isOpen,
  onClose,
}) => {
  if (!employee) return null;

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getDepartmentColor = (department: string) => {
    const colors = {
      'Diretoria': 'bg-gradient-to-br from-purple-500 to-purple-600',
      'Assessoria Executiva': 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      'Planejamento': 'bg-gradient-to-br from-blue-500 to-blue-600',
      'Comercial e Marketing': 'bg-gradient-to-br from-green-500 to-green-600',
      'Indústria': 'bg-gradient-to-br from-orange-500 to-orange-600',
      'Recursos Humanos': 'bg-gradient-to-br from-pink-500 to-pink-600',
      'Financeiro': 'bg-gradient-to-br from-cyan-500 to-cyan-600',
      'Operações': 'bg-gradient-to-br from-teal-500 to-teal-600',
    };
    return colors[department as keyof typeof colors] || 'bg-gradient-to-br from-gray-500 to-gray-600';
  };

  const handleTeamsMessage = () => {
    // Simulate Teams integration
    const teamsUrl = `https://teams.microsoft.com/l/chat/0/0?users=${employee.email}`;
    window.open(teamsUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-white rounded-xl shadow-2xl">
        <DialogHeader className="text-center pb-4">
          {/* Avatar */}
          <div className="flex justify-center mb-4">
            <div className={`${getDepartmentColor(employee.department)} rounded-full h-20 w-20 flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
              {employee.avatar ? (
                <img 
                  src={employee.avatar} 
                  alt={employee.name} 
                  className="rounded-full object-cover w-full h-full"
                />
              ) : (
                getInitials(employee.name)
              )}
            </div>
          </div>

          <DialogTitle className="text-xl font-bold text-gray-900 mb-2">
            {employee.name}
          </DialogTitle>
          
          <DialogDescription className="text-gray-600 font-medium mb-3">
            {employee.position}
          </DialogDescription>

          <Badge 
            variant="secondary" 
            className="bg-gray-100 text-gray-700 inline-flex items-center gap-1"
          >
            <Building className="h-3 w-3" />
            {employee.department}
          </Badge>
        </DialogHeader>

        <Separator className="my-4" />

        {/* Contact Information */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Mail className="h-5 w-5 text-blue-600" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Email</p>
              <p className="text-sm text-gray-600">{employee.email}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Phone className="h-5 w-5 text-green-600" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Telefone</p>
              <p className="text-sm text-gray-600">{employee.phone}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <User className="h-5 w-5 text-purple-600" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">ID Funcionário</p>
              <p className="text-sm text-gray-600">{employee.id}</p>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            onClick={() => window.location.href = `mailto:${employee.email}`}
            className="flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            Email
          </Button>
          
          <Button 
            onClick={handleTeamsMessage}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <MessageSquare className="h-4 w-4" />
            Teams
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeModal;