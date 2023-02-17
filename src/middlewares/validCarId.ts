import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';

const validIdCar = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    if (!isValidObjectId(id)) {
      return res.status(422).json({ message: 'Invalid mongo id' });
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default validIdCar;