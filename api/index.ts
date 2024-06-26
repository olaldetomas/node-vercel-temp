import bodyParser from 'body-parser';
import express from 'express';
import { errorHandler } from './middleware/errorHandler';
import { routes } from './routes';

const app = express();

app.use(bodyParser.json());
app.use('/', routes);
app.use(errorHandler);

export default app;
