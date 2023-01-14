import supertest from 'supertest';
import {server} from '../../src/app/server';


describe("GET/user/userID", () => {
    describe("given request for all users", () => {      
        it("should respond with a 404 status code", async () => {
                const res = await supertest(server()).get(`/api/users`)
                .set('Content-type',' application/json')
            expect(res.statusCode).toEqual(200);
            expect(res.text).toBe('[]')
        })
    })
})
