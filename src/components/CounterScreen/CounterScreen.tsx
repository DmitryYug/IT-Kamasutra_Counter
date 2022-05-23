import React from "react";
import CounterDisplay from "../CounterDisplay/CounterDisplay";
import CounterBtn from "../CounterBtn/CounterBtn";
import {Grid} from "@mui/material";

type CounterScreenPropsType = {
    counter: number
    maxCounter?: number
    startCounter: number
    // btnCallback: (name: BtnNameType) => void
    onIncrement: () => void
    onReset: () => void

}

export const CounterScreen: React.FC<CounterScreenPropsType> = (
    {counter, maxCounter, startCounter, onIncrement, onReset}) => {


    return (
        <Grid container>
            <Grid item xs={12}>
                <CounterDisplay maxValue={maxCounter} counter={counter}/>
            </Grid>
            <Grid item xs={6}>
                <CounterBtn
                    counter={counter}
                    maxValue={maxCounter}
                    startValue={startCounter}
                    name='inc'
                    btnCallback={onIncrement}
                />
            </Grid>
            <Grid item xs={6}>
                <CounterBtn
                    counter={counter}
                    maxValue={maxCounter}
                    startValue={startCounter}
                    name='reset'
                    btnCallback={onReset}
                />
            </Grid>


        </Grid>


        // <div style={{
        //     display: 'block'
        // }}>
        //     <CounterDisplay maxValue={maxCounter} counter={counter}/>
        //     <CounterBtn
        //         counter={counter}
        //         maxValue={maxCounter}
        //         startValue={startCounter}
        //         name='inc'
        //         btnCallback={onIncrement}
        //     />
        //     <CounterBtn
        //         counter={counter}
        //         maxValue={maxCounter}
        //         startValue={startCounter}
        //         name='reset'
        //         btnCallback={onReset}
        //     />
        // </div>
    )
}