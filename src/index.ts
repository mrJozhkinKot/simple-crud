import * as dotenv from 'dotenv';
dotenv.config();
import { app } from './app/app';

const port = Number(process.env.PORT) || 5050;

app(port);

