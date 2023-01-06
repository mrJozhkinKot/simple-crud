import http from 'http';

export const validateUserId = (req: http.IncomingMessage) => {
    const validUuid = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
    const reqSplited = req.url?.split('/') || [];
    const userId = reqSplited[reqSplited.length-1];
    if (userId.match(validUuid)) {
        return true;
    } else {
        return false;
    }
}