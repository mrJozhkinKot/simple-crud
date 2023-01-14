import supertest from 'supertest';
import {server} from '../../src/app/server';


describe("Invalid Path", () => {
    describe("given invalid path", () => {      
        it("should respond with a 404 status code", async () => {
                const res = await supertest(server()).get(`/api/users123`)
                .set('Content-type',' application/json')
            expect(res.statusCode).toEqual(404);
        })
    })
})