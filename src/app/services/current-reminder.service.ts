import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Reminder} from "../models/reminder.model";

@Injectable({
  providedIn: 'root'
})
export class CurrentReminderService {
  private currentReminderSubject = new BehaviorSubject<Reminder>(new Reminder());

  setCurrentReminder(reminder: Reminder): void {
    this.currentReminderSubject.next(reminder)
  }

  getCurrentReminder(): Observable<Reminder>{
    return this.currentReminderSubject.asObservable();
  }

  constructor() {
  }
}
