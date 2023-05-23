import app from '../../app'
import request from 'supertest'
import {
    describe, expect, it, jest, test, afterAll, beforeAll
} from '@jest/globals';
import { UserInterface, userDataMock } from '../mocks/user-mock';


let server: any
beforeAll(() => {
    const port = 3002;
    server = app.listen(port);
});

afterAll((done) => {
    console.log(done)
    server.close(done);
});

let userId: string

describe('Test CREATE in users/create', () => {
    it('should return 201 when create author', async () => {

        const user = {
            name: "teste",
            email: "teste@example.com",
            password: "123456"
        }

        let response = await request(app)
            .post('/users/create')
            .send(user)
            .expect(201)

        userId = response.body.userId.toString()
        console.log("userId", userId)

        expect(response.body).toEqual({message: "usuario criado com sucesso !", userId})
    })
})

describe('Test GET all users in users/list', () => {
    it('should return a array with all users', async () => {

        let response = await request(app)
            .get('/users/list')
            .expect(200)

        expect(response.body).toEqual(expect.any(Array<UserInterface>))
    })
})

describe('Test DELETE one user by id', () => {
    it('must delete user by id ', async () => {

        let response = await request(app)
            .delete(`/users/delete/${userId}`)
            .expect(200)

        expect(response.body).toEqual({ message: 'usuario deletado com sucesso !' })
    })
})


