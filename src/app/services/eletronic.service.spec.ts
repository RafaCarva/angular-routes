import { TestBed } from '@angular/core/testing';

import { EletronicService } from './eletronic.service';

describe('EletronicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EletronicService = TestBed.get(EletronicService);
    expect(service).toBeTruthy();
  });
});
