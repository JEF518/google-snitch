const Chrome = require('../../src/chrome');
// placeholder tests
describe('Chrome Data Fetcher', () => {
  beforeEach(() => {
    const chrome = new Chrome();
  });

  it('should fetch the raw html from the chrome releases page', () => {
    expect(1 + 1).toEqual(2);
  });
  it('should transform the raw html to a valid json', () => {
    expect(1 + 1).toEqual(2);
  });
  it('should check if a chrome release is in the next month', () => {
    expect(1 + 1).toEqual(2);
  });
  it('should check if a chrome release is in the next week', () => {
    expect(1 + 1).toEqual(2);
  });
});
