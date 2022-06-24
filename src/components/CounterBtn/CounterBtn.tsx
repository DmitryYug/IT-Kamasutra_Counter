import React from "react";
import {BtnNameType} from "../../App";
import {Button} from "@mui/material";

type CounterBtnPropsType = {
    name: BtnNameType,
    disabled?: boolean,
    btnCallback: () => void
}

const CounterBtn: React.FC<CounterBtnPropsType> = (
    {
        name, disabled,btnCallback
    }) => {

    return(
        <Button
            sx={{width: '100%'}}
            variant="contained"
            onClick={btnCallback}
            disabled={disabled}
        >
            {name}
        </Button>
    )
}

export default CounterBtn