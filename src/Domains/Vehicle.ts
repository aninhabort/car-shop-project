import { IVehicle } from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(car: IVehicle) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status;
    this.buyValue = car.buyValue;
  }

  get getId(): string | undefined {
    return this.id;
  }
  set setId(value: string) {
    this.id = value;
  }

  get getModel(): string {
    return this.model;
  }
  set setModel(value: string) {
    this.model = value;
  }

  get getYear(): number {
    return this.year;
  }
  set SetYear(value: number) {
    this.year = value;
  }

  get getColor(): string {
    return this.color;
  }
  set setColor(value: string) {
    this.color = value;
  }

  get getStatus(): boolean | undefined {
    return this.status;
  }
  set setStatus(value: boolean) {
    this.status = value;
  }

  get getBuyValue(): number {
    return this.buyValue;
  }
  set setBuyValue(value: number) {
    this.buyValue = value;
  }
}