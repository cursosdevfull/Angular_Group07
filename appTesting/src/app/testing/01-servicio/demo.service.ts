import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DemoService {
  getValue(): string {
    return 'Valor real';
  }

  getValueAsObservable(): Observable<string> {
    return of('Valor observable');
  }

  getValueAsPromise(): Promise<string> {
    return Promise.resolve('Valor promesa');
  }
}
