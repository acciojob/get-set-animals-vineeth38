class Animal {
  constructor(species) {
    this.species = species;
  }

  get species() {
    return this.species;
  }

  makeSound() {
    console.log("The animal makes a sound");
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
const cat = new Cat("Felis catus");
console.log(cat.species);  // Output: Felis catus
cat.makeSound();  // Output: purr

const dog = new Dog("Canis lupus familiaris");
console.log(dog.species);  // Output: Canis lupus familiaris
dog.makeSound();  // Output: woof
window.Animal=Animal;
window.Cat=Cat;
window.Dog=Dog;


