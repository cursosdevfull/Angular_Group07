// import { DemoService } from '../01-servicio/demo.service';
import { DependenciaService } from './dependencia.service';
import { Observable, of } from 'rxjs';

class DemoFakeService {
  getValue(): string {
    return 'Valor real fake';
  }

  getValueAsObservable(): Observable<string> {
    return of('Valor observable fake');
  }

  getValueAsPromise(): Promise<string> {
    return Promise.resolve('Valor promesa fake');
  }
}

const DemoFakeJsonService = {
  getValue() {
    return 'Valor real fake2';
  },

  getValueAsObservable() {
    return of('Valor observable fake2');
  },

  getValueAsPromise() {
    return Promise.resolve('Valor promesa fake2');
  },
};

describe('dependencia.service', () => {
  let demoService, dependenciaService;

  beforeEach(() => {
    // Preparación
    // demoService = new DemoFakeService();
    demoService = DemoFakeJsonService;
    dependenciaService = new DependenciaService(demoService);
  });

  it('getValue', () => {
    // Ejecución
    const value = dependenciaService.getValue();

    // Confirmación
    expect(value).toBe('Valor real');
  });

  it('getValueAsObservable', (done) => {
    // Ejecución
    dependenciaService.getValueAsObservable().subscribe((value) => {
      // Confirmación
      expect(value).toBe('Valor observable');
      done();
    });
  });

  it('getValueAsPromise', (done) => {
    // Ejecución
    dependenciaService.getValueAsPromise().then((value) => {
      // Confirmación
      expect(value).toBe('Valor promesa');
      done();
    });
  });
});
