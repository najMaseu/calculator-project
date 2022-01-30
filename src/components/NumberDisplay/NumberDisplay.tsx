import { cx } from '@emotion/css'
import React from 'react'
import { CalcOperations } from '../../consts/types'
import {
    display,
    firstNumberFaded,
    operationSign,
    secondNumberStyles,
    secondNumberStylesHidden,
} from './NumberDisplay.styles'

interface NumberDisplayProps {
    firstNumber: string
    secondNumber: string
    operation: CalcOperations
}

export const NumberDisplay = ({
    secondNumber,
    firstNumber,
    operation,
}: NumberDisplayProps) => (
    <div className={display}>
        <div className={operationSign}>{operation}</div>
        <div className={cx(secondNumber && firstNumberFaded)}>
            {firstNumber}
        </div>
        <div
            className={cx(
                secondNumberStyles,
                !secondNumber && secondNumberStylesHidden
            )}
        >
            {secondNumber}
        </div>
    </div>
)
