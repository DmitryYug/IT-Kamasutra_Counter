import React from "react";
import classes from "./CounterDisplay.module.css";

type CounterDisplayType = {
    counter: number
    maxValue?: number
}

const CounterDisplay: React.FC<CounterDisplayType> = (
    {maxValue, counter}) => {

    let maxValueClass = (counter === maxValue) ? classes.maxValueClass : ''

    return (
        <div
            className={maxValueClass}
            style={{fontSize: '105px'}}
        >
            {counter}
        </div>
    )
}
export default CounterDisplay





