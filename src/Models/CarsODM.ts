import { Schema, model, models, Model } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarsODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      id: { type: String, required: true },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Cars || model('Cars', this.schema);
  }

  public async createCar(value: ICar): Promise<ICar | null> {
    return this.model.create({ ...value });
  }
}