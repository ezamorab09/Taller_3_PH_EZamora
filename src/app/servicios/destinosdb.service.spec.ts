import { TestBed } from '@angular/core/testing';

import { DestinosdbService } from './destinosdb.service';

describe('DestinosdbService', () => {
  let service: DestinosdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinosdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
