// console.log(typeof 5); // number
// console.log(typeof 'hello'); // string
// console.log(typeof true); // boolean
// console.log(typeof false);
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object (this is a bug in JS)
// console.log(typeof {}); // object
// console.log(typeof []); // object (arrays are objects in JS)
// console.log(typeof function(){}); // function
// console.log(typeof NaN); // number (NaN is a special number in JS)
// console.log(typeof Infinity); // number (Infinity is a special number in JS)
// console.log(typeof -Infinity); // number (-Infinity is a special number in JS)


// arithematic operators
// console.log(5 + 3); // addition
// console.log(5 - 3); // subtraction
// console.log(5 * 3); // multiplication
// console.log(5 / 3); // division // 1.6666666666666667
// console.log(Math.floor(5/3)); // 1
// console.log(Math.ceil(5/3)); // 2
// console.log(Math.round(5/3)); // 2

// console.log(5 % 3); // modulus (remainder) // 2
// console.log(10 % 3); // 1
// console.log(11 % 3); // 2
// console.log(12 % 3); // 0

// console.log(5 ** 3); // exponentiation // 125 (1*5*5*5)
// console.log(5 ** 0); // 1
// console.log(5 ** 1); // 1 * 5
// console.log(5 ** 2); // 25 (1*5*5)

// // assignment operators
// let a = 10;
// a = a * 2; // expression on the right of = is evaluated first, and it is evaluated from left to right and then assigned to the variable on the left of =
// console.log(a); // 20

// a *= 2; // a = a * 2
// a += 5; // a = a + 5
// a -= 10; // a = a - 10
// a /= 3; // a = a / 3
// a %= 4; // a = a % 4
// a **= 3; // a = a ** 3 // a = a * a * a

// Comparison or Equality operators == === != !== > < >= <=
console.log(5 == '5'); // true (only value is compared) .. loose equality operator
console.log(5 === '5'); // false (value and type both are compared).. strict equality operator