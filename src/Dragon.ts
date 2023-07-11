import Monster from './Monster';

class Dragon extends Monster {
  constructor(lifePoints?: number) {
    super(lifePoints || 999);
  }
}

export default Dragon;
