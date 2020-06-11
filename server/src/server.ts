import express, { request, response } from 'express';
import cors from 'cors';
import path  from 'path';
import routes from './routes';
import {errors} from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json()); // Fazendo com que o express entenda o formato JSON
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'itemsImages')));

app.use(errors());

app.listen(3333);