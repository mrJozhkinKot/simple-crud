import supertest from 'supertest';
import {server} from '../../src/app/server';


describe("POST/users", () => {
    describe("given a username, age and hobbies", () => {      
        it("should respond with a 201 status code", async () => {
                const res = await supertest(server()).post('/api/users')
                .set('Content-type',' application/json')
                .send({
                username: "John",
                age: 30,
                hobbies: ["basketball", "gym"]
            })
            const res2 = await supertest(server()).get(`/api/users`)
            expect(res.statusCode).toEqual(201);
            expect(res.body.username).toBe("John");
            expect(res.body.age).toBe(30);
            expect(res2.body).toHaveLength(1)
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


