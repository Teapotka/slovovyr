export const CHOISE_KEY = 'CHOISE_KEY'
export const THEME_KEY = 'THEME_KEY'

export function setData(key: string, data: any){
    localStorage.setItem(key, data)
}
export function removeData(key:string){
    localStorage.removeItem(key)
}
export function getData(key: string){
    return localStorage.getItem(key)
}
export function loadThemeData(){
    getData(THEME_KEY)?.split(',').forEach(val=>{
       val && document.querySelector('body')?.classList.add(val)
    })
}
export function loadSwitcherData(){
    getData(THEME_KEY)?.split(',').forEach(val=>{
        if(val){
          const element = document.getElementById(val)!
          element.classList.remove('is-inactiveSVG')
          //@ts-ignore 
          element.children[0].children[1].style.transform = 'translateX(35px)'
        }
      })
}
export function updateThemeData(){
    let theme = ''
    console.log(document.querySelector('body')!.classList.forEach((val, i) => {
      theme += val + ','
    }))
    theme = theme.split(',').filter(i => i != '').toString()
    setData(THEME_KEY, theme)
}
export function recordData(time: any, result: boolean){    
    if(getData(`${new Date().getDate()},${new Date().getMonth()+1},${getData(CHOISE_KEY)}`)==null){
        let score = `${time},${result}`
        setData(`${new Date().getDate()},${new Date().getMonth()+1},${getData(CHOISE_KEY)}`, score)
    }
}
export function readAllData(){
    const keys = Object.keys(localStorage).filter(k=> k!= CHOISE_KEY && k!= THEME_KEY && k!= 'ally-supports-cache')
    let data: string[] = []
    keys.forEach((val,i)=>{
        data[i] = getData(val)!
    })
    console.log({data, keys})
    return {data, keys}
}
export function processData():
{date: string, region: 'center'|'west'|'east'|'', time:  string, result: boolean}[]
{
    const {data, keys} = readAllData()
    let info = [{date: '', region: '', time: '', result: false}]
    keys.forEach((val, i)=>{
        const dateAndRegion = keys[i].split(',')
        const timeAndResult = data[i].split(',')
        info[i] = {
            date: `${dateAndRegion[0]}.${dateAndRegion[1]}`,
            region: dateAndRegion[2],
            time: new Date(+timeAndResult[0]*1000).toTimeString().split(' ')[0].substring(3,8),
            result: timeAndResult[1] === 'true'
        }
    })
    console.log(info)
    //@ts-ignore
    return info.reverse()
}
export function checkData(){
    const {data, keys} = readAllData()
    let info = [{region: '', result: false}]
    keys.forEach((val, i)=>{
        const dateAndRegion = keys[i].split(',')
        const timeAndResult = data[i].split(',')
        if(+dateAndRegion[0] == new Date().getDate() && +dateAndRegion[1] == new Date().getMonth()+1 )
        {            
            info.push({
                region: dateAndRegion[2],
                result: timeAndResult[1] === 'true'
            })
        }
    })
    console.log(info.filter(c => c.region != ''))
    return info.filter(c => c.region != '')
}