import http from 'http';
import { UserInterface } from '../intefaces/interfaces';

export const getAllUsers = async (res: http.ServerResponse, users: UserInterface[]) => {
    res.writeHead(200, {
        'Content-type':' application/json'
      })
      res.end(JSON.stringify(users))
}