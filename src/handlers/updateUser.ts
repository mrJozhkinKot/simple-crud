import http from "http";
import { UserInterface } from "../intefaces/interfaces";
import { messageLogger } from "../service/messageLogger";
import { validateUserId } from "../service/validateUserId";
import { validateRequest } from "../service/validateRequest";
import { validateJSONParse } from "../service/validateJSONParse";
import {
  ERROR_BAD_REQUEST,
  ERROR_USER,
  ERROR_USERID,
} from "../service/messages";

export const updateUser = async (
  req: any,
  res: http.ServerResponse,
  users: UserInterface[],
  userId: string
) => {
  if (validateUserId(req)) {
    const user = users.filter((user) => user.id === userId)[0];
    if (user) {
      let body = "";
      req.on("data", (chunk: string) => (body += chunk));
      req.on("end", () => {
        if (body) {
          try {
            req.body = JSON.parse(body);
          } catch {}
        }
        if (validateJSONParse(body) && validateRequest(req.body)) {
          res.writeHead(200, {
            "Content-type": " application/json",
          });
          const userUpdated = { ...user, ...req.body };
          res.end(JSON.stringify(userUpdated));
          users.forEach((u, index) => {
            if (u.id === userUpdated.id) {
              users.splice(index, 1, userUpdated);
            }
          });
        } else {
          messageLogger(res, 400, ERROR_BAD_REQUEST);
        }
      });
    } else {
      messageLogger(res, 404, ERROR_USER);
    }
  } else {
    messageLogger(res, 400, ERROR_USERID);
  }
};
