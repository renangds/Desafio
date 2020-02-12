import { TestBed } from '@angular/core/testing';

import { Screen2Service } from './screen2.service';

describe('Screen2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Screen2Service = TestBed.get(Screen2Service);
    expect(service).toBeTruthy();
  });
});
