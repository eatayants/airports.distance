import { DataApi } from 'src/api';
import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CalculateRequest, DistanceRequest, DistanceResponse } from '../entity/distance';


export type DistanceState = Readonly<{
    isCalculating: boolean;
    response: DistanceResponse;
}>;

export type DistanceStatePayload = Pick<DistanceState, "response">;

const initialState: DistanceState = {
    isCalculating: false,
    response: { units:"", value: 0 }
};

export const distanceSlice = createSlice({
    name: 'distanceSlice',
    initialState,
    reducers: {
        requestDistance: (state, action: PayloadAction<CalculateRequest>) => {
            state.isCalculating = true;
        },
        receiveDistance: (state, action: PayloadAction<DistanceStatePayload>) => {
            const { response } = action.payload;
            state.response = response;
        },
        finishCalculating: (state, action: PayloadAction<boolean>) => {
            state.isCalculating = action.payload;
        }
    }
});

export const calculateAsync = createAsyncThunk(
    'distance/calculateAsync',
    async (request: CalculateRequest, { dispatch }) => {
        dispatch(requestDistance(request));
        try {
            if ((request.from?.location != null) &&
                (request.to?.location != null)) {
                var response = await DataApi.calculateAsync(
                    {
                        from: request.from?.location ?? null,
                        to: request.to?.location ?? null
                    });
                const payload = { response: response };
                dispatch(receiveDistance(payload));
            }
            else {
                dispatch(receiveDistance({ response: { units: "", value: 0 } }));
            }
        } catch (e) {            
            console.error(e);
        } finally {
            dispatch(finishCalculating(false));
        }
    }
);

export const { requestDistance, receiveDistance, finishCalculating } = distanceSlice.actions;

export default distanceSlice.reducer;