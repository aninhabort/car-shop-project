import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async createMotorcycle(motocycle: IMotorcycle) {
    const motorcycleODM = new MotorcyclesODM();
    const newMotorcycle = await motorcycleODM.create(motocycle);
    const create = this.createMotorcycleDomain(newMotorcycle);

    if (create === null) {
      throw Error('Invalid motorcycle information');
    }
    return create;
  }
}