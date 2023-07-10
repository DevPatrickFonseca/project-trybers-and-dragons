import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  constructor(
    protected _playerOne: Fighter,
    protected _playerTwo: Fighter,
  ) { 
    super(_playerOne); 
  }

  fight(): number {
    let attacker = 1;

    while (this.anyPlayerIsAlive()) {
      if (attacker === 1) {
        this._playerOne.attack(this._playerTwo); attacker = 2;
      } else {
        this._playerTwo.attack(this._playerOne); attacker = 1;
      }
    }
    return super.fight();
  }

  anyPlayerIsAlive(): boolean {
    return this._playerOne.lifePoints !== -1 
    && this._playerTwo.lifePoints !== -1;
  }
}

export default PVP;
