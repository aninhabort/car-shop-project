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

  public get getDoorsQty(): number {
    return this.doorsQty;
  }
  public set setDoorsQty(value: number) {
    this.doorsQty = value;
  }

  public get getSeatsQty(): number {
    return this.seatsQty;
  }
  public set setSeatsQty(value: number) {
    this.seatsQty = value;
  }
}