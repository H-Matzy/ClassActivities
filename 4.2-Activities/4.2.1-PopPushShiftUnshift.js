const num = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popReturn = num.pop();
console.log(popReturn);
let popReturn2 = num.pop();
console.log(popReturn2);
console.log(num);

// remove each of the first two items with shift(), saving each item to a variable
let shiftReturn = num.shift();
let shiftReturn2 = num.shift();
console.log(shiftReturn);
console.log(shiftReturn2);
// use push and unshift to add the variables back to the array in numerical order, 0-6
num.push(shiftReturn, shiftReturn2);
console.log(num);
num.unshift(popReturn, popReturn2);
console.log(num);