import React from 'react';
import { Employee, getSubordinates } from '@/data/organizationData';
import EmployeeCard from './EmployeeCard';

interface VisualOrgChartProps {
  employee: Employee;
  onEmployeeClick: (employee: Employee) => void;
  isCompact: boolean;
  expandedNodes: Set<string>;
  onToggleNode: (nodeId: string) => void;
}

const VisualOrgChart: React.FC<VisualOrgChartProps> = ({
  employee,
  onEmployeeClick,
  isCompact,
  expandedNodes,
  onToggleNode,
}) => {
  const subordinates = getSubordinates(employee.id);
  const hasSubordinates = subordinates.length > 0;
  const isExpanded = expandedNodes.has(employee.id);

  const renderEmployeeNode = (emp: Employee, isRoot = false) => {
    const subs = getSubordinates(emp.id);
    const hasSubs = subs.length > 0;
    const expanded = expandedNodes.has(emp.id);

    return (
      <div key={emp.id} className="relative flex flex-col items-center">
        {/* Employee Card */}
        <div className={`relative z-10 ${isRoot ? 'mb-16' : 'mb-12'}`}>
          <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <EmployeeCard
              employee={emp}
              onClick={onEmployeeClick}
              isCompact={isCompact}
            />
            
            {/* Expand/Collapse Button for nodes with subordinates */}
            {hasSubs && (
              <button
                onClick={() => onToggleNode(emp.id)}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md transition-colors z-20"
              >
                {expanded ? '−' : '+'}
              </button>
            )}
          </div>
        </div>

        {/* Connection Lines and Subordinates */}
        {hasSubs && expanded && (
          <div className="relative w-full">
            {/* Vertical line down from parent */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-400 h-8 z-10"></div>
            
            {subs.length > 1 ? (
              <>
                {/* Horizontal line across subordinates */}
                <div 
                  className="absolute top-8 bg-blue-400 h-0.5 z-10" 
                  style={{
                    left: `calc(${100 / subs.length / 2}% - 1px)`,
                    right: `calc(${100 / subs.length / 2}% - 1px)`
                  }}
                ></div>
                
                {/* Subordinates Container */}
                <div className="grid gap-8 pt-8" style={{ gridTemplateColumns: `repeat(${subs.length}, 1fr)` }}>
                  {subs.map((sub, index) => (
                    <div key={sub.id} className="relative flex flex-col items-center">
                      {/* Vertical line to subordinate */}
                      <div className="w-0.5 bg-blue-400 h-8 mb-4 relative z-10"></div>
                      
                      {/* Recursive render */}
                      {renderEmployeeNode(sub)}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              /* Single subordinate - direct connection */
              <div className="flex justify-center pt-8">
                <div className="relative flex flex-col items-center">
                  <div className="w-0.5 bg-blue-400 h-8 mb-4"></div>
                  {renderEmployeeNode(subs[0])}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="org-chart-container w-full overflow-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
      <div className="flex justify-center min-w-max">
        <div className="relative">
          {/* CEO Crown/Badge */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg z-20">
            CEO
          </div>
          {renderEmployeeNode(employee, true)}
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-8 flex justify-center">
        <div className="bg-white rounded-lg shadow-sm p-4 border">
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-0.5 bg-blue-400"></div>
              <span>Relação hierárquica</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">+</div>
              <span>Expandir/Contrair subordinados</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualOrgChart;