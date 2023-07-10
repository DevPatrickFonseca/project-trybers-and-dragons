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

    const p1 = this._playerOne.lifePoints;
    const p2 = this._playerTwo.lifePoints;

    while (p1 !== -1 && p2 !== -1) {
      if (attacker === 1) {
        this._playerOne.attack(this._playerTwo); attacker = 2;
      } else {
        this._playerTwo.attack(this._playerOne); attacker = 1;
      }
    }
    return super.fight();
  }
}

export default PVP;
