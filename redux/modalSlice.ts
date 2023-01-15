import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type TInitialState = {
    modal: TModals
}
const initialState: TInitialState = {
    modal: 'none',
}
export const modalType = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        switchModal: (state, action: PayloadAction<TModals>) => {
            state.modal = action.payload
        },
    },
})

export const { switchModal } = modalType.actions
export default modalType.reducer