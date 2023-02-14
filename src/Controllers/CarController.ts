import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarsService from '../Services/CarsService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsService();
  }

  public async create() {
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = this.req.body;

    const car: ICar = {
      model, 
      year, 
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty,
    };

    try {
      const newCar = await this.service.createCars(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
}