import {Injectable, OnDestroy} from '@angular/core';
import {bufferCount, filter, map, Subject, Subscription} from "rxjs";
import {Reminder} from "../models/reminder.model";
import {TimestampedReminderType} from "../models/timestamped-reminder.type";
import {CurrentReminderService} from "./current-reminder.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DoubleClickService implements OnDestroy{
  private clickSubject = new Subject<TimestampedReminderType>();
  private subscription: Subscription;
  private clickInterval: number = 300;

  constructor(private currentReminderService:CurrentReminderService, private router:Router) {
    this.subscription = this.clickSubject.pipe(
      bufferCount(2,1),
      filter(([first, second]) => {
        return first.reminder === second.reminder && second.timestamp - first.timestamp <= this.clickInterval
      }),
      map(([first]) => first.reminder)
    ).subscribe(reminder => {
      currentReminderService.setCurrentReminder(reminder)
      this.router.navigate(['/add'])
    })
  }

  handleClick(reminder: Reminder){
    this.clickSubject.next({reminder, timestamp: Date.now()})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
