class Animal {
	constructor(species){
		this.species = species;
		getSpecies(){
			return this.species;
		}
		makeSound(){
			console.log("sound")
		}
	}
}



class Cat extends Animal {
	bark(){
		console.log("purr");
	}
}
class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;


