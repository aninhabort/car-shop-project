import express from 'express';
import carRoutes from './Routes/Cars';
import motorcycleRoutes from './Routes/Motorcycles';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(motorcycleRoutes);

export default app;
