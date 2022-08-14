import { Action, createSlice } from "@reduxjs/toolkit";

type TAction = {
    type: string
    payload: 'none' | 'settings' 
}
type TInitial = {
    modal: 'none' | 'settings'
}
const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modal: 'none' 
    } as TInitial,
    reducers: {
        toggle(state, action:TAction){
            console.log('toggle')
        }
    }
})
export const {toggle} = modalSlice.actions
export default modalSlice.reducer
