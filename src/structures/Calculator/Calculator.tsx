import React, { useState } from 'react'
import { Keypad } from '../../components/Keypad/Keypad'
import { NumberDisplay } from '../../components/NumberDisplay/NumberDisplay'
import { CalcOperations } from '../../consts/types'

export const Calculator = () => {
    const [kek, setKek] = useState('1488')
    return (
        <div>
            <NumberDisplay
                firstNumber="2137"
                secondNumber={kek}
                operation={CalcOperations.ADD}
            />
            <Keypad />
        </div>
    )
}
