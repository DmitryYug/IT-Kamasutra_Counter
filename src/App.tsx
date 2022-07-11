import React, {useState} from 'react';
import classes from "./App.module.css";
import { CounterContainer } from './components/Counter/CounterContainer';


export type BtnNameType = 'inc' | 'reset' | 'set'

function App() {
    return (
        <div className={classes.appWrapper}>
            <CounterContainer/>
        </div>
    );
}

export default App;



