import { DemoService } from './demo.service';

describe('demo.service', () => {
  it('getValue', () => {
    // Preparación
    const demoService: DemoService = new DemoService();

    // Ejecución
    const value = demoService.getValue();

    // Confirmación
    expect(value).toBe('Valor real');
  });

  it('getValueAsObservable', (done) => {
    // Preparación
    const demoService: DemoService = new DemoService();

    // Ejecución
    demoService.getValueAsObservable().subscribe((value) => {
      // Confirmación
      expect(value).toBe('Valor observable');
      done();
    });
  });

  it('getValueAsPromise', (done) => {
    // Preparación
    const demoService: DemoService = new DemoService();

    // Ejecución
    demoService.getValueAsPromise().then((value) => {
      // Confirmación
      expect(value).toBe('Valor promesa');
      done();
    });
  });
});
