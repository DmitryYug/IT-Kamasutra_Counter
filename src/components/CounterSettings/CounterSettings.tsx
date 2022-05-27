import React, {ChangeEvent, useState} from "react";
import CounterBtn from "../CounterBtn/CounterBtn";
import {Container, Grid, TextField} from "@mui/material";

type CounterSettingsPropsType = {
    counter: number
    maxCounter: number
    startCounter: number
    error: boolean
    onSetSettings: () => void
    maxValueSetter: (maxValue: number) => void
    startValueSetter: (startValue: number) => void
}


export const CounterSettings: React.FC<CounterSettingsPropsType> = (
    {counter, onSetSettings, maxCounter, startCounter, error,
        maxValueSetter, startValueSetter}) => {

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let currentMaxValue = +e.currentTarget.value
        maxValueSetter(currentMaxValue)
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let currentStartValue = +e.currentTarget.value
        startValueSetter(currentStartValue)
    }

    const btnSetCallback = () => {
        onSetSettings()
    }

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField
                        // error
                        // helperText='incorrect value'
                        value={maxCounter}
                        type='number'
                        variant="outlined"
                        label='max value'
                        onChange={onChangeMaxValueHandler}
                    />
                    {/*{maxValueTextField}*/}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        // error
                        // helperText='incorrect value'
                        value={startCounter}
                        type='number'
                        variant="outlined"
                        label='start value'
                        onChange={onChangeStartValueHandler}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CounterBtn
                        disabled={false}
                        name='set'
                        btnCallback={btnSetCallback}
                    />
                </Grid>
            </Grid>
        </div>
    )
}
