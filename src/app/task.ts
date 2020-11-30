import { Timestamp } from 'rxjs';

export interface Task {
  createdAt: string;
  isDone: boolean;
  task: string;
}