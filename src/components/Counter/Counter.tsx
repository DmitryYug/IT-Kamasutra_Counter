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
    let [maxValueError, setMaxValueError] = useState(false)
    let [startValueError, setStartValueError] = useState(false)

    let [currentInfo, setCurrentInfo] = useState(`${initialStartCounter}`)

//LocalStorage
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
            setMaxValueError(true)
            setCurrentInfo('wrong input')
        } else { setMaxValueError(false)}
        if (startCounter < 0) {
            setStartValueError(true)
            setCurrentInfo('wrong input')
        } else (setStartValueError(false))

    }, [maxCounter, startCounter])

    const onIncrement = () => {
        if (currentCounter === maxCounter) {
            return
        } else {
            setCurrentCounter(currentCounter + 1)
            setCurrentInfo(`${currentCounter +1}`)
        }
    }
    const onReset = () => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            setCurrentCounter(JSON.parse(startValueAsString))
            setCurrentInfo(startValueAsString)
        } else {
            setCurrentCounter(startCounter)
            setCurrentInfo(`${startCounter}`)
        }
    }
    const maxValueSetter = (maxValue: number) => {
        setMaxCounter(maxValue)
    }
    const startValueSetter = (startValue: number) => {
        setStartCounter(startValue)
    }

    const onSetSettings = () => {
        // setStartCounter(startCounter)
        // setMaxCounter(maxCounter)
        setCurrentInfo(`${startCounter}`)
        // setCurrentCounter(startCounter)
        localStorage.setItem('startValue', JSON.stringify(startCounter))
        localStorage.setItem('maxValue', JSON.stringify(maxCounter))
    }

    const onFocusSettingsDisplayedText = () => {
        setCurrentInfo("Enter values and press SET")
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
                maxValueError={maxValueError}
                startValueError={startValueError}
                onSetSettings={onSetSettings}
                maxValueSetter={maxValueSetter}
                startValueSetter={startValueSetter}
                onFocusSettingsDisplayedText={onFocusSettingsDisplayedText}
            />
            <CounterScreen
                counter={currentCounter}
                maxCounter={maxCounter}
                startCounter={startCounter}
                maxValueError={maxValueError}
                startValueError={startValueError}
                currentInfo={currentInfo}
                onIncrement={onIncrement}
                onReset={onReset}
            />
        </div>
    )
}