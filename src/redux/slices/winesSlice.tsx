import {IWine} from "../../interfaceTypes/interfaceTypes";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {winesAPI} from "../../api/api";

interface IWinesState {
    items: IWine[]
    isLoaded: boolean
}

const initialState: IWinesState = {
    items: [],
    isLoaded: false,
}

export const fetchWines = createAsyncThunk(
    'wines/fetchWines',
    async (value: string) => {
        return await winesAPI.getWines(value)
    }
)

export const winesSlice = createSlice({
    name: 'wines',
    initialState,
    reducers: {
        addWine: (state, action: PayloadAction<IWine>) => {
            state.items.unshift(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWines.fulfilled, (state, action: PayloadAction<IWine[]>) => {
            state.isLoaded = true
            state.items = action.payload
        })
    }
})

export const {addWine} = winesSlice.actions

export default winesSlice.reducer