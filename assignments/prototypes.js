/*
  Object oriented design is commonly used in video games.  
  //For this part of the assignment you will be implementing several constructor 
  //functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  
  //Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined 
  //in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(object) {
  this.createdAt = object.createdAt;
  this.dimensions = object.dimensions;
  }

  GameObject.prototype.destroy = function() {
    return `${this.name} was removed from the game.`;
  };



/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(gameStats) {
  GameObject.call(this, gameStats);
  this.healthPoints = gameStats.healthPoints;
  this.name = gameStats.name;

}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;

};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid (gameHumanoid) {
  this.team = gameHumanoid.team;
  this.weapons = gameHumanoid.weapons;
  this.language = gameHumanoid.language;

  CharacterStats.call(this, gameHumanoid);
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;


};

 
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


// function Villian(gameVillian) {
 

// };

// make villian/Hero constructor 
// inherit humanoid constructor
// give both methods to remove health healthPoints
// destruction of health if gets below 0
// make two new objects
// have them fight with methods

function Villian(gameVillian) {
  Humanoid.call(this, gameVillian);

}

Villian.prototype = Object.create(GameObject.prototype);

Villian.prototype.takeDamage = function() {
  return `${this.name} took damage.`;

};

// function Hero(gameHero) {

// };

function Hero(gameHero) {
  Humanoid.call(this, gameHero);

}

Hero.prototype = Object.create(GameObject.prototype);

Hero.prototype.takeDamage = function() {
  return `${this.name} took damage.`;

};

const joker = new Villan({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 3,
  name: 'Joker',
  team: 'Evil',
  weapons: [
    'Potato Peeler',
  ],
  language: 'English',
});

const batman = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 20,
  name: 'Batman',
  team: 'Good',
  weapons: [
    'Batarang',
  ],
  language: 'English',
});





