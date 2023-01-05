import http from 'http';
import { UserInterface } from '../intefaces/interfaces';
import {v4 as uuidv4} from "uuid";

export const router = (req:any, res: http.ServerResponse, users: UserInterface[], userId: string ) => {
  switch (req.url) {
    case `/api/users`:
      switch (req.method) {
        case 'GET':
          res.writeHead(200, {
            'Content-type':' application/json'
          })
          res.end(JSON.stringify(users))
          break
        case 'POST':
            let body = '';
            req.on('data', (chunk: string) => body += chunk)
            req.on('end', () => {
              if(body) {
                req.body = JSON.parse(body)
              }
          res.writeHead(201, {
            'Content-type':' application/json'
          })
            const user: UserInterface = {"id": uuidv4(), ...req.body}
            users.push(user);
            res.end(JSON.stringify(user)) 
          })
          break;
          default:
            res.end('no method users')
      }
      break
    case `/api/user/${userId}`:
      const user = users.filter((user) => user.id === userId)
      switch (req.method) {
        case 'GET':
          res.writeHead(200, {
            'Content-type':' application/json'
          })
          res.end(JSON.stringify(user))
          break
        case 'PUT':
          res.writeHead(200, {
            'Content-type':' application/json'
          })
          const userUpdated = {...user, ...req.body}
          res.end(JSON.stringify(userUpdated))
          break
          case 'DELETE':
            res.writeHead(204, {
              'Content-type':' application/json'
            })
          users.forEach((user, index) => {
             if (user.id === userId) {
              users.splice(index, 1)
             }
            })
          res.end(JSON.stringify(users))
          break
          default:
            res.end('no method user')
      }
      break
      default:
        res.end('no path')
  }
}