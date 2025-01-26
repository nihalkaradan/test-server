export interface OrderStats {
  totalPending: number;
  totalConfirmed: number;
  totalProduction: number;
  totalDelivered: number;
  percentageChanges: {
    pending: number;
    confirmed: number;
    production: number;
    delivered: number;
  };
}

export interface CashFlowData {
  date: string;
  revenue: number;
  sales: number;
}

export interface Lead {
  date: string;
  fullName: string;
  phoneNumber: string;
  status: 'New Lead' | 'Non Potential' | 'Potential';
}

export interface TopExpense {
  currentBill: number;
  purchase: number;
  employeeSalary: number;
}

export interface SoldItem {
  name: string;
  percentage: number;
}