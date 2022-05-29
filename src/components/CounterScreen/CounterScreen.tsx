import React from "react";
import CounterDisplay from "../CounterDisplay/CounterDisplay";
import CounterBtn from "../CounterBtn/CounterBtn";
import {Grid} from "@mui/material";

type CounterScreenPropsType = {
    counter: number
    maxCounter?: number
    startCounter: number
    maxValueError?: boolean
    startValueError?: boolean
    currentInfo: string
    onIncrement: () => void
    onReset: () => void

}

export const CounterScreen: React.FC<CounterScreenPropsType> = (
    {
        counter, maxCounter, startCounter,
        maxValueError, startValueError,
        currentInfo, onIncrement, onReset
    }) => {

    let disabledIncBtn = false,
        disabledResetBtn = false

    if (counter === maxCounter) {
        disabledIncBtn = true
    }
    if (counter === startCounter) {
        disabledResetBtn = true
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <CounterDisplay
                    maxCounter={maxCounter}
                    counter={counter}
                    maxValueError={maxValueError}
                    startValueError={startValueError}
                    currentInfo={currentInfo}
                />
            </Grid>
            <Grid item xs={6}>
                <CounterBtn
                    name='inc'
                    disabled={disabledIncBtn}
                    btnCallback={onIncrement}
                />
            </Grid>
            <Grid item xs={6}>
                <CounterBtn
                    name='reset'
                    disabled={disabledResetBtn}
                    btnCallback={onReset}
                />
            </Grid>
        </Grid>
    )
}