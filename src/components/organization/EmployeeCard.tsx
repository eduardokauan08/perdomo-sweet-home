import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Phone } from 'lucide-react';
import { Employee } from '@/data/organizationData';

interface EmployeeCardProps {
  employee: Employee;
  onClick: (employee: Employee) => void;
  isCompact?: boolean;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ 
  employee, 
  onClick, 
  isCompact = false 
}) => {
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

  return (
    <Card 
      className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border-l-4 ${
        employee.level === 0 ? 'border-l-purple-500 bg-gradient-to-r from-purple-50 to-white' :
        employee.level === 1 ? 'border-l-blue-500 bg-gradient-to-r from-blue-50 to-white' :
        employee.level === 2 ? 'border-l-green-500 bg-gradient-to-r from-green-50 to-white' :
        'border-l-gray-500 bg-gradient-to-r from-gray-50 to-white'
      } ${isCompact ? 'p-3' : 'p-4'}`}
      onClick={() => onClick(employee)}
    >
      <CardContent className={`${isCompact ? 'p-2' : 'p-4'}`}>
        <div className="flex items-center space-x-3">
          {/* Avatar */}
          <div className={`${getDepartmentColor(employee.department)} rounded-full flex items-center justify-center text-white font-bold shadow-md ${
            isCompact ? 'h-10 w-10 text-sm' : 'h-12 w-12 text-base'
          }`}>
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

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className={`font-semibold text-gray-900 truncate ${
              isCompact ? 'text-sm' : 'text-base'
            }`}>
              {employee.name}
            </h3>
            <p className={`text-gray-600 truncate ${
              isCompact ? 'text-xs' : 'text-sm'
            }`}>
              {employee.position}
            </p>
            {!isCompact && (
              <div className="flex items-center space-x-2 mt-2">
                <Badge 
                  variant="secondary" 
                  className="text-xs bg-gray-100 text-gray-700"
                >
                  {employee.department}
                </Badge>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          {!isCompact && (
            <div className="flex flex-col space-y-1">
              <div className="flex items-center text-gray-400 hover:text-primary cursor-pointer">
                <Mail className="h-4 w-4" />
              </div>
              <div className="flex items-center text-gray-400 hover:text-primary cursor-pointer">
                <Phone className="h-4 w-4" />
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;