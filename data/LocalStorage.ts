export const SLOVOVYR_THEME_KEY = 'SLOVOVYR_THEME_KEY'
export const SLOVOVYR_REGION_KEY = 'SLOVOVYR_REGION_KEY'
export const SLOVOVYR_HISTORY_KEY = 'SLOVOVYR_HISTORY_KEY'
export function writeRegionToLS(region:TRegion){
    window.localStorage.setItem(SLOVOVYR_REGION_KEY, region)
}
export function readDataFromLS(key: TKeys){
    if(key == SLOVOVYR_REGION_KEY)
       return window.localStorage.getItem(key)
    else
       return JSON.parse(window.localStorage.getItem(key)!)
}

export function writeThemeToLS(theme: TThemesLS){
    window.localStorage.setItem(SLOVOVYR_THEME_KEY, JSON.stringify(theme))
}
export function loadThemes(){
    const themes = readDataFromLS(SLOVOVYR_THEME_KEY)
    const body = document.querySelector('body')!
    for (const theme in themes){
        themes[theme] && body.classList.add(theme)
    }
}
export function writeResultToLS(item:TResult){
    const history:[TResult] = readDataFromLS(SLOVOVYR_HISTORY_KEY) || []
    const value = history.filter(i => new Date(i.date).toDateString() ==
        new Date(item.date).toDateString() && i.region == item.region)

    !value.length && history.push(item)
    window.localStorage.setItem(SLOVOVYR_HISTORY_KEY, JSON.stringify(history))
}

export function readTodayResultFromLS(){
    const history:[TResult] = readDataFromLS(SLOVOVYR_HISTORY_KEY) || []
    const today = history.filter(i => new Date(i.date).toDateString() == new Date().toDateString())
    return today
}