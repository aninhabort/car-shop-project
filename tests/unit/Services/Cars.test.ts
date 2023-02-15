import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarsService from '../../../src/Services/CarsService';

describe('Testar CarsService', function () {
  it('Criando novo carro com sucesso', async function () {
    const car: ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carOutput = new Car(car);

    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarsService();
    const result = await service.createCars(car);

    expect(result).to.be.deep.equal(carOutput);
  });
});