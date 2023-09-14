import { configureStore } from '@reduxjs/toolkit';
import mergedReducer  from './slice';

export const store = configureStore({
    reducer: {
        titleReducer: mergedReducer
    },
})