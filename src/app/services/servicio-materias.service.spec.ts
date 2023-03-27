import { TestBed } from '@angular/core/testing';

import { ServicioMateriasService } from './servicio-materias.service';

describe('ServicioMateriasService', () => {
  let service: ServicioMateriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMateriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
