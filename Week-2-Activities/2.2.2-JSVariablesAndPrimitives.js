// create a variable called "name" that references a string
let nameFirst = "Hayden";

// create a variable called "favoriteSong" that references a string
let favoriteSong = "Gansta's Paradise";
console.log(favoriteSong);

// create a variable called "wage" that references a number
let wage = 13.5;

// create a variable called "age" that references a number
let age = 23;

// create a variable called "onlyChild" that references a boolean
let onlyChilde = false;

// create a variable called "satisfied" that references a boolean
let satisfied = false;

// create a variable called "favoriteThing" that references ANY primitive value // print the data type of "favoriteThing"
let favoriteThing = "Video Games";

//  You heard a new song that became your favorite. // Reassign the variable "favoriteSong"

favoriteSong = "Black Beetles";

//  You no longer like the type of data stored in "favoriteThing" // Reassign "favoriteThing" to a different primitive data type and print its type
favoriteSong = false;

// Happy Birthday! // Reassign "age" to a new value

function birthday(){

console.log(`Happy Birthday ${nameFirst}, You are ${age+=1} years old!`)
};
birthday();


//  You got a big raise at work. // Reassign "wage" to a new value
function raise(){
  console.log("Congrats on your raise! You are now making $" + (wage += 3) + " an hour!");
  satisfied = true;
  console.log("Satisfied?:" + satisfied);
};
raise();

//  Your raise changed your job satisfaction. // Assign "satisfied" to true

// use "console.log()" and "+" to print a sentence that includes two variables
