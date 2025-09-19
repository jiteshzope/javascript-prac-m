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

// let c = a + b; // here + is an operator and a and b are operands

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

// *************************************************************************************

// Equality operators == === != !== >= <= > <
// console.log(5 == '5'); // true (only value is compared) .. loose equality operator......type coercion takes place here.... here one of the operands is type coerced(means type casting or type changing) to match the other operand type.... either number 5 is converted to string '5' or string '5' is converted to number 5
// console.log(5 === '5'); // false (value and type both are compared).. strict equality operator... here no type coercion takes place... so if the types are different then it will return false right away ... only if the types are same then it will compare the values

// console.log(5 != '5'); // false (only value is compared)... loose inequality operator ... it first checks the types... if types are different then it will do type coercion and then compare the values
// console.log(5 !== '5'); // true (value and type both are compared) ... strict inequality operator.... it first checks the types... if types are different then it will return true right away... only if the types are same then it will compare the values

// numeric value of true is 1 and numeric value of false is 0

// Type coercion rules for == and != operators
// 1. if one of the operand is boolean then it is converted to number (true ---> 1 and false ---> 0)
// console.log(1 == true); // 1 == 1 // true
// console.log(1 == false); // 1 == 0 // false
// console.log(2 == true); // false
// console.log(1 === true); // false
// console.log('5' > 6); // 5 > 6 // false ('5' is converted to number 5 and then compared)
// console.log('5' < 6); // 5 < 6 // true ('5' is converted to number 5 and then compared)
// console.log('5' >= 5); // 5 >= 5 // true ('5' is converted to number 5 and then compared)
// console.log('5' <= 5); // 5 <= 5 // true ('5' is converted to number 5 and then compared)
// console.log('5' > '6'); // false (both are strings so compared lexicographically)
// console.log('5' < '6'); // true (both are strings so compared lexicographically)
// console.log('5' >= '5'); // true (both are strings so compared lexicographically)
// console.log('5' <= '5'); // true (both are strings so compared lexicographically)

// 2. if one of the operand is string and other is number then string is converted to number
// console.log('5' == 5); // 5 == 5 // true
// console.log('5' === 5); // false
// console.log('hello' == 5); // NaN == 5 // false
// console.log('5hello' == 5); // NaN == 5 // false
// console.log('5hello' === 5); // false

// 3. if one of the operand is object and other is number then object is converted to primitive (object to string or object to number)
// console.log([] == 0); // '' == 0 // 0 == 0 // true (empty array is converted to empty string '' and then empty string is converted to number 0)
// console.log([] === 0); // false
// console.log([1,2] == '1,2'); // '1,2' == '1,2' // true (array is converted to string '1,2' and then compared)
// console.log([1,2] === '1,2'); // false
// console.log([1,2] == 1);  // '1,2' == 1 // NaN == 1 // false (array is converted to string '1,2' and then string is converted to NaN and then compared)
// console.log([1,2] === 1); // false
// console.log({} == '[object Object]');  // '[object Object]' == '[object Object]' // true  (object is converted to string '[object Object]' and then compared)
// console.log({} === '[object Object]'); // false .. no type coercion takes place here

// *********************************************************************************************

// Type coercion with + operator and - operator
// console.log(5 + 3); // 8 (both are numbers so addition)
// console.log('5' + 3); // '5' + '3' // '53' (number 3 is converted to string '3' and then concatenation)
// console.log('abc' + 3); // 'abc3' (number 3 is converted to string '3' and then concatenation)
// console.log('abc' + true); // 'abctrue' (boolean true is converted to string 'true' and then concatenation)
// console.log('a' + 'b'); // 'ab' (both are strings so concatenation)
// console.log(5 + '3'); // '53' (number 5 is converted to string '5' and then concatenation)
// console.log('5' + '3'); // '53' (both are strings so concatenation)

// console.log(5 - 3); // 2 (both are numbers so subtraction)
// console.log('5' - 3); // 5 - 3 // 2 ('5' is converted to number 5 and then subtraction)
// console.log('abc' - 3); // NaN - 3 // NaN ('abc' is converted to NaN and then subtraction) ... any arithmetic operation if done with NaN the result is always NaN
// console.log('5' - '3'); // 5 - 3 // 2 (both are strings so both are converted to numbers and then subtraction)
// console.log('5abc' - 3); // NaN - 3 // NaN ('5abc' is converted to NaN and then subtraction)
// console.log('5' - true); // 5 - 1 // 4 (true is converted to number 1 and then subtraction)
// console.log('5' - false); // 5 - 0 // 5 (false is converted to number 0 and then subtraction)
// console.log(true - false); // 1 - 0 // 1 (true is converted to number 1 and false is converted to number 0 and then subtraction)

// *********************************************************************************************

// This has the most practical use in real world applications
// Logical operators (&&, ||, !)

// What are all the falsy values in JS?
// false, 0, "", '', null, undefined, NaN 

// What are all the truthy values in JS?
// All values except falsy values are truthy values
// All the number values except 0 are truthy values ..... -Infinity, -Infinity+1, -Infinity+2, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, Infinity-2, Infinity-1, Infinity
// All the string values except empty string "" and '' are truthy values
// e.g. true, 5, -5, "hello", 'a', [], {}, function(){}, Infinity, -Infinity


// AND operator (&&)

// If the first operand of && then the result is the second operand and if the first operand of && is falsy then the result is the first operand itself

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// console.log(5 && true); // true
// console.log(true && 5); // 5
// console.log(0 && true); // 0
// console.log('' && 0); // '' (empty string)
// console.log('hello' && 5); // 5
// console.log(5 && 'hello'); // 'hello'
// console.log('hello' && 'world'); // 'world'
// console.log([] && 5); // 5
// console.log(-1 && []); // []
// console.log({} && 5); // 5
// console.log(null && {}); // null
// console.log(undefined && 5); // undefined
// console.log(NaN && 5); // 5
// console.log('hello' && 0); // 0

// Logical OR operator (||)

// If the first operand of || is truthy then the result is the first operand itself and if the first operand of || is falsy then the result is the second operand

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// console.log(5 || true); // 5
// console.log(true || 5); // true
// console.log(0 || true); // true

// console.log('' || 0); // 0

// console.log('hello' || 5); // 'hello'
// console.log(5 || 'hello'); // 5
// console.log('hello' || 'world'); // 'hello'  
// console.log(null || 5); // 5
// console.log(undefined || 5); // 5
// console.log(NaN || 5); // 5
// console.log('hello' || 0); // 'hello'

// NOT operator (!)
// If the operand of ! is truthy then the result is false and if the operand of ! is falsy then the result is true
// console.log(!true); // false
// console.log(!false); // true
// console.log(!5); !true // false
// console.log(!0); //!false // true
// console.log(!'hello'); // !true // false
// console.log(!''); // !false // true

// console.log(!null); // !false // true
// console.log(!undefined); // !false // true
// console.log(!NaN); // !false // true
// console.log(![]); // !true // false
// console.log(!{}); // !true // false);