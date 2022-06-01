class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragonsInput) {
    let dragonArray = [];
    console.log(dragonsInput)

    for (let dragon of dragonsInput) {
      if (dragon instanceof Dragon) {
        dragonArray.push(dragon.name)
      }
    }

    return dragonArray;
  }

}


module.exports = Dragon;


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
