import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TInitialState = {
    region: TRegion
}

const initialState: TInitialState = {
    region: 'none',
}

export const regionType = createSlice({
    name: 'map',
    initialState,
    reducers: {
        changeRegion: (state, action: PayloadAction<TRegion>) => {
            state.region = action.payload
        },
    },
})

export const { changeRegion } = regionType.actions
export default regionType.reducer