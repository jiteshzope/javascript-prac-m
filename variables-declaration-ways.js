// what are scopes in JavaScript?
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope


// console.log("Hello World 1");  // Global Scope

// if(true){
//     console.log("Hello World 2");  // Block Scope
// }else{
//     console.log("Hello World 4"); // Block Scope
// }

// for(let i=0; i<5; i++){
//     console.log(i); // Block Scope
// }

// let i = 1; // Global Scope
// while(i<=5){
//     console.log(i); // Block Scope
//     i++;
// }

// function hello(){
//     console.log("Hello World 3"); // Function Scope
// }

// let arr = [1,2,3,4,5];


// **********************************************************************************

// Ways to declare a variable in JavaScript
// 1. var
// 2. let
// 3. const

// var is used to declare a variable which has global scope or function scope
// we can re-declare and re-assign the value of var variable

// var a = 10;  // it can be accessed globally

// console.log(a); // 10

// var a = 20; // re-declaration
// console.log(a); // 20

// a = 30; // re-assignment
// console.log(a); // 30


// global scope
// { // block
//     {
//     // block
//         var a = 101; // it will take global scope as var is not block scoped, it will keep checking the upper scope until it finds the compatible scope and will take that scope
//         function varTest(){
//             // var a = 100; // function scope
//             console.log(a);
//         }
//         varTest();

//     }
// }

// var b = 1000;
// console.log('outside : ',b);

// {
//     var b = 300;
//     function test(){
//         // var b = 2000; // function scope
//         console.log('inside:',b);
//     }
// }

// test();
// console.log('outside : ',b);


var c = 400;

function hello(){
    var c = 300;
    function inner(){
        // var c = 500;
        console.log('inner : ',c);
    } 
    var c = 100; // function scope
    inner();
    // var c = 200; // here the variable declaration of c is moved to the top of the current scope but the assignment remains in the same place, and this conept is called as "hoisting" in JavaScript
}

hello();
console.log('outside : ',c);

