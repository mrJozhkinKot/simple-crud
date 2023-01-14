import supertest from 'supertest';
import {server} from '../../src/app/server';


describe("GET/users", () => {
    describe("given a valid user ID", () => {      
        it("should respond with a 404 status code", async () => {
            const userID = '123e4567-e89b-12d3-a456-426655440000'
                const res = await supertest(server()).get(`/api/user/${userID}`)
                .set('Content-type',' application/json')
            expect(res.statusCode).toEqual(404);
        })
    })
    describe("given a not valid user ID", () => {      
        it("should respond with a 400 status code", async () => {
            const userID = '12345'
                const res = await supertest(server()).get(`/api/user/${userID}`)
                .set('Content-type',' application/json')
            expect(res.statusCode).toEqual(400);
        })
    })
})


