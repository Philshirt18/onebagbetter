/**
 * Basic setup test to verify testing environment
 */
import * as fc from 'fast-check';

describe('Setup', () => {
  it('should run tests correctly', () => {
    expect(true).toBe(true);
  });

  it('should have access to fast-check', () => {
    expect(fc).toBeDefined();
  });
});
