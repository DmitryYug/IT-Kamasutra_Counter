import React, {ChangeEvent} from "react";
import CounterBtn from "../CounterBtn/CounterBtn";
import {Grid, TextField} from "@mui/material";
import {CounterStateType} from "../../state/counter-reducer";

type CounterSettingsPropsType = {
    state: CounterStateType
    setBtnDisabled: boolean
    onSetSettings: () => void
    maxValueSetter: (maxValue: number) => void
    startValueSetter: (startValue: number) => void
    onFocus: () => void
}


export const CounterSettings: React.FC<CounterSettingsPropsType> = (props) => {

    const {maxError, startError, maxCounter, startCounter, maxHelperText, startHelperText} = props.state

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let currentMaxValue = +e.currentTarget.value
        props.maxValueSetter(currentMaxValue)
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let currentStartValue = +e.currentTarget.value
        props.startValueSetter(currentStartValue)
    }



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
                        value={maxError ? startCounter : maxCounter}
                        type='number'
                        label='max value'
                        onChange={onChangeMaxValueHandler}
                        onFocus={props.onFocus}
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
                        onFocus={props.onFocus}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CounterBtn
                        disabled={props.setBtnDisabled}
                        name='set'
                        btnCallback={props.onSetSettings}
                    />
                </Grid>
            </Grid>
        </div>
    )
}
