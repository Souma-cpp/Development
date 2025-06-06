// JavaScript Number Related Operators Demonstration

// 1. Arithmetic Operators
let a = 10;
let b = 3;

console.log("Arithmetic Operators:");
console.log("a + b =", a + b); // Addition: 13
console.log("a - b =", a - b); // Subtraction: 7
console.log("a * b =", a * b); // Multiplication: 30
console.log("a / b =", a / b); // Division: 3.333...
console.log("a % b =", a % b); // Modulus (Remainder): 1
console.log("a ** b =", a ** b); // Exponentiation: 1000

// 2. Increment and Decrement Operators
let c = 5;
console.log("\nIncrement and Decrement Operators:");
console.log("c++ =", c++); // Post-increment: returns 5, then c becomes 6
console.log("After c++:", c); // 6
console.log("++c =", ++c); // Pre-increment: c becomes 7, returns 7
console.log("c-- =", c--); // Post-decrement: returns 7, then c becomes 6
console.log("After c--:", c); // 6
console.log("--c =", --c); // Pre-decrement: c becomes 5, returns 5

// 3. Assignment Operators
let d = 8;
console.log("\nAssignment Operators:");
d += 2; // d = d + 2
console.log("d += 2:", d); // 10
d -= 3; // d = d - 3
console.log("d -= 3:", d); // 7
d *= 4; // d = d * 4
console.log("d *= 4:", d); // 28
d /= 2; // d = d / 2
console.log("d /= 2:", d); // 14
d %= 5; // d = d % 5
console.log("d %= 5:", d); // 4
d **= 3; // d = d ** 3
console.log("d **= 3:", d); // 64

// 4. Comparison Operators
let x = 7,
  y = 5;
console.log("\nComparison Operators:");
console.log("x > y:", x > y); // true
console.log("x < y:", x < y); // false
console.log("x >= y:", x >= y); // true
console.log("x <= y:", x <= y); // false
console.log("x == y:", x == y); // false (equality, type conversion)
console.log("x === y:", x === y); // false (strict equality, no type conversion)
console.log("x != y:", x != y); // true
console.log("x !== y:", x !== y); // true

// 5. Bitwise Operators
let m = 5; // 0101 in binary
let n = 3; // 0011 in binary
console.log("\nBitwise Operators:");
console.log("m & n:", m & n); // AND: 1 (0001)
console.log("m | n:", m | n); // OR: 7 (0111)
console.log("m ^ n:", m ^ n); // XOR: 6 (0110)
console.log("~m:", ~m); // NOT: -6
console.log("m << 1:", m << 1); // Left shift: 10 (1010)
console.log("m >> 1:", m >> 1); // Right shift: 2 (0010)
console.log("m >>> 1:", m >>> 1); // Unsigned right shift: 2

// 6. Other Useful Number Methods (not operators, but helpful)
console.log("\nOther Useful Number Methods:");
let num = 12.3456;
console.log("num.toFixed(2):", num.toFixed(2)); // "12.35"
console.log("parseInt('123abc'):", parseInt("123abc")); // 123
console.log("parseFloat('3.14xyz'):", parseFloat("3.14xyz")); // 3.14
console.log("isNaN('abc'):", isNaN("abc")); // true
console.log("Number.isFinite(10/0):", Number.isFinite(10 / 0)); // false

// This covers all the main number-related operators in JavaScript with examples and comments.
