export abstract class StorageRepository {
  abstract getStorage(nameProperty: string): string | null;
  abstract setStorage(nameProperty: string, value: string): void;
  abstract clear(): void;
  abstract getFieldInToken(fieldName: string): string | null;
}
