import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarsODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Cars');
  }

  public async getAllCars(): Promise<ICar[]> {
    return this.model.find({});
  }
  
  public async findById(_id: string): Promise<ICar | null> {
    const findId = await this.model.findOne({ _id });
    return findId;
  }
}