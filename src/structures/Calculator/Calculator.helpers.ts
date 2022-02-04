import {
    CalcOperations,
    CalculatorActions,
    CalculatorState,
    InputActionType,
} from '../../consts/types'
import { initialState } from './Calculator.consts'

const getGreatestCommonDivisior = (a: number, b: number): number =>
    b ? getGreatestCommonDivisior(b, a % b) : Math.abs(a)

const getLeastCommonMultiple = (a: number, b: number) => {
    let min = Math.min(a, b)
    while (min >= 2) {
        if (a % min === 0 && b % min === 0) {
            return (a * b) / min
        }
        min--
    }
    return a * b
}

const evaluate = ({
    firstNumber,
    secondNumber,
    operation,
}: CalculatorState) => {
    switch (operation) {
        case CalcOperations.ADD:
            return `${
                parseFloat(firstNumber) + parseFloat(secondNumber || '0')
            }`
        case CalcOperations.SUBTRACT:
            return `${
                parseFloat(firstNumber) - parseFloat(secondNumber || '0')
            }`
        case CalcOperations.MULTIPLY:
            return `${
                parseFloat(firstNumber) * parseFloat(secondNumber || '1')
            }`
        case CalcOperations.DIVIDE:
            return `${
                parseFloat(firstNumber) / parseFloat(secondNumber || '1')
            }`
        case CalcOperations.GREATEST_COMMON_DIVISOR:
            return `${getGreatestCommonDivisior(
                parseFloat(firstNumber),
                parseFloat(secondNumber || '0')
            )}`
        case CalcOperations.LEAST_COMMON_MULTIPLE:
            return `${getLeastCommonMultiple(
                parseFloat(firstNumber),
                parseFloat(secondNumber || '0')
            )}`
        default:
            return firstNumber
    }
}

const handleOperations = (
    actionType: CalcOperations,
    state: CalculatorState
): CalculatorState =>
    state.secondNumber
        ? {
              ...state,
              toBeCleared: false,
              secondNumber: null,
              operation: actionType,
              firstNumber: evaluate(state),
          }
        : {
              ...state,
              toBeCleared: false,
              operation: actionType,
          }

export const calculatorReducer = (
    state: CalculatorState,
    action: CalculatorActions
) => {
    switch (action.type) {
        case InputActionType.INPUT_NUMBER:
            if (state.toBeCleared) {
                return {
                    ...initialState,
                    firstNumber:
                        action.payload === '.'
                            ? '0' + action.payload
                            : action.payload,
                }
            }
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
                          action.payload === '.' &&
                          state.secondNumber.includes(action.payload)
                              ? ''
                              : action.payload
                      }`,
                  }
                : {
                      ...state,
                      firstNumber: `${state.firstNumber || ''}${
                          action.payload === '.' &&
                          state.firstNumber.includes(action.payload)
                              ? ''
                              : action.payload
                      }`,
                  }

        case CalcOperations.ADD:
        case CalcOperations.SUBTRACT:
        case CalcOperations.DIVIDE:
        case CalcOperations.MULTIPLY:
        case CalcOperations.GREATEST_COMMON_DIVISOR:
        case CalcOperations.LEAST_COMMON_MULTIPLE:
            return handleOperations(action.type, state)

        case CalcOperations.CLEAR:
            if (state.operation) {
                return state.secondNumber
                    ? {
                          ...state,
                          secondNumber: null,
                      }
                    : {
                          ...state,
                          operation: null,
                      }
            }
            return initialState
        case CalcOperations.EQUALS:
            return {
                ...initialState,
                toBeCleared: true,
                firstNumber: evaluate(state),
            }
        default:
            return state
    }
}
