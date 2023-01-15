import {NextApiRequest} from "next/types";
import {AxiosResponse} from "axios";
import {SLOVOVYR_HISTORY_KEY, SLOVOVYR_REGION_KEY, SLOVOVYR_THEME_KEY} from "./data/LocalStorage";

declare global {
    type TRequestParse = NextApiRequest & { responseData: AxiosResponse, requestIndex: string | undefined}
    type TRegion = 'none' | 'west' | 'center' | 'east'
    type TKeys =  typeof SLOVOVYR_REGION_KEY | typeof SLOVOVYR_HISTORY_KEY | typeof SLOVOVYR_THEME_KEY
    type TModals = 'settings' | 'info' | 'win' | 'lose' | 'none'
    type TResult = {date: Date | string, region: Exclude<TRegion, 'none'>, time: number, result: Exclude<TModals, 'settings' | 'info' | 'none'>}
    type TFlag = {east: 'win' | 'lose' | 'none', west: 'win' | 'lose' | 'none', center: 'win' | 'lose' | 'none'}
    type TThemesLS = {dark: boolean, colorBlind: boolean}
}