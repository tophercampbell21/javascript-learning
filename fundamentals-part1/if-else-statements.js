// *** Check to see is someone is old enough for a driver's license
const age = 19;
const isOldEnough = age >= 18;

// *** The following is called the "Control Structure"
if (isOldEnough) {
  console.log("You're old enough for a driver's license 😁");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Sorry, you're not old enough yet. 😒 You'll have to way another ${yearsLeft}`
  );
}
// *** logs "You're old enough for a driver's license"
// *** For example, if the age was set to 15 the log would return:
// * "Sorry, you're not old enough yet. You'll have to way another 3 years."

// *** Another Example

const birthYear = 1993;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
// *** The variables inside of the if/else code blocks aren't accessible outside of the blocks without help.
// *** That's why we pre-defined the varibale first and then ran the if/else.
