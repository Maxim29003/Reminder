import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {ReminderService} from "../../services/reminder.service";
import {Reminder} from "../../models/reminder.model";
import {CommonModule} from "@angular/common";
import {StatusName} from "../../enums/status-name.enum";
import {DoubleClickService} from "../../services/double-click.service";


@Component({
  selector: 'app-reminder-list',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './reminder-list.component.html',
  styleUrl: './reminder-list.component.css'
})
export class ReminderListComponent implements OnInit{
  reminders: Reminder[] = [];
  statusName = StatusName;

  constructor(private reminderService:ReminderService, private doubleClickService:DoubleClickService) {}

  ngOnInit(): void {
    this.reminders = this.reminderService.getReminders()
  }

  selectReminder(reminder: Reminder) {
    this.doubleClickService.handleClick(reminder)
  }
}
