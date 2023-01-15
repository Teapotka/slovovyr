import { configureStore } from '@reduxjs/toolkit'
import mapSlice from "./mapSlice";
import modalSlice from "./modalSlice";

export const store = configureStore({
    reducer: {
        map: mapSlice,
        modals: modalSlice
    },
})

export type RootState = ReturnType<typeof store.getState>