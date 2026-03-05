import { LoginUseCase } from './useCases';
import { IAuthRepository } from '../domain/repositories';

describe('LoginUseCase', () => {
  let loginUseCase: LoginUseCase;
  let mockAuthRepository: jest.Mocked<IAuthRepository>;

  beforeEach(() => {
    mockAuthRepository = {
      login: jest.fn(),
      register: jest.fn(),
    };
    loginUseCase = new LoginUseCase(mockAuthRepository);
  });

  it('should throw an error for invalid email', async () => {
    await expect(loginUseCase.execute('invalid-email', 'password123')).rejects.toThrow('Invalid email');
  });

  it('should throw an error for short password', async () => {
    await expect(loginUseCase.execute('test@example.com', '123')).rejects.toThrow('Password too short');
  });

  it('should call repository login on valid data', async () => {
    mockAuthRepository.login.mockResolvedValue({ token: 'token', user: { id: '1', name: 'Test', email: 'test@example.com', role: 'operator' } });
    await loginUseCase.execute('test@example.com', 'password123');
    expect(mockAuthRepository.login).toHaveBeenCalledWith('test@example.com', 'password123');
  });
});
