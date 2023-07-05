class Animal {
  constructor(species) {
    this.species = species;
  }
  getSpecies() {
    return this.species;
  }
  makeSound() {
    console.log("Some sound");
  }
}
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

