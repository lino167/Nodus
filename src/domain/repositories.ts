import { User, MaintenanceLog, Asset } from '../domain/entities';

export interface IAuthRepository {
  login(email: string, password: string): Promise<{ token: string; user: User }>;
  register(user: Partial<User>, password: string): Promise<User>;
}

export interface IMaintenanceRepository {
  getLogs(): Promise<MaintenanceLog[]>;
  createLog(log: Partial<MaintenanceLog>): Promise<MaintenanceLog>;
  getAssets(): Promise<Asset[]>;
}
