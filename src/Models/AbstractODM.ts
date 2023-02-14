import {
  Model,
  models,
  Schema,
  model,
} from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async createCar(value: T): Promise<T> {
    const newCar = await this.model.create({ ...value });
    return newCar;
  }
}