const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//Implement 2 unit tests for the *divide* function.
test('divide 10 / by 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide 34874 / by 32 to equal 1089', () => {
  expect(calculator.divide(34874, 32)).toBe(1089.8125);
});

//Implement 2 unit tests for the *multiply* function.
test('multiply 2468 * 78 to equal 192504', () => {
  expect(calculator.multiply(2468, 78)).toBe(192504);
});

test('multiply 12 * 12 to equal 144', () => {
  expect(calculator.multiply(12, 12)).toBe(144);
});