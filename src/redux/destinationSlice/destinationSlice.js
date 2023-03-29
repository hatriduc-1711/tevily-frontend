import { createSlice } from '@reduxjs/toolkit';

export const destinationSlice = createSlice({
    name: 'destination',
    initialState: {
        listDestination: null,
        destination: null,
    },
    reducers: {
        allDestination: (state, action) => {
            state.listDestination = action.payload;
        },
        destination: (state, action) => {
            state.destination = action.payload;
        },
    },
});

export const { allDestination, destination } = destinationSlice.actions;
export default destinationSlice.reducer;
