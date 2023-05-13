// *** CONVERSION -- Manually converting data types
// *** COERCION --When JS implicitly changes the data types behind the scenes for us

// ******** TYPE CONVERSION *********
let inputYear = "1991";

console.log(inputYear + 18);
// * This isn't going to add the way you think it will, it's going to concatenate these numbers and log "199118"
// ** we'll need to manually convert the inputYear string to a number so that the math function will take over

console.log(Number(inputYear) + 18);
// * logs '2001' -- in this case, the original variable is still a string, it's not changed.
// *** using the Number() function is an example of us using CONVERSION to manually convert the data to a number

//  ***** Functions for converting data examples
// * Number()
// * String()

// ******** TYPE COERCION *********
console.log("I am " + 23 + " years old."); // * "I am 23 years old"
// *** JS is going to automatically convert the number to a string so that this log will run successfully
// *** this works the same if you were to attribute the 23 to a variable
// *** You don't need to do 'String(23)' in this

console.log("23" - "10" - 3); // * 10
// *** JS is going to covert all of these to numbers (triggered by the - sign)

console.log("23" + "10" + 3); // * 36
// *** JS is going to covert all of these to strings and concatenate (triggered by the + sign)
//  ************** THIS IS AN IMPORTANT DISTINCTION TO MAKE

console.log("23" / "2"); // * 11.5
// *** The / triggers the data to be converted to numbers

console.log("4" * "8"); // * 32
// *** The * triggers the data to be converted to numbers

let n = "1" + 1; // * = 10, + turns the data to strings
n = n - 1; // * = 11, - turns the data to numbers
console.log(n);

console.log(2 + 3 + 4 + "5"); // * '95' (string)

console.log(10 - 4 - 3 - "4"); // * -1 (number)

console.log(10 + 2 - 4 + 6 - "12"); // * 2 (number) -- order of operations
