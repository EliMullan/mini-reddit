import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'post',
    initialState: [],
    reducers: {

    }
});

//export const {each reducer here}  = postSlice.actions;
export default postSlice.reducer;