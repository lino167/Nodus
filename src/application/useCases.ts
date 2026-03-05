import { IAuthRepository } from '../domain/repositories';

export class LoginUseCase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(email: string, password: string) {
    if (!email.includes('@')) throw new Error('Invalid email');
    if (password.length < 6) throw new Error('Password too short');
    return this.authRepository.login(email, password);
  }
}
