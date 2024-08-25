import {Reminder} from "./reminder.model";

export interface TimestampedReminderType {
  reminder: Reminder;
  timestamp: number;
}
