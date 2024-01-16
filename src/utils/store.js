import { configureStore } from '@reduxjs/toolkit';

import chipsSlice from './slices/chipsSlice';

const store = configureStore({
    reducer: {
        chipsSlice: chipsSlice,
    },
});

export default store;
