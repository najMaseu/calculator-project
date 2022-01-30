import { css } from '@emotion/css'
import React from 'react'
import { Colors } from '../../consts/colors'

export const Keypad = () => (
    <div
        className={css({
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
        })}
    >
        <div
            className={css({
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridArea: 'features',
                gap: 2,
                button: {
                    background: Colors.PINK,
                },
            })}
        >
            <button>C</button>
            <button>LCM</button>
            <button>GCD</button>
        </div>
        <div
            className={css({
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridArea: 'numbers',
                gap: 2,
                button: {
                    background: Colors.GREY,
                },
            })}
        >
            <button>9</button>
            <button>8</button>
            <button>7</button>
            <button>6</button>
            <button>5</button>
            <button>4</button>
            <button>3</button>
            <button>2</button>
            <button>1</button>
            <button
                className={css({
                    gridColumn: '1 / 3',
                })}
            >
                0
            </button>
            <button>,</button>
        </div>
        <div
            className={css({
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridArea: 'operations',
                gap: 2,
                button: {
                    background: Colors.NEON_PURPLE,
                },
            })}
        >
            <button>/</button>
            <button>*</button>
            <button>+</button>
            <button>-</button>
            <button>=</button>
        </div>
    </div>
)
