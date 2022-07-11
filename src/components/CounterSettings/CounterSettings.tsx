import React, {ChangeEvent} from "react";
import CounterBtn from "../CounterBtn/CounterBtn";
import {Grid, TextField} from "@mui/material";

type CounterSettingsPropsType = {
    // error: boolean
    maxCounter: number
    startCounter: number
    maxError: boolean
    startError: boolean
    maxHelperText: string
    startHelperText: string
    onSetSettings: () => void
    maxValueSetter: (maxValue: number) => void
    startValueSetter: (startValue: number) => void
    onFocus: () => void
}


export const CounterSettings: React.FC<CounterSettingsPropsType> = (
    {
        maxError, startError, maxCounter, startCounter, maxHelperText,
        startHelperText, maxValueSetter, onSetSettings, startValueSetter, onFocus
    }) => {

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let currentMaxValue = +e.currentTarget.value
        maxValueSetter(currentMaxValue)
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let currentStartValue = +e.currentTarget.value
        startValueSetter(currentStartValue)
    }

    const setBtnDisabled = maxError || startError

    return (
        <div>
            <Grid container>
                <Grid
                    item
                    sx={{height: '90px'}}
                    xs={12}>
                    <TextField
                        error={maxError}
                        sx={{width: '100%'}}
                        helperText={maxHelperText}
                        value={maxCounter}
                        type='number'
                        label='max value'
                        onChange={onChangeMaxValueHandler}
                        onFocus={onFocus}
                    />
                </Grid>
                <Grid
                    item
                    sx={{height: '90px'}}
                    xs={12}>
                    <TextField
                        error={startError}
                        sx={{width: '100%'}}
                        helperText={startHelperText}
                        value={startCounter}
                        type='number'
                        label='start value'
                        onChange={onChangeStartValueHandler}
                        onFocus={onFocus}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CounterBtn
                        disabled={setBtnDisabled}
                        name='set'
                        btnCallback={onSetSettings}
                    />
                </Grid>
            </Grid>
        </div>
    )
}
