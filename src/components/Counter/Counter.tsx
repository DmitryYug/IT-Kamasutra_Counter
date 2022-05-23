import React, {useEffect, useState} from "react";
import {CounterScreen} from "../CounterScreen/CounterScreen";
import {CounterSettings} from "../CounterSettings/CounterSettings";
import {Box, Container} from "@mui/material";

export const Counter = () => {

    let [maxCounter, setMaxCounter] = useState<number>(5)
    let [startCounter, setStartCounter] = useState<number>(0)
    let [currentCounter, setCurrentCounter] = useState(0)

    // useEffect( () => {
    //     localStorage.setItem('startValue', JSON.stringify(startCounter))
    // }, [startCounter])
    //
    // useEffect( () => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxCounter))
    // }, [maxCounter])

    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            setStartCounter(JSON.parse(startValueAsString))
        }
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            setMaxCounter(JSON.parse(maxValueAsString))
        }
    }, [])

    const onIncrement = () => {
        if (currentCounter === maxCounter) {
            return
        } else {
            setCurrentCounter(currentCounter + 1)
        }
    }
    const onReset = () => {
        setCurrentCounter(startCounter)
    }
    const onSetSettings = (maxValue: number, startValue: number) => {
        setStartCounter(startValue)
        setMaxCounter(maxValue)
        setCurrentCounter(startValue)
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }

    return (
        <div style={{
            margin: '100px',
            display: 'flex'
        }}>
            <CounterSettings
                counter={currentCounter}
                onSetSettings={onSetSettings}
                maxCounter={maxCounter}
                startCounter={startCounter}
                // btnCallback={onClickCounterBtn}
            />
            <CounterScreen
                counter={currentCounter}
                maxCounter={maxCounter}
                startCounter={startCounter}
                onIncrement={onIncrement}
                onReset={onReset}
            />
        </div>
    )
}