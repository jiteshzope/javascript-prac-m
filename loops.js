// for loop

/* for(variable-initialization; conditionToGoInsideTheBlock; variable-modifier){
    code to be executed
}
*/

/*

variable-initialization: variable is initialized only once for the first time and then it never comes here

conditionToGoInsideTheBlock: it decides whether to go inside the block or terminate the loop.... if it is true then it goes 
inside and the loop continues, but if this condition is false for any value of the variable then the loop immediately terminates and control comes out of the loop

variable-modifier: During each round after the block of code is executed completely, this modifier runs and modifies the variable value

*/

// for (let i = 1; i <= 5; i++) {

//     console.log(i);

//     // end of block
//     // During each round after the code block is executed completely, i++ runs and modifies the value of i
// }

// while loop
/* 
    variable-initialization
    while(conditionToGoInsideTheBlock){
        code to be executed
        variable-modifier
    }
*/

// let j = 1; // variable-initialization
// while (j <= 5) { // conditionToGoInsideTheBlock
//     console.log(j);
//     j++; // variable-modifier
// }

// ***************************************************************************

// continue and break statements

// continue statement
// for (let k = 1; k <= 10; k++) {
//     if (k === 5) {
//         continue; // continue with the next round... it skips the current iteration when k is 5 and continues with the next iteration.. so it will not execute below code for k=5 and it will go to the variable-modifier part directly 
//     }
//     console.log(k);
// }

// break statement
// for (let k = 1; k <= 10; k++) {
//     if (k === 5) {
//         break; // it terminates the loop permanently if k is 5
//     }
//     console.log(k);
// }
