const { TestWatcher } = require('jest')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('amount of blogs equals', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(3)
})

test('identifier called id', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toBeDefined()
})

afterAll(() => {
    mongoose.connection.close()
})