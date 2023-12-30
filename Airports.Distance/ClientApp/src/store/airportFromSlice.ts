import { DataApi } from 'src/api';
import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Airport  } from '../entity';

export type AirportFromStatePayload = Pick<AirportFromState, "fromAirports">;

const initialState: AirportFromState = {
    isLoading: false,
    selected: null,
    fromAirports:[]
};
export type AirportFromState = Readonly<{
    isLoading: boolean;
    selected: Airport | null;
    fromAirports: Airport[];
}>;

export const airportFromSlice = createSlice({
    name: 'airportFromSlice',
    initialState,
    reducers: {
        Loading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        receiveFromAirports: (state, action: PayloadAction<AirportFromStatePayload>) => {
            const { fromAirports } = action.payload;
            state.fromAirports = fromAirports;
        },
        setFromAirport: (state, action: PayloadAction<Airport | null>) => {
            state.selected = action.payload;
        }
    }
});

export const setFromAirportsAsync = createAsyncThunk(
    'airportFromSlice/setFromAirportsAsync',
    async (value: Airport | null, { dispatch }) => {      
        try {
            await dispatch(setFromAirport(value));
        } catch (e) {
            console.error(e);
        }
    }
);

export const getFromAirportsAsync = createAsyncThunk(
    'airportFromSlice/getFromAirportsAsync',
    async (query: string, { dispatch }) => {
        dispatch(Loading(true));
        try {
            const fromAirports = await DataApi.getAirportsAsync(query);
            const payload = { fromAirports };
            dispatch(receiveFromAirports(payload));
        } catch (e) {
            console.error(e);
        }
        finally {
            dispatch(Loading(false));
        }
    }
);

export const { Loading, receiveFromAirports, setFromAirport } = airportFromSlice.actions;

export default airportFromSlice.reducer;