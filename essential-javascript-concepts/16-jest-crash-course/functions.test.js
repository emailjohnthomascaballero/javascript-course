const functions = require("./functions");

// toBe
test("should adds 2 + 2 equal 4", () => {
  expect(functions.add(2, 2)).toBe(4); 
});

// not
test("should adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5); 
});

// toBeNull
test("should be NULL", () => {
  expect(functions.isNull()).toBeNull(); 
});

// toBeFalsy
test("should be Falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy(); 
});

// List of falsy values:
// false.
// 0 (zero)
// '' or “” (empty string)
// null.
// undefined.
// NaN.

// toEqual
test("should be John Secret", () => {
  expect(functions.createUser()).toEqual({
    firstName: 'John',
    lastName: 'Secret'
  }); 
});

// return John as an Object
// return Secret as an Array

// What is the difference between 'toBe' and 'toEqual' in Jest?
// toBe just checks that a value is what you expect. It uses === to check strict equality.
// Use .toEqual when you want to check that two objects have the same value.

// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800
  const load2 = 700
  expect(load1 + load2).toBeLessThan(1600)
})
