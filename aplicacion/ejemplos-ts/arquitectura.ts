// DOMINIO
interface Auth {
  correo: string;
  password: string;
}

interface Token {
  accessToken: string;
  refreshToken: string;
}

// APLICACIÓN
abstract class AuthRepository {
  abstract login(auth: Auth): Observable<Token>;
}

abstract class StorageRepository {
  abstract getStorage(nameProperty: string): string | null;
  abstract setStorage(nameProperty: string, value: string): void;
  abstract clear(): void;
}

class AuthUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly storageRepository: StorageRepository
  ) {}
}

// INFRAESTRUCTURA
class AuthOperation extends AuthRepository {
  login(auth: Auth) {
    throw new Error('Method not implemented.');
  }
}

class StorageOperation extends StorageRepository {
  getStorage(nameProperty: string): string | null {
    throw new Error('Method not implemented.');
  }
  setStorage(nameProperty: string, value: string): void {
    throw new Error('Method not implemented.');
  }
  clear(): void {
    throw new Error('Method not implemented.');
  }
}

// ADAPTADORES

const authRepository: AuthRepository = new AuthOperation();
const storageRepository: StorageRepository = new StorageOperation();

const authUseCase = new AuthUseCase(authRepository, storageRepository);
