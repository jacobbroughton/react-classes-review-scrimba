// *Class basics

// * "Syntactic sugar" on top of setting up prototype chains manually

// * "Class fields" to initialize object properties (same for every object)

// * constructor() method to initialize dynamic object properties

// * You can "extend" from one class to another to access stuff from

class Character {
  // if you need to initialize values when creating the object
  // you must include a constructor
  constructor(initialHp = 100) {
    this.hp = 100;
  }

  // if you will always initialize an instance with a hard-coded
  // value, you can declare that without a constructor
  alive = true;

  // i can refer to the object calling this method as 'this'
  // and therefore can access and update the properties of
  // this object with, e.g.: `this.hp = ...`
  updateHp(amount) {
    const calc = this.hp + amount;
    if (calc <= 0) {
      // trying to avoid any character
      // having a negative amount of HP
      this.hp = 0;
      this.alive = false;
    } else {
      this.hp = calc;
    }
  }
}

// const char = new Character()
// console.log(char.hp)
// char.updateHp(100)
// console.log(char.hp)

class Enemy extends Character {
  constructor(hp, lootToDrop) {
    super(hp);
    this.lootToDrop = lootToDrop
  }
}

class Hero extends Character {
  constructor(hp) {
    super(hp)
  }
  
  inventory = []

  defeatEnemy(enemy) {
    if (enemy.lootToDrop) {
      this.inventory.push(enemy.lootToDrop)
    }
    enemy.updateHp(enemy.hp * -1)
  }
}

const enemy = new Enemy(100, "Sword of a Thousand Truths")
const me = new Hero(100)

me.defeatEnemy(enemy)