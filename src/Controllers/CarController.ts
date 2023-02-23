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
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.createCars(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    const getAllCars = await this.service.getAllCars();
    return this.res.status(200).json(getAllCars);
  }

  public async findById() {
    const { id } = this.req.params;
    
    try {
      const car = await this.service.findById(id);
  
      if (!car) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateCar() {
    const { body } = this.req;
    const { id } = this.req.params;
    try {
      const update = await this.service.updateCar(body, id);

      if (!update) {
        return this.res.status(404).json({ message: 'Car not found' });
      }

      return this.res.status(200).json(update);
    } catch (error) {
      this.next(error);
    }
  }
}