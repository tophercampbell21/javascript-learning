// *** branch of computer science which uses true and false values to solve complex logical problems
// *** AND, OR, NOT values covered in this section

// *** Let's say there are multiple conditions that need to be true in order for a code block to run we'll use the AND operator (&&)
// * in this case, if both of the conditions don't return, true the entire statement will be false and a different code block will run
// * the condition comes back true ONLY when both conditions return true

// *** In the case where there are multiple conditions, but on;y one needs to be true in order for the whole statement to be true we use the OR operator (||)
// * even if one of the variables is false, no matter which one, the whole statement will be true
// * it's enough for one of the options to be true for the whole thing to be true

// *** The NOT operator inverts the true and false values
// * if one variable returns true, then the entire statement is false (depending on setup)
// * if one variable returns false, then the entire statement is true (depending on setup)

// * ------------------------------ LOGICAL OPERATORS EXAMPLES ------------------------------ *
let hasDriversLicense = true; // A
let hasGoodVision = true; // B

// **** AND EXAMPLE 1
console.log(hasDriversLicense && hasGoodVision); // true, since both of these are set to true

// * ------------------------------------------------------------ *
hasDriversLicense = true; // A2
hasGoodVision = false; // B2

// **** AND EXAMPLE 2
console.log(hasDriversLicense && hasGoodVision); // false, since one of these is set to false now

// **** OR EXAMPLE 1
console.log(hasDriversLicense || hasGoodVision); // true, since one of these is still true

// **** NOT EXAMPLE 1
console.log(!hasDriversLicense); // false, since the original true value has been inverted to false

// * ------------------------------------------------------------ *

if (hasDriversLicense && hasGoodVision) {
  console.log("You can drive");
} else {
  console.log("Someone else should drive"); // this one runs in this instance
}

hasDriversLicense = true; // A2
hasGoodVision = true; // B2

if (hasDriversLicense && hasGoodVision) {
  console.log("You can drive"); // this one runs in this instance
} else {
  console.log("Someone else should drive");
}

// * ------------------------------------------------------------ *
let isTired = true;

if (hasDriversLicense && hasGoodVision && isTired) {
  console.log("You shouldn't drive if you're tired"); // this one runs in this instance, since isTired is set to true
} else if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("If you aren't tired, you should be good to go.");
}

isTired = false;

if (hasDriversLicense && hasGoodVision && isTired) {
  console.log("You shouldn't drive if you're tired");
} else if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("If you aren't tired, you should be good to go."); // this one runs in this instance, since isTired is set to false now
}
