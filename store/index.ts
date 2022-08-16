import mapReducer from './mapSlice';
import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './modalSlice';
import animationSlice from './animationSlice';
export const store =  configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        // ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp', 
        'payload.play', 'payload.pause', 'animations.pause', 'animations.play'],
        // Ignore these paths in the state
        ignoredPaths: ['payload.play', 'payload.pause', 'animations.pause', 'animations.play'],
      },
    }),
    reducer:{
        modals: modalSlice,
        regions: mapReducer,
        animations: animationSlice
    }
})
export type RootState = ReturnType<typeof store.getState>