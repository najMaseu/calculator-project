export enum CalcOperations {
    ADD = '+',
    SUBTRACT = '-',
    DIVIDE = '/',
    MULTIPLY = '*',
    LEAST_COMMON_MULTIPLE = 'LCM',
    GREATEST_COMMON_DIVISOR = 'GCD',
    EQUALS = '=',
    CLEAR = 'C',
}

export enum InputActionType {
    INPUT_NUMBER = 'INPUT_NUMBER',
}

interface InputOperationAction {
    type: CalcOperations
}

interface InputNumberAction {
    type: InputActionType.INPUT_NUMBER
    payload: string
}

export type CalculatorActions = InputOperationAction | InputNumberAction

export interface CalculatorState {
    firstNumber: string | null
    secondNumber: string | null
    operation: CalcOperations | null
    toBeCleared: boolean
}

export type ValidChars = number | '.'
