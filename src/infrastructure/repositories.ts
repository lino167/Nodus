import { IAuthRepository, IMaintenanceRepository } from '../domain/repositories';
import { User, MaintenanceLog, Asset } from '../domain/entities';

export class AuthRepository implements IAuthRepository {
  async login(email: string, password: string): Promise<{ token: string; user: User }> {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error('Login failed');
    return response.json();
  }

  async register(user: Partial<User>, password: string): Promise<User> {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...user, password }),
    });
    if (!response.ok) throw new Error('Registration failed');
    return response.json();
  }
}

export class MaintenanceRepository implements IMaintenanceRepository {
  async getLogs(): Promise<MaintenanceLog[]> {
    const response = await fetch('/api/maintenance/logs');
    return response.json();
  }

  async createLog(log: Partial<MaintenanceLog>): Promise<MaintenanceLog> {
    const response = await fetch('/api/maintenance/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(log),
    });
    return response.json();
  }

  async getAssets(): Promise<Asset[]> {
    const response = await fetch('/api/maintenance/assets');
    return response.json();
  }
}
