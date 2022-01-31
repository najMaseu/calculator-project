import { cx } from '@emotion/css'
import React from 'react'
import { ValidChars } from '../../../consts/types'
import { zeroBtn } from './NumberButton.styles'

interface NumberButtonProps {
    char: ValidChars
    onNumberBtnClick: (number: ValidChars) => void
}

export const NumberButton = ({ char, onNumberBtnClick }: NumberButtonProps) => (
    <button
        className={cx(char === 0 && zeroBtn)}
        onClick={() => onNumberBtnClick(char)}
    >
        {char}
    </button>
)
