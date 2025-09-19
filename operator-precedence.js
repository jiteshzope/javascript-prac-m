let a = 2;
let b = 3;
let c = 4;
let d = 5;

let result = a + b * c - d / a; 
// 2 + 3*4 - 5/2 
// 2 + 12 - 2.5
// 14 - 2.5
// 11.5

// http://w3schools.com/js/js_precedence.asp

/* 




*/

let result2 = (a + b) * (c - d) / a + a++ * d / b-- - c;