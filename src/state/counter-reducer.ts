// Types
type initialCounterStateType = {
    maxCounter: number,
    startCounter: number,
    currentCounter: number,
    screenMessage: string,
    error: boolean,
    settingsMode: boolean,
    maxHelperText: string,
    startHelperText: string
}

type onIncrementACType = ReturnType<typeof onIncrementAC>
type onResetACType = ReturnType<typeof onResetAC>
type onErrorACType = ReturnType<typeof onErrorAC>
type onSettingsModeTogglerACType = ReturnType<typeof onSettingsModeTogglerAC>
type onSetScreenMessageACType = ReturnType<typeof onSetScreenMessageAC>
type maxValueSetterACType = ReturnType<typeof maxValueSetterAC>
type startValueSetterACType = ReturnType<typeof startValueSetterAC>
type onSetSettingsACType = ReturnType<typeof onSetSettingsAC>
type onFocusACType = ReturnType<typeof onFocusAC>

type CounterReducerType = onIncrementACType
    | onResetACType
    | onErrorACType
    | onSettingsModeTogglerACType
    | onSetScreenMessageACType
    | maxValueSetterACType
    | startValueSetterACType
    | onSetSettingsACType
    | onFocusACType

let initialCounterState: initialCounterStateType = {
    maxCounter: 5,
    startCounter: 0,
    currentCounter: 0,
    screenMessage: '0',
    error: false,
    settingsMode: false,
    maxHelperText: '',
    startHelperText: ''
}


// Reducer
export const counterReducer =
    (state = initialCounterState, action: CounterReducerType) => {
        switch (action.type) {
            case "ON-INCREMENT":
                if (state.currentCounter === state.maxCounter) {
                    return
                } else {
                    return {
                        ...state,
                        currentCounter: state.currentCounter + 1,
                        screenMessage: `${state.currentCounter + 1}`
                    }
                }
            case "ON-RESET":
                return {
                    ...state,
                    screenMessage: `${state.startCounter}`,
                    currentCounter: state.startCounter
                }
            // case "ON-ERROR":
            //     return {
            //         ...state,
            //         error: action.error
            //     }
            case "ON-SETTINGSMODE-TOGGLER":
                return {
                    ...state,
                    settingsMode: action.settingsMode
                }
            case "ON-SET-SCREEN-MESSAGE":
                return {
                    ...state,
                    screenMessage: action.screenMessage
                }
            case "MAX-VALUE-SET":
                if (action.maxValue <= state.startCounter) {
                    return {
                        ...state,
                        maxHelperText: 'max should be more than less',
                        screenMessage: 'wrong input'
                    }
                } else {
                    return {
                        ...state,
                        maxCounter: action.maxValue,
                        startHelperText: '',
                        maxHelperText: ''
                    }
                }
            case "START-VALUE-SET":
                if (action.startValue < 0 || action.startValue >= state.maxCounter) {
                    return {
                        ...state,
                        startHelperText: 'should be pos & more than start',
                        screenMessage: 'wrong input'
                    }
                } else {
                    return {
                        ...state,
                        startCounter: action.startValue,
                        startHelperText: '',
                        maxHelperText: ''
                    }
                }
            case "ON-SET-SETTINGS":
                return {
                    ...state,
                    currentCounter: state.startCounter,
                    screenMessage: `${state.startCounter}`,
                    settingsMode: false
                }
            case "ON-FOCUS":
                return {
                    ...state,
                    screenMessage: "Enter values and press SET",
                    settingsMode: true
                }
            default:
                return state
        }
    }

// AC
export const onIncrementAC = () => {
    return {
        type: 'ON-INCREMENT'
    } as const
}
export const onResetAC = () => {
    return {
        type: 'ON-RESET'
    } as const
}
export const onErrorAC = (error: boolean) => {
    return {
        type: 'ON-ERROR',
        error
    } as const
}
export const onSettingsModeTogglerAC = (settingsMode: boolean) => {
    return {
        type: 'ON-SETTINGSMODE-TOGGLER',
        settingsMode
    } as const
}
export const onSetScreenMessageAC = (screenMessage: string) => {
    return {
        type: 'ON-SET-SCREEN-MESSAGE',
        screenMessage
    } as const
}
export const maxValueSetterAC = (maxValue: number) => {
    return {
        type: 'MAX-VALUE-SET',
        maxValue
    } as const
}
export const startValueSetterAC = (startValue: number) => {
    return {
        type: 'START-VALUE-SET',
        startValue
    } as const
}
export const onSetSettingsAC = () => {
    return {
        type: 'ON-SET-SETTINGS',
    } as const
}
export const onFocusAC = () => {
    return {
        type: 'ON-FOCUS',
    } as const
}

