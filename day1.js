
// Datatypes in JavaScript 
// datatype means what type of data we are storing in a variable

// 1. Primitive Datatypes

// a. Number   2 , 3, 4, 5, 6.7 , 100.55
let num1 = 10;
let num2 = 20.5;
console.log("Number 1:", num1);
console.log("Number 2:", num2);

// b. String   "mayuri", 'zope', `is a bokad`
let str1 = "... #   684  m#%ayuri1212";
let str2 = 'zope';
let str3 = `is a 1213 $2346&*(^Y&#*(@))
newton is udertaken by a
goat bla bla`; // template literal

console.log("String 1:", str1); // "... #   684  m#%ayuri1212
console.log("String 2:", str2);
console.log("String 3:", str3);

// c. Boolean   true , false
let isAvailable = true;
let isLoggedIn = false;
console.log(isAvailable); // true
console.log(isLoggedIn); // false

// d. Undefined   when variable is declared but not initialized
let a;
console.log("Undefined variable:", a); // undefined

// e. Null   when we want to clear the value of a variable` .....
let var1 = null;
console.log("Null variable:", var1);  // null

// 2. Non-Primitive Datatypes

// a. array is collection of data of similar or different datatypes
let arr = [1, 2, 3, 4, 5, `mayuri`, 'sonwel', true, false];

console.log("Array:", arr); // [1, 2, 3, 4, 5, 'mayuri', 'sonwel', true, false]
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[6]); // sonwel

// b. object is collection of key value pairs,
let obj = {
    name: "mayuri",
    age: 25,
    "isMarried" : false,
    '23city12': 'pune',
    'pet12': 'dog',
    pin: 411033,
    "hobbies": ['dancing', 'singing', 'reading books'],
    "12$": "hello",
    "school@$": "abc high school",
    myChildObj: {
        myName: "jitesh",
        myAge: 26,
        myCity: "pune"
    },
    myFunc: function() {
        console.log("Hello from myFunction");
    },
    myFunc2: ()=>{
        console.log("Hello from myFunc2 arrow function");
    },
    myFunc3: function(arg1){
        console.log("Hello from myFunc3 function", arg1);
    }
}

// let obj1 = {
//     name: "jitesh",
//     age: 26,
//     isAvailable: true,
//     city: 'pune',
//     pin: 411033,
//     hobbies: ['coding', 'playing games', 'reading books'],
// }

// console.log("Object:", obj);
console.log("**************************************");
console.log(obj.name); // mayuri
console.log(obj.age); // 25
console.log(obj.isMarried); // false
console.log(obj["23city12"]); // pune  // if key is number or starts with number then we have to use this syntax compulsorily
console.log(obj.pet12); // dog // if key has no special characters eg:- !@#$% and so on and not starts with number then we can use this syntax
console.log(obj.pin); // 411033
console.log(obj.hobbies); // ['dancing', 'singing', 'reading books']
console.log(obj["12$"]); // hello // if there is special char in key then we have to use this syntax compulsorily
console.log(obj["school@$"]); // abc high school // if there is special char in key then we have to use this syntax compulsorily
console.log(obj.myChildObj); // { myName: 'jitesh', myAge: 26, myCity: 'pune' }
console.log(obj.myChildObj.myName); // jitesh
console.log(obj.myChildObj.myAge); // 26
console.log(obj.myChildObj.myCity); // pune

obj.myFunc(); // Hello from myFunction
obj.myFunc2(); // Hello from myFunc2 arrow function
obj.myFunc3("Halllowwwwww"); // Hello from myFunc3 arrow function Halllowwwwww