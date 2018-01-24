const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add (5, 19);
  expect(result).toBe(24);
});

test('should generate greeting from name', () => {
  const greeting = generateGreeting('Agnes');
  expect(greeting).toBe('Hello Agnes!');
});

test('test should generate greeting for no name', () => {
  const greeting = generateGreeting();
  expect(greeting).toBe('Hello Anonymous!');
});
