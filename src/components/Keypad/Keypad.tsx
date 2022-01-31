import React, { useCallback } from 'react'
import {
    CalcOperations,
    CalculatorActions,
    InputActionType,
    ValidChars,
} from '../../consts/types'
import { NumberButton } from '../Buttons/NumberButton/NumberButton'
import { OperationButton } from '../Buttons/OperationButton/OperationButton'
import {
    functionBtns,
    keypadContainer,
    numberBtns,
    operationBtns,
} from './Keypad.styles'

interface KeypadProps {
    dispatchFunction: React.Dispatch<CalculatorActions>
}

export const Keypad = ({ dispatchFunction }: KeypadProps) => {
    const numberButtonDispatch = useCallback(
        (char: ValidChars) =>
            dispatchFunction({
                type: InputActionType.INPUT_NUMBER,
                payload: `${char}`,
            }),
        []
    )
    const operatonDispatch = useCallback(
        (operation: CalcOperations) =>
            dispatchFunction({
                type: operation,
            }),
        []
    )

    return (
        <div className={keypadContainer}>
            <div className={functionBtns}>
                <OperationButton
                    onOperationBtnClick={operatonDispatch}
                    operation={CalcOperations.CLEAR}
                />
                <OperationButton
                    onOperationBtnClick={operatonDispatch}
                    operation={CalcOperations.LEAST_COMMON_MULTIPLE}
                />
                <OperationButton
                    onOperationBtnClick={operatonDispatch}
                    operation={CalcOperations.GREATEST_COMMON_DIVISOR}
                />
            </div>
            <div className={numberBtns}>
                <NumberButton
                    char={9}
                    onNumberBtnClick={numberButtonDispatch}
                />
                <NumberButton
                    char={8}
                    onNumberBtnClick={numberButtonDispatch}
                />
                <NumberButton
                    char={7}
                    onNumberBtnClick={numberButtonDispatch}
                />
                <NumberButton
                    char={6}
                    onNumberBtnClick={numberButtonDispatch}
                />
                <NumberButton
                    char={5}
                    onNumberBtnClick={numberButtonDispatch}
                />
                <NumberButton
                    char={4}
                    onNumberBtnClick={numberButtonDispatch}
                />
                <NumberButton
                    char={3}
                    onNumberBtnClick={numberButtonDispatch}
                />
                <NumberButton
                    char={2}
                    onNumberBtnClick={numberButtonDispatch}
                />
                <NumberButton
                    char={1}
                    onNumberBtnClick={numberButtonDispatch}
                />
                <NumberButton
                    char={0}
                    onNumberBtnClick={numberButtonDispatch}
                />
                <NumberButton
                    char={'.'}
                    onNumberBtnClick={numberButtonDispatch}
                />
            </div>
            <div className={operationBtns}>
                <OperationButton
                    onOperationBtnClick={operatonDispatch}
                    operation={CalcOperations.DIVIDE}
                />
                <OperationButton
                    onOperationBtnClick={operatonDispatch}
                    operation={CalcOperations.MULTIPLY}
                />
                <OperationButton
                    onOperationBtnClick={operatonDispatch}
                    operation={CalcOperations.ADD}
                />
                <OperationButton
                    onOperationBtnClick={operatonDispatch}
                    operation={CalcOperations.SUBTRACT}
                />
                <OperationButton
                    onOperationBtnClick={operatonDispatch}
                    operation={CalcOperations.EQUALS}
                />
            </div>
        </div>
    )
}
