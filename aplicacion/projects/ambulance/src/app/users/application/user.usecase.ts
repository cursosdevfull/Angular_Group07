import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../domain/user.model';
import { UserRepository } from './user.repository';
import { ResultPage } from './result-page.interface';

@Injectable()
export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  list(): Observable<UserModel[]> {
    return this.userRepository.list();
  }

  getPage(page: number): Observable<ResultPage> {
    return this.userRepository.getPage(page);
  }

  update(id: number, user: Partial<UserModel>): Observable<UserModel> {
    return this.userRepository.update(id, user);
  }

  delete(id: number): Observable<UserModel> {
    return this.userRepository.delete(id);
  }

  insert(user: Partial<UserModel>): Observable<UserModel> {
    return this.userRepository.insert(user);
  }
}
