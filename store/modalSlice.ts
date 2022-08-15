import { Action, createSlice } from "@reduxjs/toolkit";

type TAction = {
    type: string
    payload: 'none' | 'settings' | 'info'| 'win' | 'lose'
}
type TInitial = {
    modal: 'none' | 'settings' | 'info' | 'win' | 'lose'
}
const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modal: 'none' 
    } as TInitial,
    reducers: {
        toggle(state, action:TAction){
            state.modal = action.payload
            console.log(action.payload)
        }
    }
})
export const {toggle} = modalSlice.actions
export default modalSlice.reducer
