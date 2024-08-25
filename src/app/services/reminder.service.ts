import { Injectable } from '@angular/core';
import {Reminder} from "../models/reminder.model";
import {Status} from "../models/status.model";
import {StatusName} from "../enums/status-name.enum";

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private reminders: Reminder[] = [
    new Reminder(
      'Встреча с командой',
      'Обсудить текущие проекты и распределение задач на следующую неделю.',
      '2024-08-25T12:00',
      '2024-08-26T12:00',
      new Status(StatusName.New)
    ),
    new Reminder(
      'Отправить отчет',
      'Подготовить и отправить отчет по продажам за август.',
      '2024-08-25T12:00',
      '2024-08-27T12:00',
      new Status(StatusName.Overdue)
    ),
    new Reminder(
      'Проверка документов',
      'Проверить все необходимые документы перед встречей с клиентом.',
      '2024-08-25T12:00',
      '2024-08-28T12:00',
      new Status(StatusName.New)
    ),
    new Reminder(
      'Сделать резервное копирование',
      'Создать резервную копию всех важных файлов на облачное хранилище.',
      '2024-08-25T12:00',
      '2024-08-29T12:00',
      new Status(StatusName.Completed)
    ),
    new Reminder(
      'Проверка бюджета',
      'Пересмотреть бюджет на текущий квартал и внести изменения.',
      '2024-08-25T12:00',
      '2024-08-30T12:00',
      new Status(StatusName.Planned)
    ),
    new Reminder(
      'Обновление сайта',
      'Обновить контент на сайте и проверить работоспособность всех ссылок.',
      '2024-08-25T12:00',
      '2024-08-31T12:00',
      new Status(StatusName.New)
    ),
    new Reminder(
      'Курсовая работа',
      'Закончить написание курсовой работы по теме "Современные технологии".',
      '2024-08-25T12:00',
      '2024-09-01T12:00',
      new Status(StatusName.Overdue)
    ),
    new Reminder(
      'Запланировать отпуск',
      'Обсудить с коллегами даты отпуска и подготовить все необходимые документы.',
      '2024-08-25T12:00',
      '2024-09-02T12:00',
      new Status(StatusName.Completed)
    ),
    new Reminder(
      'Вебинар по маркетингу',
      'Зарегистрироваться и подготовиться к участию в вебинаре по цифровому маркетингу.',
      '2024-08-25T12:00',
      '2024-09-03T12:00',
      new Status(StatusName.Planned)
    ),
    new Reminder(
      'Чтение книги',
      'Завершить чтение книги "Искусство войны" и сделать заметки.',
      '2024-08-25T12:00',
      '2024-09-04T12:00',
      new Status(StatusName.New)
    ),
  ];


  getReminders(): Reminder[] {
    return this.reminders;
  }

  addReminder(reminder: Reminder): void {
    this.reminders.push(reminder);
  }

  getIndexReminder(reminder: Reminder): number {
    return this.reminders.findIndex(r => r.id === reminder.id);
  }

  updateReminder(reminder: Reminder, index: number): void {
    this.reminders[index] = reminder;
  }

}
