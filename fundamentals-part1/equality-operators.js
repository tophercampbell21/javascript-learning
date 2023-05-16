const age = 18;

if (age === 18)
  console.log("You're officially an adult in the eyes of the government"); // * true (stritly AND loosly equal)
// * You don't need to write the whole {} block if it's only one line (if) statement code

// *** === operators are going to return a boolean value. In order for it to return true both sides must be EXACTLY the same
// * this equality operator DOES NOT perform type coercion, the values must be EXACTLY the same
// * this is known as the STRICT equalty operator

// ******* if age = "18" the above code would return false

// *** The == operator is also going to return a boolean value except it's not as strict
// * This operator WILL perform type coercion, the values won't need to be exactly the same
// * This is known as the LOOSE equality operator

if (age == 18)
  console.log("You're officially an adult in the eyes of the government"); // * true (loosely equal)

// *** the single = is an 'assignment' operator, not a 'comparison' operator

// * For the most part you want to use the === instead of relying on the ==. To do this, always do the type conversion manually if you need it

let favorite = prompt("What's your favorite number?");
// *** I guess prompts by default return a string data value
console.log(typeof favorite); // * string

if (favorite == 23) {
  console.log("23 is a really cool number");
}
// *** with this, since we're running the loose equality operation, this will return true and run that code block

if (favorite === 23) {
  console.log("23 is a really cool number");
} else console.log("Wrong Number");
// *** since we're running the strict equality operation, this will return false since 23 doesn't === '23'
// *** so with this we need to change the prompt to a number

favorite = Number(prompt("What's your favorite number?"));

if (favorite === 23) {
  console.log("23 is a really cool number");
}
// *|||||||| This is the proper way to work with equality operators. Do the type conversion upfront so you can rely on the strict equality operator

// * ------------------------ The Full if/else Code Block Example ----------------------------- *
if (favorite === 23) {
  console.log("23 is a really cool number");
} else if (favorite === 6) {
  console.log("6 is also a cool number");
} else {
  console.log("Wrong number");
}

// *** This allows you to layer conditions to add more logic to the code so the right code is executed determined by input or whatever

// * ------------------------ THE NOT EQUAL EXAMPLES ----------------------------- *
if (favorite !== 23) console.log("Wrong number");
// *** This is the strict version of the NOT EQUAL operator vs the loose '!='
