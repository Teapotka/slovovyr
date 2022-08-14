export const CHOISE_KEY = 'CHOISE_KEY'

export function setData(key: string, data: any){
    localStorage.setItem(key, data)
}
export function removeData(key:string){
    localStorage.removeItem(key)
}
export function getData(key: string){
    return localStorage.getItem(key)
}
export function recordData(region: string, result: boolean){
    const record = `${new Date().getDate()},${new Date().getMonth()+1},${result}`
    const key = `${new Date().getDate()}_${new Date().getMonth()+1}_${region}`
    localStorage.setItem(key, record)
}
