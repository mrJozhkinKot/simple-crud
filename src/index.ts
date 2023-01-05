import * as dotenv from 'dotenv';
dotenv.config();
// @ts-ignore
import { app } from './app/app.ts';

const port = Number(process.env.PORT) || 5050;

app(port);

