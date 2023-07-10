import Archetype from './Archetype';

import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.instances += 1;
  }
  
  static createdArchetypeInstances(): number {
    return Ranger.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;