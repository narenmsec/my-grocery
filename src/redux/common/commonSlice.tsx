import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 10,

}

const commonSlice = createSlice({
    name: 'commonSlice',
    initialState,
    reducers : {
        increment : (state, action) => {
            state.count += action.payload;
        },
        decrement : (state, action) => {
            state.count -= action.payload;
        }
    }
});

export const { increment, decrement } = commonSlice.actions;
export default commonSlice.reducer;
