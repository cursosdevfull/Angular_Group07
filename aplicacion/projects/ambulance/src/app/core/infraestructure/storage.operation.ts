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
}
