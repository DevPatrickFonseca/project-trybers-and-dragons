import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  constructor(    
    private _lifePoints = 85,
    private _strength = 65,
  ) {}

  get lifePoints(): number {
    return this._lifePoints;
  }
  
  get strength(): number {
    return this._strength;
  }
  
  receiveDamage(attackPoints: number): number {
    const damageReceived = attackPoints;
    
    if ((this._lifePoints - damageReceived) <= 0) {
      this._lifePoints = -1;
    } else {
      this._lifePoints -= damageReceived;
    }

    return this._lifePoints;
  }
  
  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;