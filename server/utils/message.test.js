const expect = require('expect');

var {
  generateMessage,
  generateLocationMessage
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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {

    let from = 'Jane';
    let latitude = 1;
    let longitude = 2;
    let url = 'https://www.google.com/maps?q=1,2';

    let message = generateLocationMessage(from, latitude, longitude);

    expect(message.from).toBe(from);
    expect(message.url).toBe(url);
    expect(message.createdAt).toBeA('number');

  });
});
