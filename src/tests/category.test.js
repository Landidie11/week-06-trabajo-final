//const category = require("../models/Category")
const request = require("supertest")
const app = require('../app')

const BASE_URL = '/api/v1/categories';

let TOKEN

beforeAll(async () => {
    const user = {
        email: 'landiefriend@gmail.com',
        password: 'landie1234'
    }

    const res = await request(app)
    .post('/api/v1/users/login')
    .send(user)

    TOKEN = res.body.token
})

test("Post -> BASE_URL, should return statusCode 201, and res.body.name === category.name", async () => {
    const category = {
        name: "tecno"
    }

    const res = await request(app)
    .post(BASE_URL)
    .send(category)
    .set('Authorization', `Bearer ${TOKEN}`)

    expect(res.status).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(category.name)

})

test("Get 'BASE_URL', should return statusCode 200, and res.body.length === 1", async () => {
    const res = await request(app)
    .get(BASE_URL)

    expect(res.status).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body).toHaveLength(1)
})