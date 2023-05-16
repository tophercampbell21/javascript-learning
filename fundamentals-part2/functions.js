// ***** ACTIVATING STRICT MODE ***** //
"use strict";

// ******** FUNCTIONS - ONE OF THE MOST ESSENTIAL BUILDING BLOCKS OF JAVASCRIPT CODE ********* //
// *** A function is a reusable chunk of code that we can use over and over

function logger() {
  // the function body
  console.log("This runs every time the function 'logger' is called");
}
// 'calling the function', 'running the function' of 'invoking the function'
logger();

// *------------ Passing data into a function and returning data from a function ------------* //

function fruitProcessor(apples, oranges) {
  // apples and oranges are called 'PARAMETERS' that will get defined when we call the function
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(5, 0); // What we pass in here are called 'ARGUMENTS'
// *** once the function is run with these arguments, what the function returns replaces it so we can store it in a variable and then use it

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // 'Juice with 5 apples and 0 oranges.'

const appleOrangeJuice = fruitProcessor(2, 5);
console.log(appleOrangeJuice); // 'Juice with 5 apples and 0 oranges.'

// *** DRY - Don't Repeat Yourselves
// * Functions are critical for not repeating yourself as you can write chunks of reusable code
// * Javascript has a ton of pre-built functions, some of which we've already used

// *--------------------------------------------------- Function Declarations vs Expressions ---------------------------------------------------------* //

// *** the functions above are DECLARATIONS - using the 'function' keyword beforehand

// * ---------------------------------------------------------------- * //
// *** FUNCTION DECLARATION

function calcAge1(birthYear) {
  return 2023 - birthYear;
}
let age = calcAge1(1993);
console.log(age); // 30

// * ---------------------------------------------------------------- * //
// *** FUNCTION EXPRESSION

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
age = calcAge2(1993);
console.log(age); // 30 also

// *** functions are just values, making them able to be stored into variables
// **** The big difference between the function declaration and the expressions is that with declarations you can call the function BEFORE they've been initialized
// * or they've been defined in the code.
// *** It's personal preference for the type of functions you wish to use but function expressions may be the best for structuring and for keeping everything in variables

// * ---------------------------------------------------------------- * //
// *** ARROW FUNCTIONS (ES6 Update)

// *** With a single parameter and a quick function code block, you can save a lot of time and effort with the following:
const calcAge3 = (birthYear) => 2023 - birthYear;
age = calcAge3(1993);
console.log(age); // 30 as well
// * essentially reads like an expression: this variable = (parameter) => do this with it
// * you don't need the {} or to ask for the return value explicitly. It will just come implicitly

// *** For more complex code you need the {} and to actually explicitly request the return value
const yearsUntilRetirement = (birthYear) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearsUntilRetirement(1993)); //35

// **** for multiple parameters:
const ageAndName = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  return `Hi there, ${firstName}. Since you're ${age}, you're allowed to drink beer.`;
};
console.log(ageAndName(1993, "Chris")); //Hi there, Chris. Since you're 30, you're allowed to drink beer.

// *** As the code get's more complex and requires more code block or more parameters and what not, it may not be best to rely on an arrow function

// ******************** NO 'THIS' keyword for arrow functions. More on this later.

// *** It may be best to keep arrow functions relegated to very short and simple blocks of reusable code

// *--------------------------------------------------- Functions Calling Other Functions ---------------------------------------------------------* //

// Let's go back to the fruit processor function we built earlier but in this case, the processor only works with fruits that have been cut already

function cutFruit(fruit) {
  return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruit(apples);
  const orangePieces = cutFruit(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  return juice;
}

console.log(fruitProcessor2(3, 4)); // 'Juice with 12 apple pieces and 16 orange pieces.'

// *** The way this works is like this:
//    * The 3 and the 4 passed into the function as arguments work the same and are attributed to the 'fruitProcessor2()' parameterd
//    * Where things change for them is in the way the function handles them.
//      * In this case they're being used inside of the 'fruitProcessor2()' function by being sent to the 'cutFruit()' functoin respectively
//      * They, through the 'fruitProcessor2()' function, become arguments for the cutFruit(fruit) function.
//    * What's returned from the 'cutFruit() function are stored back into the variables created in the 'fruitProcessor2()' function
//    * The 'fruitProcessor2()' function can then do what it needs to do to return it's value

// *** There's a simpler way to do this of course, but this is just an example. This also perfectly illustrates how to keep to DRY principles
