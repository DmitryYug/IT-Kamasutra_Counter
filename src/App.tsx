import React from 'react';
import classes from "./App.module.css";
import CounterDisplay from "./components/CounterDisplay/CounterDisplay";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./state/redux-store";
import {
    CounterStateType,
    maxValueSetterAC, onFocusAC,
    onIncrementAC,
    onResetAC,
    onSetSettingsAC,
    startValueSetterAC
} from "./state/counter-reducer";
import CounterBtn from "./components/CounterBtn/CounterBtn";
import {CounterSettings} from "./components/CounterSettings/CounterSettings";


export type BtnNameType = 'inc' | 'reset' | 'set'

export const App = () => {

    const state = useSelector<RootStateType, CounterStateType>(state => state.counterState)
    const dispatch = useDispatch()
    // console.log(state)

//Callbacks
    const onIncrement = () => {
        dispatch(onIncrementAC())
    }
    const onReset = () => {
        dispatch(onResetAC())
    }
    const onSetSettings = () => {
        dispatch(onSetSettingsAC())
    }
    const maxValueSetter = (maxValue: number) => {
        dispatch(maxValueSetterAC(maxValue))
    }
    const startValueSetter = (startValue: number) => {
        dispatch(startValueSetterAC(startValue))
    }
    const onFocus = () => {
        dispatch(onFocusAC())
    }


    let incBtnDisabled = (state.currentCounter === state.maxCounter) || state.settingsMode
    let resetBtnDisabled = (state.currentCounter === state.startCounter) || state.settingsMode

    return (
        <div className={classes.appWrapper}>
            <div style={{margin: '100px', display: 'flex'}}>
                <div>
                    <CounterDisplay
                        redText={incBtnDisabled}
                        screenMessage={state.screenMessage}
                    />
                    <div style={{padding: '8px', display: 'flex', justifyContent: 'space-around'}}>
                        <div style={{margin: '0 20px 0 0'}}>
                            <CounterBtn
                                name='inc'
                                disabled={incBtnDisabled}
                                btnCallback={onIncrement}
                            />
                        </div>
                        <div>
                            <CounterBtn
                                name='reset'
                                disabled={resetBtnDisabled}
                                btnCallback={onReset}
                            />
                        </div>
                    </div>
                </div>
                <div style={{width: '250px', margin: '0 0 0 30px'}}>
                    <CounterSettings
                        state={state}
                        onSetSettings={onSetSettings}
                        maxValueSetter={maxValueSetter}
                        startValueSetter={startValueSetter}
                        onFocus={onFocus}
                        setBtnDisabled={state.maxError || state.startError}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;



