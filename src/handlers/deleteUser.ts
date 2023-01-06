import http from 'http';
import { UserInterface } from '../intefaces/interfaces';
import { ERROR_USER, ERROR_USERID, SUCCESS_DELETE_USER } from '../service/messages';
import { messageLogger } from '../service/messageLogger';
import { validateUserId } from '../service/validateUserId';


export const deleteUser = async (req: http.IncomingMessage, res: http.ServerResponse, users: UserInterface[], userId: string) => {
  if (validateUserId (req)) {
    const user = users.filter((user) => user.id === userId)[0]
    if (user){ 
    users.forEach((user, index) => {
       if (user.id === userId) {
        users.splice(index, 1)
       }
      })
      messageLogger(res, 204, SUCCESS_DELETE_USER)
  } else {
    messageLogger(res, 404, ERROR_USER)
  }
  } else {
    messageLogger(res, 400, ERROR_USERID)
  }
}