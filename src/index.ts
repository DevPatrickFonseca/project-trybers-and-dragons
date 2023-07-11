import { Mage, Ranger, Warrior } from './Archetypes';
import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import { Dwarf, Elf, Orc } from './Races';
import getRandomInt from './utils';

// Players
const orc = new Orc('Schwarzenegger the Destroyer', getRandomInt(1, 10));
const warrior = new Warrior(orc.name);
const player1 = new Character(orc.name, orc, warrior);

const dwarf = new Dwarf('Einstein the Wise', getRandomInt(1, 10));
const mage = new Mage(dwarf.name);
const player2 = new Character(dwarf.name, dwarf, mage);

const elf = new Elf('Senna the Champion', getRandomInt(1, 10));
const ranger = new Ranger(elf.name);
const player3 = new Character(elf.name, elf, ranger);

// Player - LevelUp
const numLevelUps = 5;

for (let index = 0; index < numLevelUps; index += 1) {
  player1.levelUp();
}

// Monsters
const monster1 = new Monster();
const monster2 = new Dragon();

// Game mode PVP
const pvp = new PVP(player2, player3);

// Game mode PVE
const pve = new PVE(player1, [monster1, monster2]);

// Ready for Battle
const runBattles = (battlesArray: Battle[]) => {
  battlesArray.map((battle) => battle.fight());
};

export { player1, player2, player3 };
export { monster1, monster2 };
export { pvp, pve };
export { runBattles };