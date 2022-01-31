import { css } from '@emotion/css'
import { Colors } from '../../consts/colors'

export const display = css({
    background: Colors.DARKGREY,
    height: '30vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    justifyContent: 'end',
    padding: '1rem',
    position: 'relative',
    color: 'white',
    fontSize: '1.5rem',
    gap: 5,
    div: {
        transition: 'all .2s ease',
    },
})

export const operationSign = css({
    position: 'absolute',
    top: '0',
    left: '.5rem',
})

export const firstNumberFaded = css({
    color: Colors.LIGHTGREY,
    fontSize: '1.3rem',
})

export const secondNumberStyles = css({
    maxHeight: '1.5rem',
    opacity: 1,
})

export const secondNumberStylesHidden = css({
    maxHeight: 0,
    opacity: 0,
})
