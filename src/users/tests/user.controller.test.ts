import app from '../../app'
import request from 'supertest'
import {
    describe, expect, it, jest, test, afterAll, beforeAll
} from '@jest/globals';



let server: any
beforeAll(() => {
    const port = 3002;
    server = app.listen(port);
});


afterAll((done) => {
    console.log(done)
    server.close(done);
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
