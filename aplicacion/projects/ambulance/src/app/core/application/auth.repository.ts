import { Observable } from 'rxjs';
import { Auth } from '../domain/auth.interface';
import { Token } from '../domain/token.interface';

export abstract class AuthRepository {
  abstract login(auth: Auth): Observable<Token>;
}
