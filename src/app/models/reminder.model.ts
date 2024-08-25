import { Status } from "./status.model";
import { StatusName } from "../enums/status-name.enum";
import { v4 as uuidv4 } from 'uuid'; // Предполагается, что вы используете библиотеку uuid

export class Reminder {
  public id: string;
  public shortDescription: string;
  public fullDescription: string;
  public creationDate: string;
  public dueDate: string;
  public status: Status;

  constructor(shortDescription?: string, fullDescription?: string, creationDate?: string, dueDate?: string, status?: Status) {
    this.id = uuidv4();
    this.shortDescription = shortDescription || '';
    this.fullDescription = fullDescription || '';
    this.creationDate = creationDate || this.formatDateForInput(new Date())
    this.dueDate = dueDate || '';
    this.status = status || new Status(StatusName.New);
  }


  formatDateForInput(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

}
