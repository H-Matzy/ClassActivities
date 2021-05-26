// create a function constructor that works as a template for an Animal
// include properties for name, type, weight, etc.
function Animal(name, type, weight) {
  this.name = name;
  this.type = type;
  this.weight = weight;
  this.bio = `I am a ${this.type}, my name is ${this.name}, and my weight is ${this.weight}!`;
}
// create a new instance on an Animal
const chicken = new Animal("Bok", "Chicken", "2lbs");
console.log(chicken);
// add methods to the Animal prototype
Animal.prototype.adoptPhrase = function() {
  console.log(`Hi, my name is ${this.name}, and I am a ${this.type}!`);
};
chicken.adoptPhrase();
// attach a method directly to the Animal instance that "overwrites" a prototype method
chicken.adoptPhrase = function() {
  console.log("Bok Bok");
};
chicken.adoptPhrase();
