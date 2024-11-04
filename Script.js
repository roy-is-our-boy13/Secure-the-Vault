//Pseudocode: Create a string called message to give the user a message.
/*  This message varivale with store this 
    message "You have received this message 
    because you have been chosen to open an 
    important vault. Here is the secret 
    combination:"*/
let message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// Pseudocode: 5 * 2 = 10
// Let num1 be eqaul to 10 when 5 is multiplied by 2.
const num1 = 5 * 2;

// Pseudocode: 39 + 1 = 40
// Let num2 be eqaul to 40 when 39 is being added by 1.
const num2 = 39 + 1;

// Pseudocode: 78/2 = 39
// Let num3 be eqaul to 39 when 78 is being divied by 2.
const num3 = 78/2;

// Pseudocode: mainFullMessage = message + "-" + num1 + "-" + num2 + "-" +num3
// This will be the main message with all the varaibles combinded. 
const mainFullMessage = `${message} ${num1}-${num2}-${num3}`;

/* 
Pseudocode: Create a dialog box that should say "You have received this message 
    because you have been chosen to open an 
    important vault. Here is the secret 
    combination: 10-40-39
*/
// This will display the main the full message when values 'message', 'num1', 'num2', and 'num3' are all combined.
alert(`${message} ${num1}-${num2}-${num3}`);
console.log(mainFullMessage);