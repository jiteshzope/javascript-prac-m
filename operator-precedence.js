let a = 2;
let b = 3;
let c = 4;
let d = 5;

// precedence of operators : It means which operator will be executed first in an expression
// Operators with same precedence are executed from left to right

// let result = a + b * c - d / a; 
// 2 + 3*4 - 5/2 
// 2 + 12 - 2.5
// 14 - 2.5
// 11.5

// http://w3schools.com/js/js_precedence.asp

// https://www.w3schools.com/js/js_precedence.asp

/* 




*/

let result2 = ((a + b) * (c - d)) / a + (a++ * d) / (b-- - c);

// (2 + 3) * (4 - 5) / 2 + 2++ * 5 / 3-- - 4
// 5 * -1 / 2 + 2++ * 5 / 3-- - 4
// -5 / 2 + 2++ * 5 / 3-- - 4
// -2.5 + 2++ * 5 / 3-- - 4
// -2.5 + 10 / 3-- - 4
// -2.5 + 3.3333 - 4
// 0.8333 - 4
// -3.1667

// console.log(result2);
console.log(a);
console.log(b);

// precedence example with && || and !
let x = true;
let y = false;
let z = true;

let result3 = x || y && !z;
// true || false && false
// true || false
// true

let result4 = (x || y) && !z;
// (true || false) && false
// true && false
// false

let result5 = !(x || y) && z;
// !(true || false) && true
// !true && true
// false && true
// false