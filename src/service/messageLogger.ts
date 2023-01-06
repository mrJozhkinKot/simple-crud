import { ServerResponse } from 'http';

export const messageLogger = (res: ServerResponse, status: number, message: string) => {
    res.statusCode = status;
    res.end(message);
}