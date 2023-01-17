import http from 'http';
import { UserInterface } from '../intefaces/interfaces';

import { getAllUsers } from '../handlers/getAllUsers';
import { addNewUser } from '../handlers/addNewUser';
import { getUser } from '../handlers/getUser';
import { updateUser } from '../handlers/updateUser';
import { deleteUser } from '../handlers/deleteUser';
import { messageLogger } from '../service/messageLogger';
import { ERROR_ENDPOINT, ERROR_METHOD, ERROR_SERVER } from '../service/messages';

export const router = async (req:http.IncomingMessage, res: http.ServerResponse, users: UserInterface[], userId: string ) => {
  try {
    switch (req.url) {
      case `/api/users`:
        switch (req.method) {
          case 'GET': await getAllUsers(res, users)
            break
          case 'POST': await addNewUser(req, res, users)
            break;
            default:
              messageLogger(res, 404, ERROR_METHOD)
        }
        break
      case `/api/users/${userId}`:
        switch (req.method) {
          case 'GET': await getUser(req, res, users, userId)
            break
          case 'PUT': await updateUser(req, res, users, userId)
            break
          case 'DELETE': await deleteUser(req, res, users, userId)  
            break
            default:
              messageLogger(res, 404, ERROR_METHOD)
        }
        break
        default:
          messageLogger(res, 404, ERROR_ENDPOINT)
    }
  } catch (error) {
    messageLogger(res, 500, ERROR_SERVER)
  }

}
