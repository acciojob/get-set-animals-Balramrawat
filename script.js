
class Animal {
	constructor(speices){
		this._speices=speices
	}
	get speices(){
		return this._speices;
	}
	makeSound(){
		console.log(`this ${this._speices} make a sound`)
	}
	
}

class Dog extends Animal {
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr")
	}
}
let myDog=new dog("Golden Retriver")
console.log(myDog.speices)
myDog.makeSound()
myDog.bark()

let myCat=new Cat("siamese")
console.log(myCat.speices)
myCat.makeSound()
myCat.purr()


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;


