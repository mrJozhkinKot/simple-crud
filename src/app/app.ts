import * as http from 'http';
import { UserInterface } from '../intefaces/interfaces';
import { router } from './router';


  const users: UserInterface[]= [];
  const getUserId = (url: string | undefined) => {
    const urlParts = url? url.split('/'): [];
    const userid: string = urlParts[urlParts.length-1];
    return userid;
  }

  export const app = (port: number): void => {
    const server = http.createServer((req:http.IncomingMessage, res: http.ServerResponse) => {
    const userId = getUserId(req.url)
    router(req, res, users, userId)
  })
  server.listen(port, () => {
    console.log(`Server started on ${port}`)
  } )
  }
