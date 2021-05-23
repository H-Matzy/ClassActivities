// create a constant variable (const)
const nameFirst = "Hayden";
const nameLast = "Matz";
console.log(nameFirst);
console.log(nameLast);

// create a variable that can be reassigned (let)
let email = "haydenmatz97@gmail.com";
let numberCell = "(660)-542-4511";

// create three variables and assign them values of different data types (=)
let string = "this is some string data";
let number = 1337;
let boolean = true;
console.log(string);
console.log(number);
console.log(boolean);


// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof number);
console.log(typeof boolean);


// change the value referenced by a variable (dynamic typing)
number = 3.14;
boolean = false;
string = "this is some manipulated string data";
console.log(number);
console.log(false);
console.log(string);


// print the type of the variable you just changed (typeof)
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof string);


// create variables and give them values to complete the sentences that will print
// hello ,my name is _______ and I have been learning JavaScript for ______ months
//  which variables need to be created?
//  what type of data needs to go in each variable?
let studyTime = 8;

console.log("Hello, my name is " + nameFirst + " " + nameLast + " and I have been learning JavaScript for " + studyTime + " Months!");
