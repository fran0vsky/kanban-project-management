export const TaskStatus = {
  ToDo: 'to_do',
  InProgress: 'in_progress',
  Done: 'done',
} as const;

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
