let a = 10;
let b = 20;

// Here only the values of a and b are passed to the function add() and not the actual variables and this concept is called as pass by value
console.log("addition:", add(a, b));

let c = 30;
let d = 40;

console.log("addition:", add(c, d));

let e = 50;
let f = 60;

console.log("addition:", add(e, f));

let g = 70;
let h = 80;

console.log("addition:", add(g, h));

// this function will be automatically moved to the top of the current scope which is called as hoisting, here it is in the global scope
function add(x, y) {
    return x + y;
}

// ******************************************************************

