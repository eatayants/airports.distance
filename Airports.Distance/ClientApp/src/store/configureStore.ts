import { configureStore } from '@reduxjs/toolkit'
import distanceSlice from './distanceSlice';
import airportToSlice from './airportToSlice';
import airportFromSlice from './airportFromSlice';

export const store = configureStore({
  reducer: {
        distance: distanceSlice,
        fromAirport: airportFromSlice,
        toAirport: airportToSlice
    } 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;