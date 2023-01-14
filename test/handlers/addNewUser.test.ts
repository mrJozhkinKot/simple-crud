import supertest from 'supertest';
import {server} from '../../src/app/server';


describe("POST/users", () => {
    describe("given a username, age and hobbies", () => {      
        it("should respond with a 201 status code", async () => {
                const res = await supertest(server()).post('/api/users')
                .set('Content-type',' application/json')
                .send({
                username: "John",
                age: "30",
                hobbies: ["basketball", "gym"]
            })
            expect(res.statusCode).toEqual(201);
        })
    })
    describe("given a not valid request", () => {      
        it("should respond with a 400 status code", async () => {
                const res = await supertest(server()).post('/api/users')
                .set('Content-type',' application/json')
                .send({
                username: "John",
                hobbies: ["basketball", "gym"]
            })
            expect(res.statusCode).toEqual(400);
        })
    })
})


