import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import Link from 'next/link'
//Lottie
import ProgramingMan from '../Lottie/programingMan/programingMan'

type Props = {
    isActiveAboutInner: boolean
}

export const AboutContainer: React.FC<Props> = ({ isActiveAboutInner }) => {
    const classes = useStyles()
    return (
        <Grid container justify="space-between">
            <Grid className={isActiveAboutInner ? classes.about : classes.hide}>
                <Typography>
                    What is the Hair and Web designer?
                    <br />
                    How does that work ??
                    <br />
                    Let&#39;s go to the About page →
                </Typography>
            </Grid>
            <Link href="/about" passHref prefetch={false}>
                <Grid
                    className={
                        isActiveAboutInner ? classes.lottie : classes.hide
                    }
                >
                    <ProgramingMan />
                </Grid>
            </Link>
        </Grid>
    )
}

const useStyles = makeStyles({
    hide: {
        opacity: 0,
    },
    about: {
        marginLeft: '3em',
        marginTop: '3em',
        '& p': {
            fontSize: '1.3rem',
            fontWeight: '400',
            lineHeight: '3.5',
            color: '#fff',
            letterSpacing: '0.3em',
            animation:
                '$fade-in-top 2s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            '@media (max-width:600px)': {
                color: '#fff',
                fontSize: '1rem',
                letterSpacing: '0.2em',
            },
        },
    },
    lottie: {
        width: '30%',
        marginTop: '10em',
        cursor: 'pointer',
        animation: '$fade-in-top 2s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
        '@media (max-width:600px)': {
            width: 'auto',
            margin: '0 auto',
        },
    },
    '@keyframes fade-in-top': {
        '0%': {
            transform: 'translateY(-20px)',
            opacity: 0,
        },
        '100%': {
            transform: 'translateY(0)',
            opacity: 0.7,
        },
    },
})

export default AboutContainer