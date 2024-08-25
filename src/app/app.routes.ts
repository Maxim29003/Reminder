import { Routes } from '@angular/router';
import {ReminderListComponent} from "./components/reminder-list/reminder-list.component";
import {ReminderFormComponent} from "./components/reminder-form/reminder-form.component";

export const routes: Routes = [
  {path:"", component: ReminderListComponent},
  {path:"add", component: ReminderFormComponent}
];
