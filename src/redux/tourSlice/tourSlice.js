import { createSlice } from '@reduxjs/toolkit';

export const tourSlice = createSlice({
    name: 'tour',
    initialState: {
        allTours: null,
        toursClient: null,
        tourSearch: null,
        tour: null,
        addTour: null,
    },
    reducers: {
        allTours: (state, action) => {
            state.allTours = action.payload;
        },
        tourSearch: (state, action) => {
            state.tourSearch = action.payload;
        },
        toursClient: (state, action) => {
            state.toursClient = action.payload;
        },
        tour: (state, action) => {
            state.tour = action.payload;
        },
        addTour: (state, action) => {
            state.addTour = action.payload;
        },
    },
});

export const { allTours, toursClient, tourSearch, tour, addTour } = tourSlice.actions;
export default tourSlice.reducer;
