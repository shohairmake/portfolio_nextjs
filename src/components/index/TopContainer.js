import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Hidden, Typography } from '@material-ui/core'
import Logo from '../svg/Logo'
import LottieBall from '../Lottie/ball/LottieBall'
import {
    svgAnimation,
    ImageAnimationWrapper,
    ImageAnimation,
} from '../helper/animationHelper'
import hair from '../../../public/static/img/hair2.jpg'
import topImg from '../../../public/static/img/uyuniSaltLakemono.jpg'

export default function TopContainer() {
    const classes = useStyles()
    const [isMaxWith, setIsMaxWith] = React.useState(false)

    React.useEffect(() => {
        if (window.innerWidth < 600) {
            setIsMaxWith(true)
        }
        svgAnimation()
        ImageAnimation('.line', '.text', 1, 1000)
    }, [])

    return (
        <div className={classes.heroContent}>
            <div className={classes.HeroInner}>
                <Grid className={classes.topUnderCard}>
                    <Grid className={classes.topSecondUnderCard}>
                        <Grid className={classes.topCard}>
                            <Logo
                                className={classes.iconLogo}
                                width={140}
                                height={60}
                            />
                            <LottieBall />
                        </Grid>
                    </Grid>
                </Grid>
                <Hidden xsDown>
                    <Typography variant="h2" className={classes.textAnime}>
                        Hair and Web designer
                    </Typography>
                </Hidden>
                <Hidden smUp>
                    <Typography variant="h2" className={classes.spTextAnime}>
                        Hair and Web designer
                    </Typography>
                </Hidden>
                <Grid
                    container
                    justify="flex-end"
                    className={classes.nameWrapper}
                >
                    <ImageAnimationWrapper
                        width={isMaxWith ? '60%' : '30%'}
                        height="100%"
                        color="#d3d3d3"
                    >
                        <Typography
                            variant={'h5'}
                            className={`${classes.name} text`}
                        >
                            S H O T A N A K A
                        </Typography>
                    </ImageAnimationWrapper>
                </Grid>
            </div>
        </div>
    )
}

const textAnime = {
    textAlign: 'end',
    paddingRight: '3em',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    animation: '$fadeInFromTop 4s',
}

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.default,
        backgroundImage: `url(${topImg})`,
        padding: theme.spacing(8, 0, 6),
        minHeight: '800px',
        width: '100%',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: '0.8',
        overflow: 'hidden',
        animation: '$fadeIn ease-in-out',
    },
    HeroInner: {
        padding: '100px 0',
        width: '100%',
        height: '100%',
    },
    topUnderCard: {
        height: '400px',
        width: '300px',
        backgroundColor: '#fff',
        margin: '0 auto',
        boxShadow: '0 0 8px #696969',
        borderRadius: '10px',
        position: 'relative',
        '@media (max-width:600px)': {
            height: '350px',
            width: '250px',
        },
    },
    topSecondUnderCard: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        margin: '0 auto',
        transform: 'rotate(20deg)',
        borderRadius: '10px',
        position: 'relative',
        backgroundImage: `url(${hair})`,
        backgroundSize: 'cover',
        animation: '$fadeIn ease-in-out 2s',
    },
    topCard: {
        height: '85%',
        width: '80%',
        backgroundColor: '#fff',
        position: 'absolute',
        transform: 'rotate(-20deg) translate(-22%,-60%)',
        top: '50%',
        left: '50%',
        boxShadow: '0 0 8px #696969',
        animation: '$fadeIn ease-in-out 5s',
    },
    iconLogo: {
        position: 'absolute',
        top: '20%',
        left: '50%',
    },
    textAnime: {
        ...textAnime,
        fontSize: '1em',
        marginTop: '-230px',
    },
    spTextAnime: {
        ...textAnime,
        fontSize: '1em',
        marginTop: '80px',
    },
    nameWrapper: {
        marginTop: '3.5em',
    },
    name: {
        textAlign: 'end',
        marginRight: '3.5rem',
        '@media (max-width:600px)': {
            marginRight: '3rem',
            fontSize: '1.2rem',
        },
    },
    '@keyframes fadeIn': {
        from: {
            opacity: '0',
        },
        to: {
            opacity: '1',
        },
    },
    '@keyframes fadeInFromTop': {
        '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
        },
        '100%': {
            transform: 'translateY(0px)',
            opacity: '1',
        },
    },
}))
