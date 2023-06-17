export default class Team {
  constructor() {
    this.characters = [
      {
        name: 'Зомби',
        type: 'Zombie',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Маг',
        type: 'Magician',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ];
    this.teamLength = 2;
  }

  * [Symbol.iterator]() {
    let count = 0;
    while (count < this.teamLength) {
      yield this.characters[count];
      count += 1;
    }
  }
}

const team = new Team();
for (const item of team) {
  console.log(item);
}
