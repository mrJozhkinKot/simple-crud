import * as http from 'http';
import { UserInterface } from '../intefaces/interfaces';
import { router } from './router';
import { getUserId } from '../service/getUserId';


  const users: UserInterface[]= [];

  export const server = (): http.Server => {
    return http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    const userId = getUserId(req.url)
    router(req, res, users, userId)
  })
  }
