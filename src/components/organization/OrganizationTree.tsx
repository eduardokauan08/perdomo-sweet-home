import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Employee, getSubordinates } from '@/data/organizationData';
import EmployeeCard from './EmployeeCard';

interface OrganizationTreeProps {
  employee: Employee;
  onEmployeeClick: (employee: Employee) => void;
  isCompact: boolean;
  expandedNodes: Set<string>;
  onToggleNode: (nodeId: string) => void;
}

const OrganizationTree: React.FC<OrganizationTreeProps> = ({
  employee,
  onEmployeeClick,
  isCompact,
  expandedNodes,
  onToggleNode,
}) => {
  const subordinates = getSubordinates(employee.id);
  const hasSubordinates = subordinates.length > 0;
  const isExpanded = expandedNodes.has(employee.id);

  const getLevelPadding = (level: number) => {
    return level * 20;
  };

  return (
    <div className="relative">
      {/* Employee Card */}
      <div 
        className="relative flex items-center mb-4"
        style={{ paddingLeft: `${getLevelPadding(employee.level)}px` }}
      >
        {/* Connector Lines */}
        {employee.level > 0 && (
          <>
            {/* Vertical line to parent */}
            <div 
              className="absolute border-l-2 border-gray-300"
              style={{
                left: `${getLevelPadding(employee.level) - 10}px`,
                top: '-20px',
                height: '20px',
              }}
            />
            {/* Horizontal line to card */}
            <div 
              className="absolute border-t-2 border-gray-300"
              style={{
                left: `${getLevelPadding(employee.level) - 10}px`,
                top: '24px',
                width: '10px',
              }}
            />
          </>
        )}

        {/* Expand/Collapse Button */}
        {hasSubordinates && (
          <Button
            variant="ghost"
            size="sm"
            className="mr-2 p-1 h-6 w-6 rounded-full border border-gray-300 bg-white hover:bg-gray-50"
            onClick={() => onToggleNode(employee.id)}
          >
            {isExpanded ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronRight className="h-3 w-3" />
            )}
          </Button>
        )}

        {/* Employee Card */}
        <div className={`flex-1 ${hasSubordinates ? '' : 'ml-8'}`}>
          <EmployeeCard
            employee={employee}
            onClick={onEmployeeClick}
            isCompact={isCompact}
          />
        </div>

        {/* Subordinates Count Badge */}
        {hasSubordinates && (
          <div className="ml-2 flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            <Users className="h-3 w-3 mr-1" />
            {subordinates.length}
          </div>
        )}
      </div>

      {/* Subordinates */}
      {hasSubordinates && isExpanded && (
        <div className="relative">
          {/* Vertical line for subordinates */}
          {subordinates.length > 1 && (
            <div 
              className="absolute border-l-2 border-gray-300"
              style={{
                left: `${getLevelPadding(employee.level + 1) - 10}px`,
                top: '0',
                height: `${subordinates.length * 120}px`,
              }}
            />
          )}
          
          {subordinates.map((subordinate, index) => (
            <OrganizationTree
              key={subordinate.id}
              employee={subordinate}
              onEmployeeClick={onEmployeeClick}
              isCompact={isCompact}
              expandedNodes={expandedNodes}
              onToggleNode={onToggleNode}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default OrganizationTree;