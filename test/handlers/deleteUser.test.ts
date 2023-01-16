import supertest from 'supertest';
import {server} from '../../src/app/server';


describe("DELETE/users/${userId}", () => {
    describe("delete user ID with valid id", () => {      
        it("should respond with a 404 status code", async () => {
            const userID = '123e4567-e89b-12d3-a456-426655440000'
            const res = await supertest(server()).delete(`/api/users/${userID}`)
            expect(res.statusCode).toEqual(404);
        })
    })
    describe("delete user ID with not valid id", () => {      
        it("should respond with a 400 status code", async () => {
            const userID = '12345'
            const res = await supertest(server()).delete(`/api/users/${userID}`)
            expect(res.statusCode).toEqual(400);
        })
    })
})


