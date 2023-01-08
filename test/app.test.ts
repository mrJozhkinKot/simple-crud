import supertest from 'supertest';
import {server} from '../src/app/server';

describe("POST/users", () => {
    describe("given a username, age and hobbies", () => {      
        test("should respond with a 201 status code", async () => {
            const requestST = supertest(server)
            const res = await requestST.post('/api/users').send({
                username: "John",
                age: "30",
                hobbies: ["basketball", "gym"]
            })
            expect(res.statusCode).toEqual(201)
        })
    })
})