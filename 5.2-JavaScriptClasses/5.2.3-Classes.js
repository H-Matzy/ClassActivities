// refactor your Animal function constructor and methods to use the class keyword
class Animal {
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.bio = `I am ${this.age} years old, my name is ${this.name}, and my weight is ${this.weight}!`;
  }
}
// extend the Animal class with a type of animal
// add some unique methods and properties to the class extension
class Chicken extends Animal {
  constructor(name, age, interests, weight) {
    super(name, age, interests, weight);
    this.weight = weight;
  }
  newBio() {
    console.log(`Bok Bok`);
  }
}

// create an instance of the class extension and call one of its methods

const loki = new Chicken("Loki", 2, "Seed");
loki.newBio();
console.log(loki.bio);
