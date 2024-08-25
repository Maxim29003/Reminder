import { TestBed } from '@angular/core/testing';

import { CurrentReminderService } from './current-reminder.service';

describe('CurrentReminderService', () => {
  let service: CurrentReminderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentReminderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
