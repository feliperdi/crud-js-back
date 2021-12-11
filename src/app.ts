import env from 'dotenv';
import express from 'express';
import router from './routes/itemRoutes';


env.config();

const app = express();
app.use(express.json())
app.use('/',router);



export default app;