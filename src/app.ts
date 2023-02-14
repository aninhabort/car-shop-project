import express from 'express';
import routes from './Routes/cars';

const app = express();
app.use(express.json());
app.use(routes);

export default app;
