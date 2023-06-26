class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("The animal makes a sound");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }

  makeSound() {
    this.purr();
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }

  makeSound() {
    this.bark();
  }
}
const cat = new Cat("Felis catus");
console.log(cat.species);  // Output: Felis catus
cat.makeSound();  // Output: purr

const dog = new Dog("Canis lupus familiaris");
console.log(dog.species);  // Output: Canis lupus familiaris
dog.makeSound();  // Output: woof



