import React from 'react'
import { CalcOperations } from '../../../consts/types'

interface NumberButtonProps {
    operation: CalcOperations
    onOperationBtnClick: (operation: CalcOperations) => void
}

export const OperationButton = ({
    operation,
    onOperationBtnClick: onNumberBtnClick,
}: NumberButtonProps) => (
    <button onClick={() => onNumberBtnClick(operation)}>{operation}</button>
)
