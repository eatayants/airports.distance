import { Autocomplete, Box, Button, CircularProgress, Grid, InputLabel, TextField } from '@mui/material';
import type { FunctionComponent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import type { Airport } from '../../entity';
import React from 'react';
import { getFromAirportsAsync, setFromAirportsAsync } from '../../store/airportFromSlice';
import { getToAirportsAsync, setToAirportsAsync } from '../../store/airportToSlice';
import { calculateAsync } from '../../store/distanceSlice';

const Home: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const isCalculating = useAppSelector<boolean>((state) => state.distance.isCalculating);
    const resultUnits = useAppSelector<string>((state) => state.distance.response.units);
    const resultValue = useAppSelector<number>((state) => state.distance.response.value);

    const from = useAppSelector<Airport | null>((state) => state.fromAirport.selected);
    const fromAirports = useAppSelector<Airport[]>((state) => state.fromAirport.fromAirports);
    const isLoadingFrom = useAppSelector<boolean>((state) => state.fromAirport.isLoading);
    const to = useAppSelector<Airport | null>((state) => state.toAirport.selected);
    const toAirports = useAppSelector<Airport[]>((state) => state.toAirport.toAirports);
    const isLoadingTo = useAppSelector<boolean>((state) => state.toAirport.isLoading);


    return (
        <div className="section">
            <div className="container">
                <h4 className="title is-4">Distance between selected airports</h4>
                <Box
                    sx={{
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        marginBottom: 30,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                        <Grid container spacing={2}>
                            <Grid container spacing={6}>
                                <Grid item xs={12} sm={4}>
                                    <InputLabel shrink>Source:</InputLabel>
                                    <Autocomplete
                                        id="fromAirports"
                                        isOptionEqualToValue={(option: Airport, value) => option.title === value.title}
                                        getOptionLabel={(option: any) => option.title}
                                        options={fromAirports}
                                        loading={isLoadingFrom}
                                        onChange={(event: any, value: Airport | null) => {
                                            dispatch(setFromAirportsAsync(value));
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                onChange={ev => {
                                                    dispatch(getFromAirportsAsync(ev.target.value));
                                                }}
                                                InputProps={{
                                                    ...params.InputProps,
                                                    endAdornment: (
                                                        <React.Fragment>
                                                            {isLoadingFrom ? <CircularProgress color="inherit" size={20} /> : null}
                                                            {params.InputProps.endAdornment}
                                                        </React.Fragment>
                                                    ),
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <InputLabel shrink>Destanation:</InputLabel>
                                    <Autocomplete
                                        id="toAirports"
                                        isOptionEqualToValue={(option: Airport, value) => option.title === value.title}
                                        getOptionLabel={(option: any) => option.title}
                                        options={toAirports}
                                        loading={isLoadingTo}
                                        onChange={(event: any, value: Airport | null) => {
                                            dispatch(setToAirportsAsync(value));
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                onChange={ev => {
                                                    dispatch(getToAirportsAsync(ev.target.value));
                                                }}
                                                InputProps={{
                                                    ...params.InputProps,
                                                    endAdornment: (
                                                        <React.Fragment>
                                                            {isLoadingTo ? <CircularProgress color="inherit" size={20} /> : null}
                                                            {params.InputProps.endAdornment}
                                                        </React.Fragment>
                                                    ),
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                <InputLabel shrink>Result:</InputLabel>
                                <TextField
                                    disabled
                                    fullWidth
                                    name="resultValue"
                                    type="resultValue"
                                    id="resultValue"
                                    value={`${resultValue??''} ${resultUnits??''}`}
                                />
                                </Grid>
                            </Grid>
                        </Grid>
                    <Box margin={2}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={12}>
                                    <Button
                                    fullWidth
                                        disabled={isCalculating}
                                        variant="outlined"
                                        sx={{ mt: 3, mb: 3 }}
                                    onClick={() => {
                                            dispatch(calculateAsync({ from, to }));
                                        }}
                                    >
                                        Calculate
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                </Box>
            </div>
        </div>
    );
}

export default Home;