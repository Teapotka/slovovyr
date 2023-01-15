import {
    loadThemes,
    readDataFromLS, readTodayResultFromLS,
    SLOVOVYR_HISTORY_KEY,
    SLOVOVYR_REGION_KEY,
    SLOVOVYR_THEME_KEY,
    writeRegionToLS, writeResultToLS,
    writeThemeToLS
} from "../../data/LocalStorage";
import {render} from "@testing-library/react";
import Home from "../../pages";
import {Provider} from "react-redux";
import {store} from "../../redux/store";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "",
            pathname: "",
            query: "",
            asPath: "",
            push: ()=>{}
        };
    },
}));

describe('LocalStorage', ()=>{
    afterEach(()=>{
        window.localStorage.clear()
    })
    test('should read data', async ()=>{
        expect(readDataFromLS(SLOVOVYR_REGION_KEY)).toBeNull()
        expect(readDataFromLS(SLOVOVYR_HISTORY_KEY)).toBeNull()
        expect(readDataFromLS(SLOVOVYR_THEME_KEY)).toBeNull()
    })
    test('should write region', async ()=>{
        expect(readDataFromLS(SLOVOVYR_REGION_KEY)).toBeNull()
        writeRegionToLS('center')
        expect(readDataFromLS(SLOVOVYR_REGION_KEY)).toBe('center')
    })
    test('should write theme', async ()=>{
        expect(readDataFromLS(SLOVOVYR_THEME_KEY)).toBeNull()
        const theme: TThemesLS = {
            dark: true,
            colorBlind: true
        }
        writeThemeToLS(theme)
        expect(readDataFromLS(SLOVOVYR_THEME_KEY)).toEqual(theme)
    })
    test('should load themes', async ()=>{
        render(
            <Provider store={store}>
                <Home/>
            </Provider>
        )
        const body = document.body
        expect(body.classList).not.toContain('dark')
        expect(body.classList).not.toContain('colorBlind')

        const theme: TThemesLS = {
            dark: true,
            colorBlind: true
        }
        writeThemeToLS(theme)
        loadThemes()
        expect(body.classList).toContain('dark')
        expect(body.classList).toContain('colorBlind')
    })
    test('should write result', async ()=>{
        expect(readDataFromLS(SLOVOVYR_HISTORY_KEY)).toBeNull()
        const result:TResult = {
            date: new Date().toString(),
            region: 'center',
            time: 120,
            result: "win"
        }
        writeResultToLS(result)

        expect(readDataFromLS(SLOVOVYR_HISTORY_KEY)).toStrictEqual([result])
        expect(readDataFromLS(SLOVOVYR_HISTORY_KEY).length).toBe(1)

        writeResultToLS(result)
        expect(readDataFromLS(SLOVOVYR_HISTORY_KEY).length).toBe(1)

        const anotherResult:TResult = {
            date: new Date().toString(),
            region: 'center',
            time: 100,
            result: "lose"
        }

        writeResultToLS(anotherResult)
        expect(readDataFromLS(SLOVOVYR_HISTORY_KEY).length).toBe(1)
    })
    test('should read today result', async ()=>{
        expect(readTodayResultFromLS()).toEqual([])
        const result:TResult = {
            date: new Date().toString(),
            region: 'center',
            time: 120,
            result: "win"
        }
        writeResultToLS(result)
        expect(readTodayResultFromLS()).toEqual([result])
    })
})