import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        listAdmin: null,
        listUsers: null,
        addAdmin: null,
        updateAdmin: null,
    },
    reducers: {
        allAdmin: (state, action) => {
            state.listAdmin = action.payload;
        },
        allUsers: (state, action) => {
            state.listUsers = action.payload;
        },
        addAdmin: (state, action) => {
            state.addAdmin = action.payload;
        },
        updateAdmin: (state, action) => {
            state.addAdmin = action.payload;
        },
    },
});

export const { allAdmin, allUsers, allTours, addAdmin, addTour, updateAdmin } = adminSlice.actions;
export default adminSlice.reducer;
