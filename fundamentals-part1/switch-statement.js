// *** An alternative way of writing a complicated if/else statement when we want to compare one value to multiple different options
// *** The syntax for the switch statement is a little unorthodox compared to the rest of Javascript but it's just the way it was created

const day = "monday";

switch (day) {
  case "monday": // day === 'monday' ? run the following code until break : if not, move on to the next case
    console.log("Do something in the case where it's Monday");
    break;
  case "tuesday": // day === 'monday' ? run the following code until break : if not, move on to the next case
    console.log("Do something in the case where it's Tuesday");
    break;
  case "wednesday":
  case "thursday": // day === 'wednesday or thursday' ? run the following code until break : if not, move on to the next case
    console.log("Do something in the case where it's Wednesday or Thursday");
    break;
  case "friday": // day === 'friday' ? run the following code until break : if not, move on to the next case
    console.log("Do something in the case where it's Friday");
    break;
  case "saturday": // day === 'saturday' ? run the following code until break : if not, move on to the next case
    console.log("Do something in the case where it's Saturday");
    break;
  case "sunday": // day === 'sunday' ? run the following code until break : if not, move on to the next case
    console.log("Do something in the case where it's Sunday");
    break;
  default: // essentially the 'else' block of an if/else statement
    console.log(
      "Run this code in the situation where none of the above cases apply for whatever reason"
    );
}

// **** Without the 'break' code, the code will run until it reaches a break or it reaches the end of the switch statement until the default
// *** You have to tell a switch statement when it needs to stop explicitly
// *** This runs a 'strict equaity comparision' until it finds a true so that's really what it's made for

// *------------- What this looks like as an if/else statement -------------* //

if (day === "monday") {
  console.log("Do something in the case where it's Monday");
} else if (day === "tuesday") {
  console.log("Do something in the case where it's Tuesday");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Do something in the case where it's Wednesday or Thursday");
} else if (day === "friday") {
  console.log("Do something in the case where it's Friday");
} else if (day === "saturday") {
  console.log("Do something in the case where it's Saturday");
} else if (day === "sunday") {
  console.log("Do something in the case where it's Sunday");
} else {
  console.log(
    "Run this code in the situation where none of the above cases apply for whatever reason"
  );
}

// *** the switch statement may be easier to read for some but it's less and less used. It's a personal preference
