import supertest from 'supertest';
import {server} from '../../src/app/server';


describe("PUT/users/${userId}", () => {
    describe("given a new username, age and hobbies", () => {      
        it("should respond with a 201 status code", async () => {
            const res = await supertest(server())
            .post(`/api/users`)
            .set('Content-type',' application/json')
            .send({
                username: "John",
                age: 30,
                hobbies: ["basketball", "gym"]
            })
            const res2 = await supertest(server()).get(`/api/users`)
            const id = res2.body[0].id
            const res3 = await supertest(server())
            .put(`/api/users/${id}`)
            .send({
                username: "Jack",
                age: 30,
                hobbies: ["basketball", "gym"]
            })
            const res4 = await supertest(server()).get(`/api/users`)
            expect(res.statusCode).toEqual(201);
            expect(res.body.username).toBe("John");
            expect(res.body.age).toBe(30)
            expect(res2.body).toHaveLength(1)
            expect(res2.body[0].username).toBe("John")
            expect(res4.body[0].username).toBe("Jack")
            expect(res2.body[0].id).toBe(res4.body[0].id)
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


