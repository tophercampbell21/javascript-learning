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
console.log(markHigherBMI); // ** false. In case number 1, Mark's BMI is less than John's

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
console.log(markHigherBMI); // ** true. In case number 2, Mark's BMI is greater than John's

/* 

Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:

§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

GOOD LUCK 

 */
