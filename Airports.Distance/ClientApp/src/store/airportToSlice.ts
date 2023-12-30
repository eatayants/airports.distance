import { DataApi } from 'src/api';
import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Airport  } from '../entity';
import { string } from 'yup-locales/dist/locales/nb';

export type AirportToState = Readonly<{
    isLoading: boolean;
    selected: Airport | null,
    toAirports: Airport[];
}>;

export type AirportToStatePayload = Pick<AirportToState, "toAirports">;

const initialState: AirportToState = {
    isLoading: false,
    selected: null,
    toAirports:[]
};

export const airportToSlice = createSlice({
    name: 'airportToSlice',
    initialState,
    reducers: {
        receiveToAirports: (state, action: PayloadAction<AirportToStatePayload>) => {
            const { toAirports } = action.payload;
            state.toAirports = toAirports;
        },
        setToAirport: (state, action: PayloadAction<Airport | null>) => {
            state.selected = action.payload;
        },
        Loading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
});


export const setToAirportsAsync = createAsyncThunk(
    'airportFromSlice/setFromAirportsAsync',
    async (value: Airport | null, { dispatch }) => {
        try {
            dispatch(setToAirport(value));
        } catch (e) {
            console.error(e);
        }
    }
);

export const getToAirportsAsync = createAsyncThunk(
    'airportToSlice/getToAirportsAsync',
    async (query: string, { dispatch }) => {
        dispatch(Loading(true));
        try {
            const toAirports = await DataApi.getAirportsAsync(query);
            const payload = { toAirports };
            dispatch(receiveToAirports(payload));
        } catch (e) {
            console.error(e);
        }
        finally {
            dispatch(Loading(false));
        }
    }
);

export const { receiveToAirports, setToAirport, Loading } = airportToSlice.actions;

export default airportToSlice.reducer;