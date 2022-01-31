import React, { useReducer } from 'react'
import { Keypad } from '../../components/Keypad/Keypad'
import { NumberDisplay } from '../../components/NumberDisplay/NumberDisplay'
import { initialState } from './Calculator.consts'
import { calculatorReducer } from './Calculator.helpers'

export const Calculator = () => {
    const [{ firstNumber, secondNumber, operation }, dispatch] = useReducer(
        calculatorReducer,
        initialState
    )
    return (
        <div>
            <NumberDisplay
                firstNumber={firstNumber}
                secondNumber={secondNumber}
                operation={operation}
            />
            <Keypad dispatchFunction={dispatch} />
        </div>
    )
}
