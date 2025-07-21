import React, { useState, useMemo } from 'react';
import { Search, Filter, Users, Grid, List, ChevronLeft, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { organizationData, getDepartments, Employee } from '@/data/organizationData';
import EmployeeCard from '@/components/organization/EmployeeCard';
import EmployeeModal from '@/components/organization/EmployeeModal';
import OrganizationTree from '@/components/organization/OrganizationTree';
import VisualOrgChart from '@/components/organization/VisualOrgChart';
import Header from '@/components/Header';

const Organization: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'visual' | 'tree' | 'grid'>('visual');
  const [isCompact, setIsCompact] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['ceo-001']));

  const departments = getDepartments();
  const ceo = organizationData.find(emp => emp.level === 0);

  // Filter employees based on search and department
  const filteredEmployees = useMemo(() => {
    return organizationData.filter(employee => {
      const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          employee.position.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = selectedDepartment === 'all' || employee.department === selectedDepartment;
      
      return matchesSearch && matchesDepartment;
    });
  }, [searchTerm, selectedDepartment]);

  const handleEmployeeClick = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const handleToggleNode = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const handleExpandAll = () => {
    const allIds = new Set(organizationData.map(emp => emp.id));
    setExpandedNodes(allIds);
  };

  const handleCollapseAll = () => {
    setExpandedNodes(new Set(['ceo-001']));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => navigate('/')} className="cursor-pointer">
                Início
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-gray-600">Organograma</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Voltar
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Organograma</h1>
              <p className="text-gray-600">Estrutura organizacional da Perdomo</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="text-sm">
              <Users className="h-4 w-4 mr-1" />
              {filteredEmployees.length} funcionários
            </Badge>
          </div>
        </div>

        {/* Controls */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Filtros e Visualização</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar por nome ou cargo..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Department Filter */}
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger>
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <SelectValue placeholder="Departamento" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os departamentos</SelectItem>
                  {departments.map(dept => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'visual' ? 'default' : 'outline'}
                  onClick={() => setViewMode('visual')}
                  size="sm"
                >
                  <Users className="h-4 w-4 mr-1" />
                  Organograma
                </Button>
                <Button
                  variant={viewMode === 'tree' ? 'default' : 'outline'}
                  onClick={() => setViewMode('tree')}
                  size="sm"
                >
                  <List className="h-4 w-4 mr-1" />
                  Árvore
                </Button>
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  onClick={() => setViewMode('grid')}
                  size="sm"
                >
                  <Grid className="h-4 w-4 mr-1" />
                  Grade
                </Button>
              </div>

              {/* Compact Toggle */}
              <Button
                variant="outline"
                onClick={() => setIsCompact(!isCompact)}
                size="sm"
              >
                {isCompact ? (
                  <>
                    <Maximize2 className="h-4 w-4 mr-1" />
                    Expandir
                  </>
                ) : (
                  <>
                    <Minimize2 className="h-4 w-4 mr-1" />
                    Compactar
                  </>
                )}
              </Button>
            </div>

            {/* Tree Controls */}
            {(viewMode === 'tree' || viewMode === 'visual') && (
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={handleExpandAll}>
                  Expandir Tudo
                </Button>
                <Button variant="outline" size="sm" onClick={handleCollapseAll}>
                  Contrair Tudo
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Organization Chart */}
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            {viewMode === 'visual' ? (
              <div className="min-h-[600px]">
                {ceo && (
                  <VisualOrgChart
                    employee={ceo}
                    onEmployeeClick={handleEmployeeClick}
                    isCompact={isCompact}
                    expandedNodes={expandedNodes}
                    onToggleNode={handleToggleNode}
                  />
                )}
              </div>
            ) : viewMode === 'tree' ? (
              <div className="overflow-x-auto">
                {ceo && (
                  <OrganizationTree
                    employee={ceo}
                    onEmployeeClick={handleEmployeeClick}
                    isCompact={isCompact}
                    expandedNodes={expandedNodes}
                    onToggleNode={handleToggleNode}
                  />
                )}
              </div>
            ) : (
              <div className={`grid gap-4 ${
                isCompact 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}>
                {filteredEmployees.map((employee) => (
                  <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    onClick={handleEmployeeClick}
                    isCompact={isCompact}
                  />
                ))}
              </div>
            )}

            {filteredEmployees.length === 0 && (
              <div className="text-center py-12">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Nenhum funcionário encontrado
                </h3>
                <p className="text-gray-600">
                  Tente ajustar os filtros ou termo de busca
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Employee Detail Modal */}
      <EmployeeModal
        employee={selectedEmployee}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Organization;