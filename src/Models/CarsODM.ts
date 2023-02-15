import { Model, Schema, models, model } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarsODM {
  protected model: Model<ICar>;
  protected schema: Schema;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Cars', this.schema);
  }

  public async createCar(value: ICar): Promise<ICar> {
    return this.model.create({ ...value });
  }

  public async getAllCars(): Promise<ICar[]> {
    return this.model.find();
  }
}