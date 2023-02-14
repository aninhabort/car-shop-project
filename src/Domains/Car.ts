import ICar from '../Interfaces/ICar';

export default class Car {
  private id: string | undefined;
  private model: string;
  private year: number;
  private color: string;
  private status: boolean;
  private buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  public get getId(): string | undefined {
    return this.id;
  }
  public set setId(value: string) {
    this.id = value;
  }

  public get getModel(): string {
    return this.model;
  }
  public set setModel(value: string) {
    this.model = value;
  }

  public get getYear(): number {
    return this.year;
  }
  public set SetYear(value: number) {
    this.year = value;
  }

  public get getColor(): string {
    return this.color;
  }
  public set setColor(value: string) {
    this.color = value;
  }

  public get getStatus(): boolean {
    return this.status;
  }
  public set setStatus(value: boolean) {
    this.status = value;
  }

  public get getBuyValue(): number {
    return this.buyValue;
  }
  public set setBuyValue(value: number) {
    this.buyValue = value;
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