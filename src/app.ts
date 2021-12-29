import env from 'dotenv';
import express from 'express';
import categoryRouter from './routes/categoryRoutes';
import router from './routes/itemRoutes';
import helmet from 'helmet';
import cors from 'cors';

env.config();

const app = express();
app.use(cors());
app.use(express.json())
app.use('/',router);
app.use('/',categoryRouter);
app.use(helmet());


export default app;