import React, {ChangeEvent, useState} from "react";
import CounterBtn from "../CounterBtn/CounterBtn";
import {Container, Grid, TextField} from "@mui/material";

type CounterSettingsPropsType = {
    counter: number
    onSetSettings: (maxValue: number, startValue: number) => void
    maxCounter: number
    startCounter: number
    // btnCallback: (name: BtnNameType) => void
}


export const CounterSettings: React.FC<CounterSettingsPropsType> = (
    {counter, onSetSettings, maxCounter, startCounter}) => {

    let maxValue = maxCounter,
        startValue = startCounter

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        maxValue = +e.currentTarget.value
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        startValue = +e.currentTarget.value
    }
    const btnSetCallback = () => {
        onSetSettings(maxValue, startValue)
    }

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        label='max value'
                        onChange={onChangeMaxValueHandler}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        label='start value'
                        onChange={onChangeStartValueHandler}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CounterBtn
                        counter={counter}
                        maxValue={maxValue}
                        startValue={startValue}
                        name='set'
                        btnCallback={btnSetCallback}
                    />
                </Grid>
            </Grid>




            {/*<TextField*/}
            {/*    variant="outlined"*/}
            {/*    label='max value'*/}
            {/*    onChange={onChangeMaxValueHandler}*/}
            {/*/>*/}
            {/*<TextField*/}
            {/*    variant="outlined"*/}
            {/*    label='start value'*/}
            {/*    onChange={onChangeStartValueHandler}*/}
            {/*/>*/}
            {/*<CounterBtn*/}
            {/*    counter={counter}*/}
            {/*    maxValue={maxValue}*/}
            {/*    startValue={startValue}*/}
            {/*    name='set'*/}
            {/*    btnCallback={btnSetCallback}*/}
            {/*/>*/}
        </div>
    )
}
