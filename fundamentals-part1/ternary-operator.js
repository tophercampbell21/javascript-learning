// ****** THE CONDITION OPERATOR - TERNARY (like an if/else but in 1 line)

let age = 23;

age >= 18
  ? console.log("You're of age")
  : console.log(`You can't buy smokes just yet.`);

// **** This is essentially a single if/else statement
// **** This is a great way to declare a variable conditionally. For example:

const canDrink = age >= 21 ? "can drink" : "can't drink";
console.log(canDrink); // 'can drink' - since age = 23

// *--------- What this would look like as an if/else statement ---------* //

let canDrink2;
if (age >= 21) {
  canDrink2 = "can drink";
} else {
  canDrink2 = "can't drink";
}
console.log(canDrink2); // 'can drink' since age = 23
// *** you can see why the ternary operator is a huge upgrade and super useful

// *--------- Taking this further ---------* //
// *** The ternary operator is an EXPRESSION which means we can use it inside of a template literal!!!

console.log(
  `I like to drink ${age >= 21 ? "beer" : "water"} since I'm ${age} years old.`
); // 'I like to drink beer since I'm 23 years old.

age = 15;
console.log(
  `I like to drink ${age >= 21 ? "beer" : "water"} since I'm ${age} years old.`
); // 'I like to drink water since I'm 15 years old.
// **** This is an awesome coupling of two awesome Javascript tools for many different situations
// **** This operator is perfect for when we need a quick decision based on a simple condition and won't replace the if/else block for the more complex logical conditionals
