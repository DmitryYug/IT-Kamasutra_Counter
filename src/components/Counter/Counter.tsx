import React, {useEffect, useState} from "react";
import {CounterSettings} from "../CounterSettings/CounterSettings";
import CounterBtn from "../CounterBtn/CounterBtn";
import CounterDisplay from "../CounterDisplay/CounterDisplay";

const Counter = () => {

    // let initialStartCounter = localStorage.getItem('startValue') ?
    //     Number(localStorage.getItem('startValue')) : 0
    // let initialMaxCounter = localStorage.getItem('maxValue') ?
    //     Number(localStorage.getItem('maxValue')) : 5
    let [maxCounter, setMaxCounter] = useState<number>(5)
    let [startCounter, setStartCounter] = useState<number>(0)
    let [currentCounter, setCurrentCounter] = useState<number>(startCounter)
    let [screenMessage, setScreenMessage] = useState<string>(`${startCounter}`)
    let [error, setError] = useState<boolean>(false)
    let [settingsMode, setSettingsMode] = useState<boolean>(false)
    let [maxHelperText, setMaxHelperText] = useState<string>('')
    let [startHelperText, setStartHelperText] = useState<string>('')

//LocalStorage
//     useEffect(() => {
//         let startValueAsString = localStorage.getItem('startValue')
//         if (startValueAsString) {
//             setCurrentCounter(JSON.parse(startValueAsString))
//             setStartCounter(JSON.parse(startValueAsString))
//         }
//         let maxValueAsString = localStorage.getItem('maxValue')
//         if (maxValueAsString) {
//             setMaxCounter(JSON.parse(maxValueAsString))
//         }
//     }, [])

    let incBtnDisabled = (currentCounter === maxCounter) || error || settingsMode
    let resetBtnDisabled = (currentCounter === startCounter) || error || settingsMode

    useEffect(() => {
        if (maxCounter <= startCounter || startCounter < 0) {
            setError(true)
            setScreenMessage('wrong input')
        } else {
            setError(false)
            setScreenMessage("Enter values and press SET")
        }
    }, [maxCounter, startCounter])


    const onIncrement = () => {
        if (currentCounter === maxCounter) {
            return
        } else {
            setCurrentCounter(currentCounter + 1)
            setScreenMessage(`${currentCounter + 1}`)
        }
    }
    const onReset = () => {
        setScreenMessage(`${startCounter}`)
        setCurrentCounter(startCounter)
        // let startValueAsString = localStorage.getItem('startValue')
        // if (startValueAsString) {
        //     setCurrentCounter(JSON.parse(startValueAsString))
        //     setScreenMessage(startValueAsString)
        // } else {
        //     debugger
        //     setScreenMessage(`${startCounter}`)
        //     setCurrentCounter(startCounter)
        // }
    }
    const maxValueSetter = (maxValue: number) => {
        setMaxCounter(maxValue)
        if (maxValue <= startCounter ) {
            setMaxHelperText('max should be more than less')
        } else {
            setStartHelperText('')
            setMaxHelperText('')
        }
    }
    const startValueSetter = (startValue: number) => {
        setStartCounter(startValue)
        if (startValue < 0 || startValue >= maxCounter) {
            setStartHelperText('should be pos & more than start')
        } else {
            setMaxHelperText('')
            setStartHelperText('')
        }
    }

    const onSetSettings = () => {
        setStartCounter(startCounter)
        setMaxCounter(maxCounter)
        setCurrentCounter(startCounter)
        setScreenMessage(`${startCounter}`)
        setSettingsMode(false)
        // localStorage.setItem('startValue', JSON.stringify(startCounter))
        // localStorage.setItem('maxValue', JSON.stringify(maxCounter))
    }

    const onFocusSettingsDisplayedText = () => {
        setScreenMessage("Enter values and press SET")
        setSettingsMode(true)
    }


    return (
        <div style={{margin: '100px', display: 'flex'}}>
            <div>
                <CounterDisplay
                    redText={incBtnDisabled}
                    screenMessage={screenMessage}/>
                <div style={{padding: '8px', display: 'flex', justifyContent: 'space-around'}}>
                    <div style={{margin: '0 20px 0 0'}}>
                        <CounterBtn
                            name='inc'
                            disabled={incBtnDisabled}
                            btnCallback={onIncrement}
                        />
                    </div>
                    <CounterBtn
                        name='reset'
                        disabled={resetBtnDisabled}
                        btnCallback={onReset}
                    />
                </div>
            </div>
            <div style={{width: '250px', margin: '0 0 0 30px'}}>
                {/*<CounterSettings*/}
                {/*    error={error}*/}
                {/*    maxCounter={maxCounter}*/}
                {/*    startCounter={startCounter}*/}
                {/*    maxHelperText={maxHelperText}*/}
                {/*    startHelperText={startHelperText}*/}
                {/*    onSetSettings={onSetSettings}*/}
                {/*    maxValueSetter={maxValueSetter}*/}
                {/*    startValueSetter={startValueSetter}*/}
                {/*    onFocusSettingsDisplayedText={onFocusSettingsDisplayedText}*/}
                {/*/>*/}
            </div>
        </div>
    )
}