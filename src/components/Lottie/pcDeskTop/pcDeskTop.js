import React from 'react'
import Lottie from 'react-lottie'
import pcDeskTop from './pcDeskTop.json'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles({
    name: {
        letterSpacing: '0.5em',
        marginLeft: '1.5em',
    },
})

export default function LottiePcDeskTop() {
    const classes = useStyle()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: pcDeskTop,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
        >
            <Grid item xs={6}>
                <Typography
                    variant={'h5'}
                    align="center"
                    className={classes.name}
                >
                    Hair & Web Designer <br />
                    SHO TANAKA
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Lottie
                    options={defaultOptions}
                    height={'70%'}
                    width={'70%'}
                    clickToPause={true}
                />
            </Grid>
        </Grid>
    )
}
