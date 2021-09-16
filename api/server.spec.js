const request = require('supertest'); 
const server = require('./server.js'); 

describe('sanity test', () => {
    it('test', () => {
        expect(true).toBeTruthy()
    })
})

describe('server.js', () => {
    describe('server is up and running', () => {
        it('/', async () => {
            const res = await request(server).get('/')
            const expected = { server: 'up' }
            expect(res.body).toEqual(expected)
        })
    }),
    describe('adding ressources', () => {
        it('insert a new user and return this user as a response', async () => {
            const expectedUser = {
                username: 'raf'
            }
            const newUser = await request(server).post('/register').send(expectedUser)
            expect(newUser.body).toMatchObject(expectedUser)
        }),
        it('return status 200 when a new user is added successfully', async () => {
            const expectedStatus = 200
            const expectedUser = {
                user_id: 1,
                username: 'foo'
            }

        })
    })
})