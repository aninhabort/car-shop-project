import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarsService from '../Services/CarsService';

export default class CarController {
  req: Request;
  res: Response;
  next: NextFunction;
  service: CarsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsService();
  }

  public async create() {
    const car: ICar = { ...this.req.body };

    try {
      const newCar = await this.service.createCars(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next({ message: 'Erro Interno' });
    }
  }
}