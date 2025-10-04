// let a = 10;
// let b = 20;

// // Here only the values of a and b are passed to the function add() and not the actual variables and this concept is called as pass by value
// console.log("addition:", add(a, b));

// let c = 30;
// let d = 40;

// console.log("addition:", add(c, d));

// let e = 50;
// let f = 60;

// console.log("addition:", add(e, f));

// let g = 70;
// let h = 80;

// console.log("addition:", add(g, h));

// // this function will be automatically moved to the top of the current scope which is called as hoisting, here it is in the global scope
// function add(x, y) {
//     return x + y;
// }

// ******************************************************************

// let a = 10;
// let b = 20;

// console.log("addition:", add(a, b));
// console.log("a:", a);
// console.log("b:", b);

// function add(x, y) {
//     x = x + 10; // 20
//     y = y + 10; // 30
//     return x + y;
// }

// console.log("*****************************************************************");

// by default all primitive data types are passed by value, means only the values are passed to the function and not the actual variables

// ***********************************************************************

// by default all non-primitive data types are passed by reference, means the actual variables are passed to the function and not the values

// let obj1 = {
//     name: "John",
//     age: 30
// };

// function myfunction(o) {
//     o.name = "Jane";
//     o.age = 25;
//     console.log("inside function:", o);
// }

// console.log("before function call:", obj1);
// myfunction(obj1);
// console.log("after function call:", obj1);

// Array is also a non-primitive data type

// function myfunction2(arr, x, y, myobj) {
//     arr.push(6);
//     x = 100;
//     y = true;
//     myobj.name = "Bob";
//     console.log("inside function:", arr);
//     console.log("inside function x:", x);
//     console.log("inside function y:", y);
//     console.log("inside function myobj:", myobj);
// }

// let arr1 = [1, 2, 3, 4, 5];
// let obj1 = { name: "Alice" };
// let b = 20;
// let c = false;

// console.log("before function call:", arr1);
// myfunction2(arr1, b, c, obj1);
// console.log("after function call:", arr1);
// console.log("after function call b:", b);
// console.log("after function call c:", c);
// console.log("after function call obj1:", obj1);

// Primitives - passed by value : changes made inside the function are not reflected outside the function
// Non-Primitives - passed by reference : changes made inside the function are reflected outside the function


// ***********************************************************************

// function expression

// regular function
// function add(x, y) {
//     return x + y;
// }

// console.log("addition:", add(10, 20));

// function expression is created and assigned to a variable add
// const add = function(x, y) {
//     return x + y;
// }

// console.log("addition:", add(10, 20));
// let result = add(10, 20);
// console.log("addition:", result);

// function mayuri() {
//     console.log("hello mayuri");
//     return "hello mayuri";
// }

// // mayuri();
// // console.log("mayuri:", mayuri());

// // mayuri();
// // mayuri();
// console.log("mayuri:", mayuri());
// console.log("mayuri:", mayuri());

// Immediately Invoked Function Expression (IIFE)

// let myfunc = (function() {
//     console.log("hello mayuri");
//     return "bablu";
// });

// console.log("myfunc:", myfunc());

// myfunc();

// (function() {
//     console.log("hello mayuri");
// })();

// (function() {
//     console.log("hello mayuri");
//     return "bablu";
// })();

// (function(x, y) {
//     console.log("hello mayuri", x, y);
//     return "bablu";
// })(10, 20);

// console.log("*****************************************************************");

// Arrow function

// const add = (x, y) => {
//     return x + y;
// };

// console.log("addition:", add(10, 20));

// if there is only one statement in the function body then we can remove the curly braces and the return keyword
// const add = (x, y) => x + y;

// console.log("addition:", add(10, 20));

// if there is only one parameter then we can remove the parentheses
// const square = x => x * x;

// console.log("square:", square(5));

// if there are no parameters then we have to use empty parentheses
// const greet = () => "hello world";

// console.log("greet:", greet());


// what is this keyword in javascript functions ??



