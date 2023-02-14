import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

export default class CarsService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createCars(car: ICar) {
    const carsODM = new CarsODM();
    const newCar = await carsODM.createCar(car);
    return this.createCarDomain(newCar);
  }
}