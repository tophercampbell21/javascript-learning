// **********************************************
// *************** VARIABLE TYPES ***************
// **********************************************

const constantVariableTypes =
  "Variables which values CANNOT be changed later on";
// *** These values don't change and can't be redeclared or reassigned or declared with empty values
// * use these as often as possible

let letVariableTypes = "Variables which values CAN be changed later on";
// *** Used when you know you're going to change the value later on in the project and when you're wanting o declare empty variables
// *** let is block scoped (more on this later)
var varVariableTypes =
  "The old school way of declaring variables that is becoming less and less used";
// *** similar to the let variable type but they are pretty different (more later)
// *** var is function scoped (more on this later)

// *** with Javascript it isn't required to declare variables but this is bad practice and shouldn't be done
