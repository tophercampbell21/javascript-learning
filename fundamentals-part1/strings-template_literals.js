// ***** TEMPLATE LITERALS
// *** created using the backtick `` quotations
// *** add javascript elements like variables, functions, operations, etc with the ${...} with template literals
// *** write multiple line strings with this as well

const myFirstName1 = "Chris";
const job = "Real estate agent";
const birthYear1 = "1993";
const thisYear = 2023;

const me = `I'm ${myFirstName1}, my job is a ${job}, and I am ${
  thisYear - birthYear1
} years old.`;
console.log(me);
// *** returns 'I'm Chris, my job is a Real estate agent, and I am 30 years old.'

// *** The traditional way you'd have to write the string
// const me = "I'm " + myFirstName1 + ", my job is a " + job + ", and I am " + (thisYear - birthYear1) + " years old."

// **** Multiple Line Strings

// TRADITIONAL METHOD
console.log(
  "String with \n\
multiple \n\
lines."
);

// TEMPLATE LITERAL METHOD -- so much easier
console.log(`String
with multiple
lines.`);
