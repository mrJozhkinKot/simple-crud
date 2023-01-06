import http from 'http';
import { UserInterface } from '../intefaces/interfaces';
import { validateUserId } from '../service/validateUserId';
import { messageLogger } from '../service/messageLogger';
import { ERROR_USER } from '../service/messages';
import { ERROR_USERID } from '../service/messages';

export const getUser = async (req: http.IncomingMessage, res: http.ServerResponse, users: UserInterface[], userId: string) => {
  if (validateUserId(req)) {
    const user = users.filter((user) => user.id === userId)[0]
    if (user) {
      res.writeHead(200, {
      'Content-type':' application/json'
    })
    res.end(JSON.stringify(user))
  } else {
    messageLogger(res, 404, ERROR_USER)  
    }
  } else {
    messageLogger(res, 400, ERROR_USERID)
  }
}