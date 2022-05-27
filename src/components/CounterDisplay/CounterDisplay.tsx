import React from "react";
import classes from "./CounterDisplay.module.css";

type CounterDisplayType = {
    counter: number
    maxCounter?: number
    error?: boolean
}

const CounterDisplay: React.FC<CounterDisplayType> = (
    {maxCounter, counter, error}) => {

    let errorMessage = () => {
        return(
            <div style={{
                fontSize: '54px',
                color: "red"
            }}>
                wrong input
            </div>
        )
    }
    let maxValueClass = (counter === maxCounter) ? classes.maxValueClass : ''
    let dispayedText = error ? errorMessage() : counter
    console.log(error)

    return (
        <div
            className={maxValueClass}
            style={{fontSize: '105px'}}
        >
            {dispayedText}
        </div>
    )
}
export default CounterDisplay





