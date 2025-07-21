export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  avatar?: string;
  managerId?: string;
  level: number;
}

export const organizationData: Employee[] = [
  // CEO
  {
    id: "ceo-001",
    name: "Mariana Perdomo",
    position: "CEO - Diretoria Administrativo",
    department: "Diretoria",
    email: "mariana.perdomo@perdomo.com.br",
    phone: "(11) 99999-0001",
    level: 0
  },

  // Subordinados diretos do CEO
  {
    id: "exec-001",
    name: "Ana Lucia Ferreira",
    position: "Assessoria Executiva Administrativo",
    department: "Assessoria Executiva",
    email: "ana.ferreira@perdomo.com.br",
    phone: "(11) 99999-0002",
    managerId: "ceo-001",
    level: 1
  },
  {
    id: "coord-001",
    name: "Danillo Oliveira Silva",
    position: "Coordenador de S&OP",
    department: "Planejamento",
    email: "danillo.silva@perdomo.com.br",
    phone: "(11) 99999-0003",
    managerId: "ceo-001",
    level: 1
  },
  {
    id: "ger-001",
    name: "Felipe Santos de Faria",
    position: "Gerente Comercial e Marketing Administrativo",
    department: "Comercial e Marketing",
    email: "felipe.faria@perdomo.com.br",
    phone: "(11) 99999-0004",
    managerId: "ceo-001",
    level: 1
  },
  {
    id: "ger-002",
    name: "Fernando Pescatori Bismara Gomes",
    position: "Gerente de Indústria Fábrica",
    department: "Indústria",
    email: "fernando.gomes@perdomo.com.br",
    phone: "(11) 99999-0005",
    managerId: "ceo-001",
    level: 1
  },
  {
    id: "ger-003",
    name: "Jose Chaves de Freitas",
    position: "Gerente de Gente e Gestão Administrativo",
    department: "Recursos Humanos",
    email: "jose.freitas@perdomo.com.br",
    phone: "(11) 99999-0006",
    managerId: "ceo-001",
    level: 1
  },
  {
    id: "cfo-001",
    name: "Miguel Basilio Silveira",
    position: "CFO Administrativo",
    department: "Financeiro",
    email: "miguel.silveira@perdomo.com.br",
    phone: "(11) 99999-0007",
    managerId: "ceo-001",
    level: 1
  },
  {
    id: "ger-004",
    name: "Thiago Ferreira Souza Cintra",
    position: "Gerente de Operações",
    department: "Operações",
    email: "thiago.cintra@perdomo.com.br",
    phone: "(11) 99999-0008",
    managerId: "ceo-001",
    level: 1
  },

  // Equipe Comercial e Marketing
  {
    id: "sup-001",
    name: "Carla Regina Santos",
    position: "Supervisora de Vendas",
    department: "Comercial e Marketing",
    email: "carla.santos@perdomo.com.br",
    phone: "(11) 99999-0101",
    managerId: "ger-001",
    level: 2
  },
  {
    id: "coord-002",
    name: "Ricardo Mendes Lima",
    position: "Coordenador de Marketing",
    department: "Comercial e Marketing",
    email: "ricardo.lima@perdomo.com.br",
    phone: "(11) 99999-0102",
    managerId: "ger-001",
    level: 2
  },
  {
    id: "anal-001",
    name: "Beatriz Costa Oliveira",
    position: "Analista de Vendas",
    department: "Comercial e Marketing",
    email: "beatriz.oliveira@perdomo.com.br",
    phone: "(11) 99999-0103",
    managerId: "sup-001",
    level: 3
  },
  {
    id: "anal-002",
    name: "Paulo Roberto Silva",
    position: "Analista de Marketing Digital",
    department: "Comercial e Marketing",
    email: "paulo.silva@perdomo.com.br",
    phone: "(11) 99999-0104",
    managerId: "coord-002",
    level: 3
  },
  {
    id: "rep-001",
    name: "Juliana Fernandes",
    position: "Representante Comercial SP",
    department: "Comercial e Marketing",
    email: "juliana.fernandes@perdomo.com.br",
    phone: "(11) 99999-0105",
    managerId: "sup-001",
    level: 3
  },
  {
    id: "rep-002",
    name: "Carlos Eduardo Santos",
    position: "Representante Comercial RJ",
    department: "Comercial e Marketing",
    email: "carlos.santos@perdomo.com.br",
    phone: "(21) 99999-0106",
    managerId: "sup-001",
    level: 3
  },

  // Equipe Indústria
  {
    id: "sup-002",
    name: "Roberto Silva Machado",
    position: "Supervisor de Produção",
    department: "Indústria",
    email: "roberto.machado@perdomo.com.br",
    phone: "(11) 99999-0201",
    managerId: "ger-002",
    level: 2
  },
  {
    id: "sup-003",
    name: "Maria Aparecida Souza",
    position: "Supervisora de Qualidade",
    department: "Indústria",
    email: "maria.souza@perdomo.com.br",
    phone: "(11) 99999-0202",
    managerId: "ger-002",
    level: 2
  },
  {
    id: "coord-003",
    name: "Antonio Carlos Pereira",
    position: "Coordenador de Manutenção",
    department: "Indústria",
    email: "antonio.pereira@perdomo.com.br",
    phone: "(11) 99999-0203",
    managerId: "ger-002",
    level: 2
  },
  {
    id: "tec-001",
    name: "José Silva Santos",
    position: "Técnico de Manutenção",
    department: "Indústria",
    email: "jose.santos@perdomo.com.br",
    phone: "(11) 99999-0204",
    managerId: "coord-003",
    level: 3
  },
  {
    id: "tec-002",
    name: "Pedro Henrique Lima",
    position: "Técnico de Qualidade",
    department: "Indústria",
    email: "pedro.lima@perdomo.com.br",
    phone: "(11) 99999-0205",
    managerId: "sup-003",
    level: 3
  },
  {
    id: "op-001",
    name: "Ana Paula Costa",
    position: "Operadora de Máquinas",
    department: "Indústria",
    email: "ana.costa@perdomo.com.br",
    phone: "(11) 99999-0206",
    managerId: "sup-002",
    level: 3
  },
  {
    id: "op-002",
    name: "João Carlos Almeida",
    position: "Operador de Produção",
    department: "Indústria",
    email: "joao.almeida@perdomo.com.br",
    phone: "(11) 99999-0207",
    managerId: "sup-002",
    level: 3
  },
  {
    id: "op-003",
    name: "Luiza Fernanda Rocha",
    position: "Operadora de Embalagem",
    department: "Indústria",
    email: "luiza.rocha@perdomo.com.br",
    phone: "(11) 99999-0208",
    managerId: "sup-002",
    level: 3
  },

  // Equipe Financeiro (CFO)
  {
    id: "sup-004",
    name: "Patricia Alves Rodrigues",
    position: "Supervisora Financeira",
    department: "Financeiro",
    email: "patricia.rodrigues@perdomo.com.br",
    phone: "(11) 99999-0301",
    managerId: "cfo-001",
    level: 2
  },
  {
    id: "coord-004",
    name: "Eduardo Martins Silva",
    position: "Coordenador Contábil",
    department: "Financeiro",
    email: "eduardo.silva@perdomo.com.br",
    phone: "(11) 99999-0302",
    managerId: "cfo-001",
    level: 2
  },
  {
    id: "anal-003",
    name: "Fernanda Costa Lima",
    position: "Analista Financeira",
    department: "Financeiro",
    email: "fernanda.lima@perdomo.com.br",
    phone: "(11) 99999-0303",
    managerId: "sup-004",
    level: 3
  },
  {
    id: "anal-004",
    name: "Marcos Antonio Santos",
    position: "Analista de Custos",
    department: "Financeiro",
    email: "marcos.santos@perdomo.com.br",
    phone: "(11) 99999-0304",
    managerId: "sup-004",
    level: 3
  },
  {
    id: "ass-001",
    name: "Sandra Regina Oliveira",
    position: "Assistente Contábil",
    department: "Financeiro",
    email: "sandra.oliveira@perdomo.com.br",
    phone: "(11) 99999-0305",
    managerId: "coord-004",
    level: 3
  },
  {
    id: "coord-005",
    name: "Rafael Pereira Costa",
    position: "Coordenador Fiscal",
    department: "Financeiro",
    email: "rafael.costa@perdomo.com.br",
    phone: "(11) 99999-0306",
    managerId: "cfo-001",
    level: 2
  },

  // Equipe Recursos Humanos
  {
    id: "sup-005",
    name: "Claudia Maria Santos",
    position: "Supervisora de RH",
    department: "Recursos Humanos",
    email: "claudia.santos@perdomo.com.br",
    phone: "(11) 99999-0401",
    managerId: "ger-003",
    level: 2
  },
  {
    id: "coord-006",
    name: "Anderson Luiz Silva",
    position: "Coordenador de Treinamento",
    department: "Recursos Humanos",
    email: "anderson.silva@perdomo.com.br",
    phone: "(11) 99999-0402",
    managerId: "ger-003",
    level: 2
  },
  {
    id: "anal-005",
    name: "Vanessa Almeida Costa",
    position: "Analista de RH",
    department: "Recursos Humanos",
    email: "vanessa.costa@perdomo.com.br",
    phone: "(11) 99999-0403",
    managerId: "sup-005",
    level: 3
  },
  {
    id: "esp-001",
    name: "Roberta Silva Martins",
    position: "Especialista em Recrutamento",
    department: "Recursos Humanos",
    email: "roberta.martins@perdomo.com.br",
    phone: "(11) 99999-0404",
    managerId: "sup-005",
    level: 3
  },
  {
    id: "ass-002",
    name: "Carolina Ferreira Lima",
    position: "Assistente de Departamento Pessoal",
    department: "Recursos Humanos",
    email: "carolina.lima@perdomo.com.br",
    phone: "(11) 99999-0405",
    managerId: "sup-005",
    level: 3
  },

  // Equipe Operações
  {
    id: "sup-006",
    name: "Marcos Vinicius Souza",
    position: "Supervisor de Logística",
    department: "Operações",
    email: "marcos.souza@perdomo.com.br",
    phone: "(11) 99999-0501",
    managerId: "ger-004",
    level: 2
  },
  {
    id: "coord-007",
    name: "Cristiane Aparecida Silva",
    position: "Coordenadora de Expedição",
    department: "Operações",
    email: "cristiane.silva@perdomo.com.br",
    phone: "(11) 99999-0502",
    managerId: "ger-004",
    level: 2
  },
  {
    id: "anal-006",
    name: "Gabriel Santos Oliveira",
    position: "Analista de Logística",
    department: "Operações",
    email: "gabriel.oliveira@perdomo.com.br",
    phone: "(11) 99999-0503",
    managerId: "sup-006",
    level: 3
  },
  {
    id: "ass-003",
    name: "Priscila Costa Santos",
    position: "Assistente de Expedição",
    department: "Operações",
    email: "priscila.santos@perdomo.com.br",
    phone: "(11) 99999-0504",
    managerId: "coord-007",
    level: 3
  },
  {
    id: "op-004",
    name: "Lucas Henrique Lima",
    position: "Operador de Empilhadeira",
    department: "Operações",
    email: "lucas.lima@perdomo.com.br",
    phone: "(11) 99999-0505",
    managerId: "coord-007",
    level: 3
  }
];

export const getDepartments = () => {
  const departments = new Set(organizationData.map(emp => emp.department));
  return Array.from(departments).sort();
};

export const getEmployeesByLevel = (level: number) => {
  return organizationData.filter(emp => emp.level === level);
};

export const getSubordinates = (managerId: string) => {
  return organizationData.filter(emp => emp.managerId === managerId);
};

export const getManagerChain = (employeeId: string): Employee[] => {
  const chain: Employee[] = [];
  let currentEmployee = organizationData.find(emp => emp.id === employeeId);
  
  while (currentEmployee) {
    chain.unshift(currentEmployee);
    if (currentEmployee.managerId) {
      currentEmployee = organizationData.find(emp => emp.id === currentEmployee!.managerId);
    } else {
      break;
    }
  }
  
  return chain;
};