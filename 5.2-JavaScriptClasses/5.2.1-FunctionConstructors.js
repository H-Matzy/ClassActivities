// create an object literal
const animal = {
  name: "Bjorn",
  age: 4,
  species: "Dog",
  color: "White"
};
console.log(animal.name);
// include a method that uses "this"
let barn = {
  age: "old",
  ageCheck() {
    console.log(this.name);
  }
};
console.log(barn.age);
// create a function in the global scope that prints "this"
function printsThis() {
  console.log("This is", this);
}
printsThis();
