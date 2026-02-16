import { TaskStatus } from './task-status.model';

describe('TaskStatus', () => {
  it('should define task status values', () => {
    expect(TaskStatus.ToDo).toBe('to_do');
    expect(TaskStatus.InProgress).toBe('in_progress');
    expect(TaskStatus.Done).toBe('done');
  });
});
