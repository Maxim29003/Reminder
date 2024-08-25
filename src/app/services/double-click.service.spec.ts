import { TestBed } from '@angular/core/testing';

import { DoubleClickService } from './double-click.service';

describe('DoubleClickService', () => {
  let service: DoubleClickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoubleClickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
