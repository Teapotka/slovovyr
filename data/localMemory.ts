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
export function recordData(region: string, result: boolean){
    const record = `${new Date().getDate()},${new Date().getMonth()+1},${result}`
    const key = `${new Date().getDate()}_${new Date().getMonth()+1}_${region}`
    localStorage.setItem(key, record)
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