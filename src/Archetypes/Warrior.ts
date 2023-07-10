import Archetype from './Archetype';

import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.instances += 1;
  }
  
  static createdArchetypeInstances(): number {
    return Warrior.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;