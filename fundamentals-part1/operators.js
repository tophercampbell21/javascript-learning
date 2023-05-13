// *** operators allow us to transform or combine multiple values and do all sorts of other things with values

// ************* MATHEMETICAL or ARITHMETIC OPERATORS

let addition = 2 + 2;

let subtraction = 4 - 2;

let division = 4 / 2;

let multiplcation = 3 * 3;

let toThePowerOf = 2 ** 3;

let modulo = 4 % 2;
// *** This math operator divides the second number into the first number and determines if there is remainder or not
// *** this is incredibly useful in certain sitations

// ***** using math operators with variables

const birthYear = 1993;
const currentYear = 2023;
// *** you could also use the built in 'now' javascript function for this variable

const myAge = currentYear - birthYear;
console.log(myAge); // * 30

// ****** using math operations for CONCATENATION

let myFirstName = "Chris";
let lastName = "Campbell";

console.log(myFirstName + " " + lastName); // * Chris Campbell

//  *************************** ASSIGNMENT OPERATORS

// * the '=' sign is the assignment operator

let x = 10 + 5;
console.log(x); // * 15
x += 10;
console.log(x); // * 25. Reads as previous value of x + 10
x *= 4;
console.log(x); // * 100. Reads as previous value of x * 4
x /= 2;
console.log(x); // * 50. Reads as previous value of x / 2
x++;
console.log(x); // * 51. Reads as previous value of x + 1
x--;
console.log(x); // * 50. Reads as previous value of x - 1

// *************************** COMPARISON OPERATORS (used to create boolean values)

let ageSarah = 37;
let ageSusan = 24;

console.log(ageSarah > ageSusan); // * true - Sarah is older than Susan

// *** Other comparison operators:
//  * > greater than
//  * < less than
//  * >= greater than or equal to
//  * <= less that or equal to
// *** all of these are used to make comparisons between values or their variable containers
// *** These comparisons are great for making logical program movements and conditionals

// *************************************** OPERATOR PRECEDENCE (think order of operations)

// ********* SEE THE MDN JAVASCRIPT OPERATOR PRECEDENCE CHART ********* //

// ***** Grouping with paranthesis has the highest precendent and always execute first
// ***** Math operators have higher precedent than comparison and assigment operators

// *** different operators execute right-to-left and others execute right-to-left
