import React, {useEffect} from "react";
import {CounterSettings} from "../CounterSettings/CounterSettings";
import CounterBtn from "../CounterBtn/CounterBtn";
import CounterDisplay from "../CounterDisplay/CounterDisplay";

type CounterWithReduxPropsType = {
    maxCounter: number,
    startCounter: number,
    currentCounter: number,
    screenMessage: string,
    error: boolean,
    settingsMode: boolean,
    maxHelperText: string,
    startHelperText: string,
    onIcrement: () => void,
    onReset: () => void,
    // onError: (error: boolean) => void,
    onSettingsModeToggler: (settingsMode: boolean) => void,
    onSetScreenMessage: (screenMessage: string) => void,
    maxValueSetter: (maxValue: number) => void,
    startValueSetter: (startValue: number) => void,
    onSetSettings: () => void,
    onFocus: () => void
}


export const CounterWithRedux = (props: CounterWithReduxPropsType) => {

    let incBtnDisabled = (props.currentCounter === props.maxCounter)
        || props.error
        || props.settingsMode
    let resetBtnDisabled = (props.currentCounter === props.startCounter)
        || props.error
        || props.settingsMode

    return (
        <div style={{margin: '100px', display: 'flex'}}>
            <div>
                <CounterDisplay
                    redText={incBtnDisabled}
                    screenMessage={props.screenMessage}/>
                <div style={{padding: '8px', display: 'flex', justifyContent: 'space-around'}}>
                    <div style={{margin: '0 20px 0 0'}}>
                        <CounterBtn
                            name='inc'
                            disabled={incBtnDisabled}
                            btnCallback={props.onIcrement}
                        />
                    </div>
                    <CounterBtn
                        name='reset'
                        disabled={resetBtnDisabled}
                        btnCallback={props.onReset}
                    />
                </div>
            </div>
            <div style={{width: '250px', margin: '0 0 0 30px'}}>
                <CounterSettings
                    error={props.error}
                    maxCounter={props.maxCounter}
                    startCounter={props.startCounter}
                    maxHelperText={props.maxHelperText}
                    startHelperText={props.startHelperText}
                    onSetSettings={props.onSetSettings}
                    maxValueSetter={props.maxValueSetter}
                    startValueSetter={props.startValueSetter}
                    onFocus={props.onFocus}
                />
            </div>
        </div>
    )
}