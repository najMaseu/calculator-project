import React, { useReducer } from 'react'
import { Keypad } from '../../components/Keypad/Keypad'
import { NumberDisplay } from '../../components/NumberDisplay/NumberDisplay'
import {
    CalculatorActions,
    CalculatorState,
    InputActionType,
} from '../../consts/types'

const initialState: CalculatorState = {
    firstNumber: '0',
    secondNumber: null,
    operation: null,
}

export const reducer = (state: CalculatorState, action: CalculatorActions) => {
    switch (action.type) {
        case InputActionType.INPUT_NUMBER:
            if (
                (state.firstNumber === '0' && state.secondNumber === null) ||
                state.secondNumber === '0'
            ) {
                return state.operation
                    ? {
                          ...state,
                          secondNumber:
                              action.payload === '.'
                                  ? '0' + action.payload
                                  : action.payload,
                      }
                    : {
                          ...state,
                          firstNumber:
                              action.payload === '.'
                                  ? '0' + action.payload
                                  : action.payload,
                      }
            }

            return state.operation
                ? {
                      ...state,
                      secondNumber: `${state.secondNumber || ''}${
                          action.payload
                      }`,
                  }
                : {
                      ...state,
                      firstNumber: `${state.firstNumber || ''}${
                          action.payload
                      }`,
                  }
        default:
            return state
    }
}

export const Calculator = () => {
    const [{ firstNumber, secondNumber, operation }, dispatch] = useReducer(
        reducer,
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
