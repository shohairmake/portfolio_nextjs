import React from 'react'
import Lottie from 'react-lottie'
import coffeeAndMan from './coffeeAndMan.json'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles({
    message: {
        letterSpacing: '0.2em',
        fontWeight: '100',
    },
})

export default function CoffeeAndMan() {
    const classes = useStyle()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: coffeeAndMan,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return (
        <Grid>
            <Typography variant="h3" align="center" className={classes.message}>
                Please contact me !!
            </Typography>
            <Lottie
                options={defaultOptions}
                height={'60%'}
                width={'70%'}
                clickToPause={true}
            />
        </Grid>
    )
}
