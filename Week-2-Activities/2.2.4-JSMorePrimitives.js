// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let string = 'string';
let number = 10;
let boolean = true;
let intentionalBlank = "null";
let definedNot = "";

let arr1 = [string, number, boolean, intentionalBlank, definedNot]
function rollCall(arr){
  for( var i=0; i < arr.length; i++) {
console.log(typeof arr[i])};}
rollCall(arr1);

console.log("visual break");


// print the type of each variable in this order:
// string, number, boolean, undefined, null


// create a variable that references a template literal
// inside the template literal, use two variables
let templateLiteral = `My favorite number is ${number}`;
console.log(templateLiteral);

// reassign the value of the variable that references "null"
intentionalBlank = "Blank";

// print the value and its type
console.log(intentionalBlank);
console.log(typeof intentionalBlank);

// print a variable that causes a ReferenceError

// alter the previous line to no longer cause a ReferenceError
console.log(string);
