import React from 'react'
import {
    functionBtns,
    keypadContainer,
    numberBtns,
    operationBtns,
    zeroBtn,
} from './Keypad.styles'

export const Keypad = () => (
    <div className={keypadContainer}>
        <div className={functionBtns}>
            <button>C</button>
            <button>LCM</button>
            <button>GCD</button>
        </div>
        <div className={numberBtns}>
            <button>9</button>
            <button>8</button>
            <button>7</button>
            <button>6</button>
            <button>5</button>
            <button>4</button>
            <button>3</button>
            <button>2</button>
            <button>1</button>
            <button className={zeroBtn}>0</button>
            <button>,</button>
        </div>
        <div className={operationBtns}>
            <button>/</button>
            <button>*</button>
            <button>+</button>
            <button>-</button>
            <button>=</button>
        </div>
    </div>
)
