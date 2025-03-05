//complete this code
class Animal {
	constructor(speices){
		this._speices=speices
	}
	get speices(){
		return this._speices;
	}
	makesound(){
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

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
