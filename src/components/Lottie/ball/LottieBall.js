import React from 'react'
import Lottie from 'react-lottie'
import { makeStyles } from '@material-ui/styles'
import animationData from './ball.json'

const useStyles = makeStyles({
    animation: {
        transform: 'translate(60%, 235%)',
        '@media (max-width:600px)': {
            transform: 'translate(70%, 215%)',
        },
    },
})

export default function LottieBall() {
    const classes = useStyles()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return (
        <div className={classes.animation}>
            <Lottie options={defaultOptions} height={40} width={40} />
        </div>
    )
}
