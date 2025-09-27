// if 

// syntax
// if (condition) {
   // code to be executed if the condition is truthy
// }

// let age = 18;
// if (age >= 18) {
//   console.log("You are eligible to vote.");
// }

// if...else
// syntax
// if (condition) {
   // code to be executed if the condition is truthy
// } else {
   // code to be executed if the condition is falsy
// }

// let time = 16;
// if (time < 12) {
//   console.log("Good morning!");
// } else {
//   console.log("Good afternoon!");
// }

// if...else if...else
// syntax
// if (condition1) {
    // code to be executed if condition1 is truthy
// } else if (condition2) {
    // code to be executed if condition2 is truthy
// } else {
    // code to be executed if both conditions are falsy
// }

// let score = 30;
// if (score >= 90) {
//   console.log("Grade: A");
// } else if (score >= 80) {
//   console.log("Grade: B");
// } else if (score >= 70) {
//   console.log("Grade: C");
// } else {
//   console.log("Grade: F");
// }
// console.log("End of the program.");


// nested if else statements

// let num = -24;
// if (num >= 0) {
//   if (num === 0) {
//     console.log("The number is zero.");
//   } else {
//     console.log("The number is positive.");
//     if (num % 2 === 0) {
//         if (num > 12){
//             console.log("The number is greater than 12 and even.");
//         }
//       console.log("The number is even.");
//     } else {
//       console.log("The number is odd.");
//     }
//   }  
// }else if (num < -10){
//     console.log("The number is less than -10");
//     if (num % 2 === 0){ 
//         if (num < -20){
//             console.log("The number is less than -20 and even.");
//         }
//         console.log("The number is even.");
//     }else{
//         console.log("The number is odd.");
//     }
// }else if (num < 0){
//   console.log("The number is negative.");
// }

// If the condition of the if statement evaluates to true, the block of code inside that block is executed and all other else-if/else blocks at the same level are ignored.
// If one of the block is executed then all the other blocks at the same level are skipped.

// IMP Number line https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Fnumber-line-maths.html&psig=AOvVaw2_Xv-7Gs8obaC3VloKS3j6&ust=1759059102194000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjY4u3r-I8DFQAAAAAdAAAAABAE



// Switch case statement
// syntax
// switch (expression) {
//   case value1:{
//     code to be executed if expression === value1  
//     break;
//   }
//   case value2:{
//     code to be executed if expression === value2
//     break;
//   }
//   default:{
//     code to be executed if expression doesn't match any case
//   }
// }

// let day = 'mon';
// switch (day) {
//     case 'mon': {
//         console.log("Monday");
//         break;
//     }
//     case 'tues': {
//         console.log("Tuesday");
//         break;
//     }
//     case 'wed': {
//         console.log("Wednesday");
//         break;
//     }
//     default: {
//         console.log("Invalid day");
//     }
// }

// let day = 'tues';
// switch (day) {
//     case 'mon': {
//         console.log("Monday");
//         break;
//     }
//     case 'tues': {
//         console.log("Tuesday");
//         let num = 10;
//         if (num % 2 === 0) {
//             console.log("The number is even.");
//             if (num > 5) {
//                 console.log("The number is greater than 5 and even.");
//             }
//         } else {
//             console.log("The number is odd.");
//         }
//         break;
//     }
//     case 'wed': {
//         console.log("Wednesday");
//         break;
//     }
//     default: {
//         console.log("Invalid day");
//     }
// }