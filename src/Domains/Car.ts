import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  get getDoorsQty(): number {
    return this.doorsQty;
  }
  set setDoorsQty(value: number) {
    this.doorsQty = value;
  }

  get getSeatsQty(): number {
    return this.seatsQty;
  }
  set setSeatsQty(value: number) {
    this.seatsQty = value;
  }
}