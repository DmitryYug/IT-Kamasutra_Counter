import React, {ChangeEvent, useEffect, useState} from "react";
import CounterBtn from "../CounterBtn/CounterBtn";
import {Container, Grid, TextField} from "@mui/material";

type CounterSettingsPropsType = {
    error: boolean
    maxCounter: number
    startCounter: number
    maxHelperText: string
    startHelperText: string
    onSetSettings: () => void
    maxValueSetter: (maxValue: number) => void
    startValueSetter: (startValue: number) => void
    onFocusSettingsDisplayedText: () => void
}


export const CounterSettings: React.FC<CounterSettingsPropsType> = (
    {
        error, maxCounter, startCounter, maxHelperText,
        startHelperText, maxValueSetter, onSetSettings,
        startValueSetter, onFocusSettingsDisplayedText
    }) => {

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let currentMaxValue = +e.currentTarget.value
        maxValueSetter(currentMaxValue)
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let currentStartValue = +e.currentTarget.value
        startValueSetter(currentStartValue)
    }
    const onFocusHandler = () => {
        onFocusSettingsDisplayedText()
    }
    const btnSetCallback = () => {
        onSetSettings()
    }
    const setBtnDisabled = error

    return (
        <div>
            <Grid
                container
                // spacing={1}
            >
                <Grid
                    sx={{
                        height: '90px'
                    }}
                    item xs={12}>
                    <TextField
                        sx={{width: '100%'}}
                        // error={maxError}
                        helperText={maxHelperText}
                        value={maxCounter}
                        type='number'
                        variant="outlined"
                        label='max value'
                        onChange={onChangeMaxValueHandler}
                        onFocus={onFocusHandler}
                    />
                </Grid>
                <Grid
                    sx={{
                        height: '90px'
                    }}
                    item xs={12}>
                    <TextField
                        sx={{width: '100%'}}
                        // error={startError}
                        helperText={startHelperText}
                        value={startCounter}
                        type='number'
                        variant="outlined"
                        label='start value'
                        onChange={onChangeStartValueHandler}
                        onFocus={onFocusHandler}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CounterBtn
                        disabled={setBtnDisabled}
                        name='set'
                        btnCallback={btnSetCallback}
                    />
                </Grid>
            </Grid>
        </div>
    )
}
