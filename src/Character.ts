import Fighter, { SimpleFighter } from './Fighter';

import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';

import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;

  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;

  private _energy: Energy;

  constructor(
    name: string,
    race?: Race,
    archetype?: Archetype,
  ) {
    this._dexterity = getRandomInt(1, 10);

    this._race = race || new Elf(name, this._dexterity);
    this._archetype = archetype || new Mage(name);

    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;

    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damageReceived = attackPoints - this._defense;

    if (damageReceived <= 0) { 
      return this._lifePoints; 
    } 

    if ((this._lifePoints - damageReceived) < 0) {
      this._lifePoints = -1;
    } else {
      this._lifePoints -= damageReceived;
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    const addPointsEarned = getRandomInt(1, 10);

    if (this._maxLifePoints + addPointsEarned > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints += addPointsEarned;
    }

    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);

    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._defense * 0.5);
  }
}

export default Character;
