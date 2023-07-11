import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  constructor(
    protected _player: Fighter,
    protected _enemies: SimpleFighter[],
  ) { 
    super(_player); 
  }

  fight(): number {
    let attacker = 1;

    const enemyIsAlive = this._enemies
      .find((enemy) => enemy.lifePoints !== -1);

    while (this.anyIsAlive()) {
      if (attacker === 1) {
        this._player.attack(enemyIsAlive as SimpleFighter); attacker = 2;
      } else {
        enemyIsAlive?.attack(this._player); attacker = 1;
      }
    }
    return super.fight();
  }

  anyIsAlive(): boolean {
    return this._player.lifePoints !== -1 
    && this._enemies.every((enemy) => enemy.lifePoints !== -1);
  }
}

export default PVE;
