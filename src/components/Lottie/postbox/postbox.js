import React from 'react'
import Lottie from 'react-lottie'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import postbox from './postbox.json'
import Link from 'next/link'

const useStyles = makeStyles({
    hide: {
        opacity: 0,
    },
    container: {
        cursor: 'pointer',
        animation: '$fade-in-top 2s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    },
    font: {
        fontSize: '3rem',
        color: '#fff',
        fontWeight: '300',
        lineHeight: '2.5',
        '@media (max-width:600px)': {
            fontSize: '2em',
            lineHeight: '4.5',
        },
    },
    '@keyframes fade-in-top': {
        '0%': {
            transform: 'translateY(-20px)',
            opacity: 0,
        },
        '100%': {
            transform: 'translateY(0)',
            opacity: 1,
        },
    },
})

export default function LottiePostBox({ isMaxWidth, isActiveContact }) {
    const classes = useStyles()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: postbox,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return (
        <Link href="/contact" passHref prefetch={false}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={isActiveContact ? classes.container : classes.hide}
                style={{ filter: 'grayscale(70%)' }}
            >
                <Typography className={classes.font}>
                    Go to Contact Page !!
                </Typography>
                <Lottie
                    options={defaultOptions}
                    height={isMaxWidth ? 200 : 250}
                    width={isMaxWidth ? 200 : 250}
                    clickToPause={true}
                />
            </Grid>
        </Link>
    )
}
