import React from "react";
import classes from "./CounterDisplay.module.css";

type CounterDisplayType = {
    // counter: number
    redText: boolean
    screenMessage: string
    // maxCounter?: number
    // maxValueError?: boolean
    // startValueError?: boolean
    // currentInfo: string

}

const CounterDisplay: React.FC<CounterDisplayType> = (
    {screenMessage, redText}) => {

    let currentClass = redText ? classes.maxValueClass : classes.regularText

    if (screenMessage === "Enter values and press SET"
        || screenMessage === 'wrong input') {
        currentClass = classes.settingsMode
    }


    return (
        <div
            className={currentClass}
            style={{
                display: 'table-cell',
                verticalAlign: 'middle',
                textAlign: 'center',
                border: '2px solid black',
                width: '200px',
                height: '170px'
            }}
        >
            {screenMessage}
        </div>
    )
}
export default CounterDisplay





