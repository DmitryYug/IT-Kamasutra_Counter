import React, {ChangeEvent, useState} from "react";
import CounterBtn from "../CounterBtn/CounterBtn";
import {Container, Grid, TextField} from "@mui/material";

type CounterSettingsPropsType = {
    counter: number
    maxCounter: number
    startCounter: number
    maxValueError: boolean
    startValueError: boolean
    onSetSettings: () => void
    maxValueSetter: (maxValue: number) => void
    startValueSetter: (startValue: number) => void
    onFocusSettingsDisplayedText: () => void
}


export const CounterSettings: React.FC<CounterSettingsPropsType> = (
    {
        counter, onSetSettings, maxCounter, startCounter,
        maxValueError, startValueError, maxValueSetter,
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
    const onFocusMaxHandler = () => {
        onFocusSettingsDisplayedText()
    }

    const btnSetCallback = () => {
        onSetSettings()
    }

    let maxErrorHelperText = maxValueError ? 'max should be more than start' : ''
    let startErrorHelperText = startValueError ? 'value should be positive integer' : ''
    let ifDisabled = (maxValueError || startValueError) ? true : false

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField
                        error={maxValueError}
                        helperText={maxErrorHelperText}
                        value={maxCounter}
                        type='number'
                        variant="outlined"
                        label='max value'
                        onChange={onChangeMaxValueHandler}
                        onFocus={onFocusMaxHandler}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        error={startValueError}
                        helperText={startErrorHelperText}
                        value={startCounter}
                        type='number'
                        variant="outlined"
                        label='start value'
                        onChange={onChangeStartValueHandler}
                        onFocus={onFocusMaxHandler}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CounterBtn
                        disabled={ifDisabled}
                        name='set'
                        btnCallback={btnSetCallback}
                    />
                </Grid>
            </Grid>
        </div>
    )
}
