import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicModel } from '../domain/medic.model';
import { MedicRepository } from './medic.repository';
import { ResultPage } from './result-page.interface';

@Injectable()
export class MedicUseCase {
  constructor(private readonly medicRepository: MedicRepository) {}

  list(): Observable<MedicModel[]> {
    return this.medicRepository.list();
  }

  getPage(page: number): Observable<ResultPage> {
    return this.medicRepository.getPage(page);
  }

  update(id: number, medic: FormData): Observable<MedicModel> {
    return this.medicRepository.update(id, medic);
  }

  delete(id: number): Observable<MedicModel> {
    return this.medicRepository.delete(id);
  }

  insert(medic: FormData): Observable<MedicModel> {
    return this.medicRepository.insert(medic);
  }
}
