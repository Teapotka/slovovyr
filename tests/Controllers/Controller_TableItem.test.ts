import {TableItemController} from "../../controllers/TableItemController";

describe('TableItem Controller', ()=>{
    test('should return date string', ()=>{
        const date = new Date(2023, 0, 1)
        const result = TableItemController.dateString(date)

        expect(result).toBe('01.01')
    })
    test('should return time string', ()=>{
        const time = 65
        const result = TableItemController.timeString(time)

        expect(result).toBe('01:05')
    })
})