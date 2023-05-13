// *** FALSY VALUES = values that are not fgalse at the moment but will be when we try to convert them to a boolean
// *** 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // * False
console.log(Boolean(undefined)); // * False
console.log(Boolean("")); // * False
console.log(Boolean(null)); // * False
console.log(Boolean(NaN)); // * False
console.log(Boolean("Chris")); // * true

// *:*:*:*:*:*:*:* 0 EXAMPLE
let money = 0;

if (money) {
  console.log("You've got money");
} else {
  console.log("You've got no money - broke bitch");
}
// *** logs "You've got no money - broke bitch"
// *** this happens because money is equal to 0 and in the logical context of an if/else statement the
// * function is essentially running Boolean(money) to check the condition. Since it's 0, it returned false
// * therefore the else code block ran

money = 110;

if (money) {
  console.log("You've got money");
} else {
  console.log("You've got no money - broke bitch");
}
// *** logs "You've got money"

// *:*:*:*:*:*:*:* UNDEFINED EXAMPLE
let height;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is not defined");
}
// *** logs "Height is not defined" because the variable height has no value attributed to it and is therefore undefined
// *** You couldn't set height = to 0 for obvious reasons. Even though the variable is technically defined, it's
// * defined in a falsy way still
