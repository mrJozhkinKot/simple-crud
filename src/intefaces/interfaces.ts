import http from 'http';

export interface UserInterface {
  id: string,
  username: string,
  age: number,
  hobbies: string[]
}

export interface RouterInterface {
  [path: string]: {
    'GET': (req: http.IncomingMessage, res: http.ServerResponse) => void,
    'POST'?: (req: http.IncomingMessage, res: http.ServerResponse) => void,
    'PUT'?: (req: http.IncomingMessage, res: http.ServerResponse) => void,
    'DELETE'?: (req: http.IncomingMessage, res: http.ServerResponse) => void,
  },
}
