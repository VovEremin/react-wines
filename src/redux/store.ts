import {configureStore} from "@reduxjs/toolkit";
import winesReducer from './slices/winesSlice'
import modalReducer from './slices/modalSlice'

export const store = configureStore({
    reducer: {
        wines: winesReducer,
        modal: modalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch