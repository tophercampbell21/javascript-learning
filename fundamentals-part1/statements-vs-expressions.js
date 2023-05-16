// *** This is more of a high level overview of the difference between STATEMENTS and EXPRESSIONS
// *** serves to make this course more understandable going forward

// *** STATEMENTS = a bigger piece of code that's executed that doesn't produce a value on it's own
// * statements are like the 'complete sentences' to the expressions 'words'
// * statements are complete and executable blocks of code
// * anything that ends in the ; is a statement
/* ***
if (23 > 10) {
  console.log("something")
} 
*** this is a statement made up of expressionsn  */

// *** EXPRESSIONS = a piece of code that produces a value (3 + 4)
// * 1991 is an expression, or true/false, or 1991 && true && !false

// ****************** Javascript expects statements and expressions in certain places and not others. For example:
// *** TEMPLATE LITERALS - you can only add expressions, not statements

console.log(`I'm ${2023 - 1993} years old.`); // 'I'm 30 years old, you can input expressions

// console.log(`I'm ${if(something = something) {do something;}} blah blah blah`) // ERROR: Unexpected token. you can't input statements
