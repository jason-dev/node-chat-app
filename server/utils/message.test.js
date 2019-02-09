const expect = require('expect');

var {
  generateMessage
} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'John';
    let text = 'Message text';

    let message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message.createdAt).toBeA('number');

  });
});
