import mapReducer from './mapSlice';
import { configureStore } from '@reduxjs/toolkit'
export const store =  configureStore({
    reducer:{
        regions: mapReducer
    }
})
export type RootState = ReturnType<typeof store.getState>