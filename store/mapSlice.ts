import { Action, createSlice } from "@reduxjs/toolkit";

type TAction = {
    type: string
    payload: '' | 'east' | 'west' | 'center'
}
const mapSlice = createSlice({
    name: 'region',
    initialState: {
        region: '' ,
        choise:{
            east: false,
            west: false,
            center: false,
            '': false
        }
    },
    reducers: {
        change(state, action:TAction){
            state.region = action.payload
            const temp = Object.entries(state.choise)
            //@ts-ignore
            state.choise = Object.fromEntries(temp
                .map(([key, val])=> key == action.payload ? [key, true] : [key, false]))
        }
    }
})
export const {change} = mapSlice.actions
export default mapSlice.reducer
