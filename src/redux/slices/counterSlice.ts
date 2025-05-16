import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

type CounterState = {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        decrement: state => {
            if(state.value > 0) state.value -= 1;
        },
        reset: state => {
            state.value = 0
        }
    }
})

export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;