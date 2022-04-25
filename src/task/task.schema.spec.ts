import { TaskSchema } from './task.schema';

describe('TaskSchema', () => {
  it('should be defined', () => {
    expect(new TaskSchema()).toBeDefined();
  });
});
