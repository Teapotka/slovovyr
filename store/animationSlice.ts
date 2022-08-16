import { Action, createSlice } from "@reduxjs/toolkit";

type TAction = {
    type: string
    payload: any
}
type TInitial = {
    pause: any
    play: any
}
const animationSlice = createSlice({
    name: 'animation',
    initialState: {
        pause: 'none',
        play: 'none',
    } as TInitial,
    reducers: {
        setFunctions(state, action:TAction){
            // state.modal = action.payload
            // console.log(action.payload)
            state.pause = action.payload.pause
            state.play = action.payload.play
            console.log('set')
        }
    }
})
export const {setFunctions} = animationSlice.actions
export default animationSlice.reducer
