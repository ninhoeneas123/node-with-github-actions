import app from '../../app'
import request from 'supertest'
import {
    describe, expect, it, jest, test
} from '@jest/globals';

let server: any
beforeEach(() => {
    const port = 3002;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});
describe('Test CREATE in users/create', () => {
    it('should return 201 when create author', async () => {

        let response = await request(app)
            .get('/users/create')
            .expect('Content-Type', /json/)
            .expect(200)

            expect(response.body.message).toEqual("usuario criado com sucesso !")
    })
})
