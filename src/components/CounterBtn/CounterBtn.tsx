import React from "react";
import {BtnNameType} from "../../App";
import {Button} from "@mui/material";

type CounterBtnPropsType = {
    counter: number,
    name: BtnNameType,
    maxValue?: number,
    startValue?: number,
    btnCallback: () => void
}

const CounterBtn: React.FC<CounterBtnPropsType> = (
    {
        name, btnCallback, counter,
        maxValue, startValue
    }) => {

    let ifDisabled = false

    if (name === 'inc') {
        ifDisabled = (counter === maxValue) ? true : false
    }
    if (name === 'reset') {
        ifDisabled = (counter === startValue) ? true : false
    }


    return (
        <Button
            variant="contained"
            onClick={btnCallback}
            disabled={ifDisabled}
        >
            {name}
        </Button>
    )
}

export default CounterBtn