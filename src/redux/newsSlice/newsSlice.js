import { createSlice } from '@reduxjs/toolkit';

export const newSlice = createSlice({
    name: 'news',
    initialState: {
        listNews: null,
        news: null,
    },
    reducers: {
        allNews: (state, action) => {
            state.listNews = action.payload;
        },
        news: (state, action) => {
            state.news = action.payload;
        },
    },
});

export const { allNews, news } = newSlice.actions;
export default newSlice.reducer;
