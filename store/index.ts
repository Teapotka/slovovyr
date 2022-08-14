import mapReducer from './mapSlice';
import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './modalSlice';
export const store =  configureStore({
    reducer:{
        modals: modalSlice,
        regions: mapReducer
    }
})
export type RootState = ReturnType<typeof store.getState>