// ********** INSTRUCTIONS AT THE BOTTOM ************ //

// **** CASE 1

// *** Mark
let markHeight = 1.69;
let markWeight = 78;

// *** John
let johnHeight = 1.95;
let johnWeight = 92;

// ***** BMI Calculation

// * Mark
let markBMI = markWeight / markHeight ** 2;

// * John
let johnBMI = johnWeight / johnHeight ** 2;

// **** Comparison
let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI); // ** false. In case number 1, Mark's BMI is less than John's

if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI (${markBMI}) is greater than John's BMI (${johnBMI})`
  );
} else {
  console.log(
    `John's BMI (${johnBMI}) is greater than Mark's BMI (${markBMI})`
  );
}

// **** CASE 2

// *** Mark
markHeight = 1.88;
markWeight = 95;

// *** John
johnHeight = 1.76;
johnWeight = 85;

// ***** BMI Calculation

// * Mark
markBMI = markWeight / markHeight ** 2;

// * John
johnBMI = johnWeight / johnHeight ** 2;

// **** Comparison
markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI); // ** true. In case number 2, Mark's BMI is greater than John's

if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI (${markBMI}) is greater than John's BMI (${johnBMI})`
  );
} else {
  console.log(
    `John's BMI (${johnBMI}) is greater than Mark's BMI (${markBMI})`
  );
}

/* 

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 😉

GOOD LUCK 😀 

 */
