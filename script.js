class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this._species} makes a sound`);
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

const myCat = new Cat("Siamese");
console.log(myCat.species); 
myCat.makeSound();
myCat.purr(); 

const myDog = new Dog("Golden Retriever");
console.log(myDog.species);
myDog.makeSound(); 
myDog.bark(); 




// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;


