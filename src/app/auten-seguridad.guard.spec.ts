import { TestBed, async, inject } from '@angular/core/testing';

import { AutenSeguridadGuard } from './auten-seguridad.guard';

describe('AutenSeguridadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenSeguridadGuard]
    });
  });

  it('should ...', inject([AutenSeguridadGuard], (guard: AutenSeguridadGuard) => {
    expect(guard).toBeTruthy();
  }));
});
