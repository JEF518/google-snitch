const SlackAlerter = require('../../src/slackAlert');
// placeholder tests
describe('SlackAlerter', () => {
  beforeEach(() => {
    const slackAlerter = new SlackAlerter();
  });

  it('should fire off a slack alert to the passed channel with the passed message', () => {
    expect(1 + 1).toEqual(2);
  });
});
