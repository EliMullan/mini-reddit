import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {

    }
});

//export const {each reducer here}  = commentsSlice.actions;
export default commentsSlice.reducer;