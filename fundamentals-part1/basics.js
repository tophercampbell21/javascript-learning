// *** JAVASCRIPT NEEDS TO BE ATTACHED TO AN HTML FILE

// // *** Basic starting example code
// let js = "Amazing";
// if (js) {
//   alert("JS is Amazing!");
// }

// *** This is a great way to inspect your code and to see what's going on with your code at different stages of the development
console.log(40 + 8 + 23 - 10);

// **********************************************
// ************ VALUES and VARIABLES ************
// **********************************************

// * All pieces of data are values. Numbers, text, booleans, arrays, objects, etc
// * One of the most important things in Javacript is Variables

let firstName = "Chris";

// *** 'firstName is the 'Variable' and "Chris" is the 'Value'. This is how you DECLARE variables

console.log(firstName);
// * You can use the variables to access their value's as needed. Think of them as a box that hold values
// * With 'let' varibles, you can change their values again later on in the code

// *** CAMELCASING - this is the convention to name Javascript variables with multiple words in them
// * the first word is lowercase, and the words after this will have their first letter capitalized
// * it's standard convention to not capitalize the first letter of a variable name
// * all caps variables are conventionally reserved for constants

// *** NAMING VARIABLES
//  * No starting a variable name with a number
//  * No special characters like #, %, &, etc (only letters, numbers(not at first), underscores and the $)
//  * you can't use prebuilt Javascript keywords as variable names like 'new' or 'function' - more later
//  * one thing to look out for is using 'name' by itself as a variable name
//  *** make variable names descriptive so that they are easy to read and understand what they're for

// **********************************************
// ***************** DATA TYPES *****************
// **********************************************

// **** Data types are either:
// * 1) OBJECTS  (More on objects later)
// * 2) PRIMITIVE form

// ********** THERE ARE 7 PRIMITIVE DATA TYPES

// * 1. Strings = text, sequence of characters
// * 2. Numbers = floating point numbers, used for decimals and integers
// * 3. Booleans = true or false (logical operators, conditionals, decision making)
// * 4. Undefined = empty valyue, value given to a variable that's not yet defined (let varName;)
// * 5. Null = empty value, used for different circumstances
// * 6. Symbol = not super useful, value that's unique and cannot be changed
// * 7. BigInt = integers that are too big to be represented by regular number data types

// *** You don't need to define what data type is given to a variable. This is a cool feature of JS that some other languages might not mimick
// * Called dynamic typing
// *** You can change the value types of variables later on in certain situations

// ***** How to find the type of data that's in a variable:

let exampleNumber = 23;

console.log(typeof true); // * boolean
console.log(typeof 23); // * number
console.log(typeof "Chris"); // * string
console.log(typeof exampleNumber); // * number

// ***Redefining this last variable

exampleNumber = "twelve";
// *** With 'let' defined variables we can redefine the value later on in the code without having to redeclare the variable with another let
console.log(exampleNumber, typeof exampleNumber); // * twelve

let chris;
console.log(chris, typeof chris); // * returns undefined 'undefined' since there was no value given to this variable
// *** undefined value types are nonexistent because they've yet to be defined YET

// *** null value types are objects (a JS error) and are nonexistent because the value cannot ever logically exist
