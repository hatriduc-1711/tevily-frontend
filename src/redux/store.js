import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import registerReducer from '~/redux/authSlice/registerSlice';
import loginReducer from '~/redux/authSlice/loginSlice';
import adminReducer from '~/redux/adminSlice/adminSlice';
import newsReducer from '~/redux/newsSlice/newsSlice';
import tourReducer from '~/redux/tourSlice/tourSlice';
import destinationReducer from '~/redux/destinationSlice/destinationSlice';

// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
// };

// const rootReducer = combineReducers({
//     register: registerReducer,
//     login: loginReducer,
//     admin: adminReducer,
//     news:newsReducer,
//     tour: tourReducer,
//     destination: destinationReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        admin: adminReducer,
        news: newsReducer,
        tour: tourReducer,
        destination: destinationReducer,
    },
    // reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     }),
});

// export let persistor = persistStore(store);
