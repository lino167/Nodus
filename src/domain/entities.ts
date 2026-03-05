export interface User {
  id: string;
  name: string;
  email: string;
  company?: string;
  role: 'admin' | 'operator' | 'technician';
}

export interface MaintenanceLog {
  id: string;
  assetId: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  createdAt: string;
  updatedAt: string;
}

export interface Asset {
  id: string;
  name: string;
  status: 'operational' | 'maintenance' | 'failure';
  lastMaintenance: string;
}
