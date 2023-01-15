import {readDataFromLS, SLOVOVYR_THEME_KEY, writeThemeToLS} from "../data/LocalStorage";

export class SettingsModalController{
    /**
     * Toggle themes, move switchers, write themes to the LocalStorage
     * */
    static toggle(id: 'dark' | 'colorBlind'){
        const container = document.getElementById(id)!
        const switcher = container.children[0].children[1] as HTMLElement
        const body = document.querySelector('body')!
        if(body.classList.contains(id)){
            switcher.style.transform = 'translateX(0px)'
        }
        else{
            switcher.style.transform = 'translateX(35px)'
        }
        container.classList.toggle('is-inactiveSVG')
        body.classList.toggle(id)
        writeThemeToLS({
            dark: body.classList.contains('dark'),
            colorBlind: body.classList.contains('colorBlind')
        })
    }
    /**
     * Sets switchers position, styles
     * */
    static loadSwitchersData(){
        const themes = readDataFromLS(SLOVOVYR_THEME_KEY)
        for (const theme in themes){
            const container = document.getElementById(theme)!
            const switcher = container.children[0].children[1] as HTMLElement
            switcher.style.transform = `translateX(${themes[theme] ? '35' : '0'}px)`
            themes[theme] && container.classList.remove('is-inactiveSVG')
        }
    }
}