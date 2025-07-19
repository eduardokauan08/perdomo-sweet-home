import React from 'react';
import { Button } from '@/components/ui/button';

interface AdminNavigationProps {
  activeSection: 'benefits' | 'products' | 'events';
  onSectionChange: (section: 'benefits' | 'products' | 'events') => void;
}

const AdminNavigation = ({ activeSection, onSectionChange }: AdminNavigationProps) => {
  const sections = [
    { key: 'benefits' as const, label: 'Benefícios' },
    { key: 'products' as const, label: 'Produtos' },
    { key: 'events' as const, label: 'Eventos & Aniversários' }
  ];

  return (
    <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm">
      {sections.map((section) => (
        <Button
          key={section.key}
          variant={activeSection === section.key ? "default" : "ghost"}
          onClick={() => onSectionChange(section.key)}
          className="flex-1"
        >
          {section.label}
        </Button>
      ))}
    </div>
  );
};

export default AdminNavigation;