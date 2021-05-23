// create a variable "timeOfDay" and assign it a string
let timeOfDay = "night";


// create a variable "greeting" that references a template literal
// use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `Good ${timeOfDay}!`

// print "greeting"
function checkTime() {
  console.log(greeting);
}
checkTime();

// create a new variable, but do not assign it a value
let emptyVariable = "";

// print the variable and its type
// what type should we expect?
console.log(typeof emptyVariable);

// assign the variable a value that indicates the variable is purposely blank
// what value should we assign?
function nullSector() {
emptyVariable = null;
console.log(emptyVariable);
}
nullSector();

// print the variable and its type again
// what type should we expect?
console.log(typeof emptyVariable);

// print "greeting" again
// will this line run?
console.log(greeting);

// try to print a variable that does not exist
// what should we expect to print in the CLI?
function errorGenerator() {
  console.log("The error is intended >:)")
  console.log(error);
}
errorGenerator();
