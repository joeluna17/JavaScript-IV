/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
=== GameObject ===
* createdAt
* name
* dimensions (These represent the character's size in the video game)
* destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// function GameObject(obj){
// this.createdAt = obj.createdAt
// this.name = obj.name
// this.dimensions = obj.dimensions
// }
// GameObject.prototype.destroy = function (){
// return `${this.name} has been removed from video game.`
// }

class GameObject{
    constructor(obj){
      this.createdAt = obj.createdAt
      this.name = obj.name
      this.dimensions = obj.dimensions
    }

    destroy(){
        return `${this.name} has been removed from video game.`
    }
}



/*
=== CharacterStats ===
* healthPoints
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/

// function CharacterStats(obj){
// GameObject.call(this, obj)         //Note to self, this part does somthing like "Class ChildClass: ParentClass" which just a inheritance sytnax in JS
// this.healthPoints = obj.healthPoints
// }
// CharacterStats.prototype = Object.create(GameObject.prototype) //!! IMPORTANT - note to self, the placement of this line of code must come before the function prototype below. If you do not put it right after the constructor function we cannot gain access to the Objects methods through inheritance.

// CharacterStats.prototype.takeDamage = function (){
// return `${this.name} took damage`
// }


class CharacterStats extends GameObject{
    constructor(obj){
        super(obj)
        this.healthPoints = obj.healthPoints
    }   
    takeDamage(){
        return `${this.name} took damage`
    }
}


/*
=== Humanoid (Having an appearance or character resembling that of a human.) ===
* team
* weapons
* language
* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/

// function Humanoid(obj){
// CharacterStats.call(this, obj)
// this.team = obj.team
// this.weapons = obj.weapons
// this.language = obj.language
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype)

// Humanoid.prototype.greet = function () {
//   return `${this.name} offers a greeting in ${this.language}`
// }

class Humanoid extends CharacterStats{
    constructor(obj){
        super(obj)
        this.team = obj.team
        this.weapons = obj.weapons
        this.language = obj.language
        
    }
    greet(){ 
        return `${this.name} offers a greeting in ${this.language}`
    }

}


/*
* Inheritance chain: GameObject -> CharacterStats -> Humanoid
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
* Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

class Hero extends Humanoid{
    constructor(obj){
    super(obj)
     this.attakStrength = obj.attakStrength
    }
 
    attack(character){
      if(character.healthPoints > 0){
          character.healthPoints -= this.attakStrength

          if(character.healthPoints > 0) {
          console.log(`${this.name} has attacked ${character.name} who's life points are now ${character.healthPoints}`)
          } 
          else if  (character.healthPoints <= 0)  {
            console.log(character.destroy())
          }
        }
        else   {
          console.log("Cannot Destroy a Ghost!")
        }
}
}

class Villain extends Hero{
    constructor(obj){
        super(obj)
    }
}

const heroOne = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 5,
    width: 2,
    height: 4,
  },
  healthPoints: 50,
  name: 'Ravens Thorn',
  team: 'Kigdom of the sky',
  weapons: [
    'Sword',
    'Magic Bomb',
  ],
  language: 'Sumarian',
  attakStrength: 10

})


const villainOne = new Villain({

  createdAt: new Date(),
  dimensions: {
    length: 10,
    width: 5,
    height: 8,
  },
  healthPoints: 50,
  name: 'Seeker',
  team: 'Dark Cave of Corrinth',
  weapons: [
    'Dark Staff of Deep',
    'Gaze Piercing Steel',
  ],
  language: 'Language of the Deep',
  attakStrength: 10
})


heroOne.attack(villainOne)
villainOne.attack(heroOne)
heroOne.attack(villainOne)
villainOne.attack(heroOne)
villainOne.attack(heroOne)
villainOne.attack(heroOne)
heroOne.attack(villainOne)
heroOne.attack(villainOne)
heroOne.attack(villainOne) // Our Hero Wins!!
heroOne.attack(villainOne) 
