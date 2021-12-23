import env from 'dotenv';
import express from 'express';
import { AddressInfo } from 'net';
import categoryRouter from './routes/categoryRoutes';
import router from './routes/itemRoutes';
import helmet from 'helmet';

env.config();

const app = express();
app.use(express.json())
app.use('/',router);
app.use('/', categoryRouter);
app.use(helmet());

const server = app.listen(process.env.PORT || 3000, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running at http://localhost:${address.port}`);
    } else {
        console.log("Error while trying to start the server");
    }
})