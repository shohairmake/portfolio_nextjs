import React from 'react'
import { Container, Grid, Hidden, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import HeaderList from '../components/header/HeaderList'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import ProgramingMan from '../components/Lottie/programingMan/programingMan'
import TopContainer from '../components/index/TopContainer'
import topImg from '../../public/static/img/uyuniSaltLakemono.jpg'
import SwipeDrawer from '../components/header/SwipeDrawer'
import Album from '../components/Album/Album'
// image file
import workLogo from '../../public/static/img/WORK.png'
import aboutLogo from '../../public/static/img/ABOUT.png'
import contactLogo from '../../public/static/img/CONTACT.png'

export default function Index() {
    const classes = useStyles()
    const [state, setState] = React.useState({
        fadeInWork: classes.hide,
        fadeInAbout: classes.hide,
        fadeInContact: classes.hide,
    })
    const [isActive, setIsActive] = React.useState(false)
    const [isActiveAboutInner, setIsActiveAboutInner] = React.useState(false)

    React.useEffect(() => {
        const scrollAction = () => {
            if (
                document.documentElement.scrollTop > 240 ||
                document.body.scrollTop > 240
            ) {
                setState({
                    ...state,
                    fadeInWork: `${classes.imgLogo} ${classes.fadeInDown}`,
                })
                setIsActive(true)
            }
            if (
                document.documentElement.scrollTop > 1200 ||
                document.body.scrollTop > 1200
            ) {
                setState({
                    ...state,
                    fadeInAbout: `${classes.imgLogo} ${classes.fadeInDown}`,
                })
                setIsActiveAboutInner(true)
            }
            if (
                document.documentElement.scrollTop > 1800 ||
                document.body.scrollTop > 1800
            ) {
                setState({
                    ...state,
                    fadeInContact: `${classes.imgLogoContact} ${classes.fadeInDown}`,
                })
            }
        }
        window.addEventListener('scroll', scrollAction)
        return function cleanup() {
            window.removeEventListener('scroll', scrollAction)
        }
    })

    return (
        <>
            <Header>
                <Hidden smUp>
                    <SwipeDrawer />
                </Hidden>
                <Hidden xsDown>
                    <HeaderList />
                </Hidden>
            </Header>
            <main>
                <TopContainer />
                <Container>
                    <Grid className={classes.gap}>
                        <Grid>
                            <img
                                className={state.fadeInWork}
                                src={workLogo}
                                alt="work_logo"
                            />
                        </Grid>
                    </Grid>
                    <Album isActive={isActive} />
                    <Grid className={classes.gap}>
                        <Grid>
                            <img
                                className={state.fadeInAbout}
                                src={aboutLogo}
                                alt="about_logo"
                            />
                        </Grid>
                    </Grid>
                    <Grid className={classes.parallax}>
                        <Grid
                            container
                            alignContent="space-between"
                            className={classes.parallaxInner}
                        >
                            <Grid
                                className={
                                    isActiveAboutInner
                                        ? classes.about
                                        : classes.hide
                                }
                            >
                                <Typography>
                                    What is the Hair and Web designer?
                                    <br />
                                    How do that work ??
                                    <br />
                                    Let&apos;s go to the contact page →
                                </Typography>
                            </Grid>
                            <Grid
                                className={
                                    isActiveAboutInner
                                        ? classes.lottie
                                        : classes.hide
                                }
                            >
                                <ProgramingMan />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.gap}>
                        <Grid>
                            <img
                                className={state.fadeInContact}
                                src={contactLogo}
                                alt="contact_logo"
                            />
                        </Grid>
                    </Grid>
                    <Grid className={classes.parallax}>
                        <Grid className={classes.parallaxInner} />
                    </Grid>
                </Container>
            </main>
            <Footer description="Hair and Web designer" />
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    about: {
        marginLeft: '1em',
        animation:
            '$fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s',
        '& p': {
            fontSize: '1.3rem',
            fontWeight: 900,
            lineHeight: 3.5,
            color: '#525252',
            letterSpacing: '0.3em',
        },
    },
    lottie: {
        width: '30%',
        marginTop: '10em',
        animation:
            '$fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1.2s',
    },
    gap: {
        width: '100%',
        height: '200px',
        display: 'table',
        textAlign: 'center',
        '& div': {
            display: 'table-cell',
            verticalAlign: 'middle',
        },
    },
    parallax: {
        width: '100%',
        height: 'auto',
    },
    parallaxInner: {
        backgroundImage: `url(${topImg})`,
        minHeight: '400px',
    },
    imgLogo: {
        width: '14em',
        height: 'auto',
        '@media (max-width:600px)': {
            width: '11em',
        },
    },
    imgLogoContact: {
        width: '18em',
        height: 'auto',
        '@media (max-width:600px)': {
            width: '15em',
        },
    },
    fadeInDown: {
        animation:
            '$fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
    },
    hide: {
        opacity: 0,
    },
    '@keyframes fade-in-top': {
        '0%': {
            transform: 'translateY(-50px)',
            opacity: 0,
        },
        '100%': {
            transform: 'translateY(0)',
            opacity: 0.7,
        },
    },
}))
