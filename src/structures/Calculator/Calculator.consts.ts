import { CalculatorState } from '../../consts/types'

export const initialState: CalculatorState = {
    firstNumber: '0',
    secondNumber: null,
    operation: null,
    toBeCleared: false,
}
