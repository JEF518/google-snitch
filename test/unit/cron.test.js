const CronJobber = require('../../src/cron');
// placeholder tests
describe('CronJobber', () => {
  beforeEach(() => {
    const cron = new CronJobber();
  });

  it('should create a new cron with the parameters passed', () => {
    expect(1 + 1).toEqual(2);
  });
});
