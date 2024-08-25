import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ReminderService} from "../../services/reminder.service";
import {Status} from "../../models/status.model";
import {StatusName} from "../../enums/status-name.enum";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";
import {Reminder} from "../../models/reminder.model";
import {CurrentReminderService} from "../../services/current-reminder.service";
import {Subscription} from "rxjs";
import {dateValidator} from "../../validators/date-validator";

@Component({
  selector: 'app-reminder-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reminder-form.component.html',
  styleUrl: './reminder-form.component.css'
})
export class ReminderFormComponent implements OnInit, OnDestroy {
  reminderForm!: FormGroup;
  statusList = Object.values(StatusName)
  subscription: Subscription;

  constructor(private formBuilder: FormBuilder, private reminderService: ReminderService, private router: Router, private currentReminderService: CurrentReminderService) {
    this.initForm()
    this.subscription = new Subscription()
  }

  private initForm(): void {
    const newReminder = new Reminder();
    this.reminderForm = this.formBuilder.group({
      id: [newReminder.id, []],
      shortDescription: [newReminder.shortDescription, [Validators.required]],
      fullDescription: [newReminder.fullDescription, [Validators.required]],
      creationDate: [newReminder.creationDate, [Validators.required]],
      dueDate: [newReminder.dueDate, [Validators.required]],
      status: [newReminder.status.name, [Validators.required]]
    }, {validators: dateValidator})
  }

  onSubmit() {
    if (this.reminderForm.valid) {
      const formValue = this.reminderForm.value;
      const reminder = new Reminder(
        formValue.shortDescription,
        formValue.fullDescription,
        formValue.creationDate,
        formValue.dueDate,
        new Status(formValue.status)
      );
      reminder.id = formValue.id;

      const indexReminder = this.reminderService.getIndexReminder(reminder);
      if (indexReminder !== -1) {
        this.reminderService.updateReminder(reminder, indexReminder)
      } else {
        this.reminderService.addReminder(reminder);
      }

      this.router.navigate(["/"])
    }

  }

  goBack() {
    this.router.navigate(["/"])
  }

  ngOnInit(): void {
    this.subscription = this.currentReminderService.getCurrentReminder().subscribe((reminder: Reminder) => {
      this.reminderForm.patchValue({
        id: reminder.id,
        shortDescription: reminder.shortDescription,
        fullDescription: reminder.fullDescription,
        creationDate: reminder.creationDate,
        dueDate: reminder.dueDate,
        status: reminder.status.name
      });
    });
  }

  ngOnDestroy(): void {
    this.currentReminderService.setCurrentReminder(new Reminder())
    this.subscription.unsubscribe()
    this.reminderForm.reset()
  }

}
