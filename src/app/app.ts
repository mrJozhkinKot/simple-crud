import * as http from 'http';
import { UserInterface } from '../intefaces/interfaces';
import { server } from './server';


  export const app = (port: Number): void => {
  server().listen(port, () => {
    console.log(`Server started on ${port}`)
  } )
  }
