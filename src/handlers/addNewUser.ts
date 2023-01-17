import http from 'http';
import { UserInterface } from '../intefaces/interfaces';
import {v4 as uuidv4} from "uuid";
import { messageLogger } from '../service/messageLogger';
import { validateRequest } from '../service/validateRequest';
import { validateJSONParse } from '../service/validateJSONParse';
import { ERROR_BAD_REQUEST, ERROR_SERVER } from '../service/messages';

export const addNewUser = async (req: any, res: http.ServerResponse, users: UserInterface[]) => {
    let body = '';
    req.on('data', (chunk: string) => body += chunk)
    req.on('end', () => {
      if(body) {
        try {
          req.body = JSON.parse(body)
        } catch {}
      }
      if (validateJSONParse(body)) {
        if (validateRequest(req.body)) {
          res.writeHead(201, {
            'Content-type':' application/json'
          })
            const user: UserInterface = {"id": uuidv4(), ...req.body}
            users.push(user);
            res.end(JSON.stringify(user)) 
        } else {
             messageLogger(res, 400, ERROR_BAD_REQUEST);
        }
      } else {
        messageLogger(res, 500, ERROR_SERVER);
      }
  })
}