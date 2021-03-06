import jwt_decode from 'jwt-decode';

export class StorageOperation {
  setStorage(nameProperty: string, value: string): void {
    sessionStorage.setItem(nameProperty, value);
  }

  getStorage(nameProperty: string): string | null {
    return sessionStorage.getItem(nameProperty);
  }

  clear(): void {
    sessionStorage.clear();
  }

  getFieldInToken(fieldName: string): any {
    const accessToken = this.getStorage('accessToken');
    if (!accessToken) return '';

    try {
      const payload: any = jwt_decode(accessToken);
      return payload[fieldName];
    } catch (error) {
      return '';
    }
  }
}
