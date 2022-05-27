import React, {useEffect, useState} from "react";
import {CounterScreen} from "../CounterScreen/CounterScreen";
import {CounterSettings} from "../CounterSettings/CounterSettings";

export const Counter = () => {

    let initialStartCounter = localStorage.getItem('startValue') ?
        Number(localStorage.getItem('startValue')) : 0
    let initialMaxCounter = localStorage.getItem('maxValue') ?
        Number(localStorage.getItem('maxValue')) : 5

    let [maxCounter, setMaxCounter] = useState<number>(initialMaxCounter)
    let [startCounter, setStartCounter] = useState<number>(initialStartCounter)
    let [currentCounter, setCurrentCounter] = useState(initialStartCounter)
    let [error, setError] = useState(false)

    // let errorClass =

    console.log(maxCounter, startCounter)

    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            setCurrentCounter(JSON.parse(startValueAsString))
            setStartCounter(JSON.parse(startValueAsString))
        }
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            setMaxCounter(JSON.parse(maxValueAsString))
        }
    }, [])


    useEffect(() => {
        if (maxCounter <= startCounter) {
            setError(true)

        } else { setError(false) }
    }, [maxCounter, startCounter])

    const onIncrement = () => {
        if (currentCounter === maxCounter) {
            return
        } else {
            setCurrentCounter(currentCounter + 1)
        }
    }
    const onReset = () => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            setCurrentCounter(JSON.parse(startValueAsString))
        } else {
            setCurrentCounter(startCounter)
        }
    }
    const maxValueSetter = (maxValue: number) => {
        setMaxCounter(maxValue)
    }
    const startValueSetter = (startValue: number) => {
        setStartCounter(startValue)
    }
    const onSetSettings = () => {
        setStartCounter(startCounter)
        setMaxCounter(maxCounter)
        setCurrentCounter(startCounter)
        localStorage.setItem('startValue', JSON.stringify(startCounter))
        localStorage.setItem('maxValue', JSON.stringify(maxCounter))
    }

    return (
        <div style={{
            margin: '100px',
            display: 'flex'
        }}>
            <CounterSettings
                counter={currentCounter}
                maxCounter={maxCounter}
                startCounter={startCounter}
                error={error}
                onSetSettings={onSetSettings}
                maxValueSetter={maxValueSetter}
                startValueSetter={startValueSetter}
            />
            <CounterScreen
                counter={currentCounter}
                maxCounter={maxCounter}
                startCounter={startCounter}
                error={error}
                onIncrement={onIncrement}
                onReset={onReset}
            />
        </div>
    )
}