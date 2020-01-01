const mockAxios = require('axios');
const request = require('supertest');
const app = require('./index');


jest.mock('axios');


it('gets data', async ()=>{
    mockAxios.get.mockImplementationOnce(()=>
    Promise.resolve({
        data: {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
        }
    }))

    const response = await request(app).get('/')

    expect(response.body.data).toHaveProperty('userId', 1);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
})