import { css } from '@emotion/css'
import { Colors } from '../../consts/colors'

export const keypadContainer = css({
    background: Colors.DARKGREY,
    width: '100%',
    height: '70vh',
    display: 'grid',
    gap: 2,
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplaterows: 'repeat(5, 1fr)',
    gridTemplateAreas: `'features features features operations' 
                        'numbers numbers numbers operations'
                        'numbers numbers numbers operations'
                        'numbers numbers numbers operations'
                        'numbers numbers numbers operations'
                        `,
    button: {
        background: 'none',
        border: 'none',
        fontSize: '1.2rem',
        fontWeight: 'medium',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        transition: 'background .2s ease',
        ':hover': {
            background: 'lightgrey',
        },
    },
})

export const functionBtns = css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridArea: 'features',
    gap: 2,
    button: {
        background: Colors.PINK,
    },
})

export const numberBtns = css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridArea: 'numbers',
    gap: 2,
    button: {
        background: Colors.GREY,
    },
})

export const operationBtns = css({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridArea: 'operations',
    gap: 2,
    button: {
        background: Colors.NEON_PURPLE,
    },
})
