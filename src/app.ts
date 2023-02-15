import express from 'express';
import carRoutes from './Routes/cars';
import motorcycleRoutes from './Routes/Motorcycles';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(motorcycleRoutes);

export default app;
