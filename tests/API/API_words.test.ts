import 'isomorphic-fetch'

const apiURL = `${process.env.BASE_URL}/api/v1`
describe('API', ()=>{
    test('should return status 404', async ()=>{
        const response = await fetch(`${apiURL}/bad-input-value`)
        const data = await response.json()
        expect(response.status).toBe(404)
        expect(data.error).toBe('Not found')
    })
    test('should return status 400, Out of range', async ()=>{
        const response = await fetch(`${apiURL}/мати/26`)
        const data = await response.json()
        expect(response.status).toBe(400)
        expect(data.error).toBe('Out of range')
    })
    test('should return status 400, Bad index', async ()=>{
        const response = await fetch(`${apiURL}/мати/bad-index`)
        const data = await response.json()
        expect(response.status).toBe(400)
        expect(data.error).toBe('Bad index')
    })
    test('should return status 400, Bad index', async ()=>{
        const response = await fetch(`${apiURL}/мати/-1`)
        const data = await response.json()
        expect(response.status).toBe(400)
        expect(data.error).toBe('Bad index')
    })
    test('should return 200, OK', async ()=>{
        const response = await fetch(`${apiURL}/мати/1`)
        const data = await response.json()
        expect(response.status).toBe(200)
        expect(Object.keys(data)).toEqual(['count','index', 'info'])
    })
})
