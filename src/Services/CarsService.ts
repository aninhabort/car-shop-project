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

  public async createCars(car: ICar): Promise<Car | null> {
    const carsODM = new CarsODM();
    const newCar = await carsODM.create(car);
    const create = this.createCarDomain(newCar);

    if (create === null) {
      throw Error('Invalid car information');
    }
    return create;
  }

  public async getAllCars(): Promise<(Car | null)[]> {
    const carsODM = new CarsODM();
    const allCars = await carsODM.getAllCars();
    const carsMap = allCars.map((item) => this.createCarDomain(item));
    return carsMap;
  }

  public async findById(id: string): Promise<Car | null> {
    const carsODM = new CarsODM();
    const findCarById = await carsODM.findById(id);
    return this.createCarDomain(findCarById);
  }
}