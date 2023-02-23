import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarsService from '../../../src/Services/CarsService';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

const cars: ICar[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: false,
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

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

const motorcycle: IMotorcycle = {
  id: '634852326b35b59438fbea2f',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

describe('Testar Services', function () {
  it('Criando novo carro com sucesso', async function () {
    const carOutput = new Car(car);
  
    sinon.stub(Model, 'create').resolves(carOutput);
  
    const service = new CarsService();
    const result = await service.createCars(car);
  
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Achando novo carro pelo id com sucesso', async function () {
    const carOutput = new Car(car);
  
    sinon.stub(Model, 'findOne').resolves(carOutput);
  
    const service = new CarsService();
    const result = await service.findById('634852326b35b59438fbea2f');
  
    expect(result).to.be.deep.equal(carOutput);
  });
    
  it('Achando carro por id invalido', async function () {
    const carOutput = new Car(car);
      
    sinon.stub(Model, 'findOne').resolves(carOutput);
      
    try {
      const service = new CarsService();
      await service.findById('secret');
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Car not found');
    }
  });
    
  it('Achando novo carro com sucesso', async function () {    
    sinon.stub(Model, 'find').resolves(cars);
    
    const service = new CarsService();
    const result = await service.getAllCars();
    
    expect(result).to.be.deep.equal(cars);
  });

  it('Criando novo motorcycle com sucesso', async function () {
    const motorcycleOutput = new Motorcycle(motorcycle);
  
    sinon.stub(Model, 'create').resolves(motorcycleOutput);
  
    const service = new MotorcycleService();
    const result = await service.createMotorcycle(motorcycle);
  
    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});