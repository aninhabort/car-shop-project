import { Router } from 'express';
import CarController from '../Controllers/CarController';
import validIdCar from '../middlewares/validCarId';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).create());

routes.get('/cars', (req, res, next) => new CarController(req, res, next).getAll());

routes.get(
  '/cars/:id', 
  validIdCar, 
  (req, res, next) => new CarController(req, res, next).findById(),
);

routes.put(
  '/cars/:id', 
  validIdCar,
  (req, res, next) => new CarController(req, res, next).updateCar(),
);

export default routes;