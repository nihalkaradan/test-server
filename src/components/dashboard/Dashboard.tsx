import React from 'react';
import { OrderStats, CashFlowData, Lead, TopExpense, SoldItem } from '../../types/dashboard';

// First, let's create the StatCard component interface
interface StatCardProps {
  title: string;
  value: number;
  change: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-sm text-gray-500">{title}</h3>
    <p className="text-2xl font-semibold">{value}</p>
    <span className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
      {change >= 0 ? '+' : ''}{change}% from last month
    </span>
  </div>
);

interface DashboardProps {
  orderStats: OrderStats;
  cashFlowData: CashFlowData[];
  leads: Lead[];
  topExpenses: TopExpense;
  soldItems: SoldItem[];
}

export const Dashboard: React.FC<DashboardProps> = ({
  orderStats,
  cashFlowData,
  leads,
  topExpenses,
  soldItems,
}) => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Pending Orders"
          value={orderStats.totalPending}
          change={orderStats.percentageChanges.pending}
        />
        <StatCard
          title="Total Confirmed Orders"
          value={orderStats.totalConfirmed}
          change={orderStats.percentageChanges.confirmed}
        />
        <StatCard
          title="Total Production"
          value={orderStats.totalProduction}
          change={orderStats.percentageChanges.production}
        />
        <StatCard
          title="Total Delivered"
          value={orderStats.totalDelivered}
          change={orderStats.percentageChanges.delivered}
        />
      </div>
      
      {/* Add other sections here */}
    </div>
  );
};