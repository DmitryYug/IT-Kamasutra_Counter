import React, {useState} from 'react';
import classes from "./App.module.css";
import {Counter} from "./components/Counter/Counter";
import { CounterSettings } from './components/CounterSettings/CounterSettings';

export type BtnNameType = 'inc' | 'reset' | 'set'


function App() {

    return (
        <div className={classes.appWrapper}>
            <Counter/>
        </div>
    );
}

export default App;



