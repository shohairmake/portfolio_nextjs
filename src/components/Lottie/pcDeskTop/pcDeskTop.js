import React from 'react'
import Lottie from 'react-lottie'
import pcDeskTop from './pcDeskTop.json'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

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
            className={classes.name}
        >
            <Grid item xs={6}>
                <Typography variant={'h6'} align="center" noWrap={true}>
                    Hair & Web Designer
                </Typography>
                <Typography variant={'h5'} align="center">
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

const useStyle = makeStyles({
    name: {
        marginLeft: '1.5em',
        '& h6': {
            fontWeight: 400,
            letterSpacing: '0.1em',
            '@media (max-width:600px)': {
                fontSize: '0.7em',
            },
        },
        '& h5': {
            letterSpacing: '0.5em',
            marginTop: '0.5em',
        },
    },
})
