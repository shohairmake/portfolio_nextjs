import React from 'react'
import { Container, Grid, Hidden, Typography } from '@material-ui/core'
import HeaderList from '../components/header/HeaderList'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import { makeStyles } from '@material-ui/core/styles'
import topImg from '../../static/img/uyuniSaltLakemono.jpg'
import hair from '../../static/img/hair2.jpg'
import SwipeDrawer from '../components/header/SwipeDrawer'
import Album from '../components/Album/Album'
import Logo from '../components/svg/Logo'
import anime from 'animejs'
import LottieBall from '../components/Lottie/ball/LottieBall'
import workLogo from '../../static/img/WORK.png'
import aboutLogo from '../../static/img/ABOUT.png'
import contactLogo from '../../static/img/CONTACT.png'
import VisibilitySensor from 'react-visibility-sensor'

const svgAnimation = () => {
    anime({
        targets: 'svg path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        fill: ['rgba(0,0,0,0)', '#000'],
        delay: function (el, i) {
            return i * 500
        },
    })
}

export default function Index(props) {
    const classes = useStyles()
    const [state, setState] = React.useState({
        fadeInWork: classes.hide,
        fadeInAbout: classes.hide,
        fadeInContact: classes.hide,
    })
    const [isActive, setIsActive] = React.useState(false)

    React.useEffect(() => {
        const scrollAction = () => {
            // console.log(
            //     'documentElement.scrollTop',
            //     document.documentElement.scrollTop
            // );
            // console.log('body.scrollTop', document.body.scrollTop);
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

    React.useEffect(() => {
        svgAnimation()
    }, [])

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
                            <Typography
                                variant="h2"
                                className={classes.textAnime}
                            >
                                Hair and Web designer
                            </Typography>
                        </Hidden>
                        <Hidden smUp>
                            <Typography
                                variant="h2"
                                className={classes.spTextAnime}
                            >
                                Hair and Web designer
                            </Typography>
                        </Hidden>
                    </div>
                </div>
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
                        <Grid className={classes.parallaxInner} />
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

const textAnime = {
    textAlign: 'end',
    paddingRight: '30px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    animation: '$tilt-in-tr 5s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
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
        // animation: '$fadeIn ease-in-out',
    },
    HeroInner: {
        padding: '100px 0',
        width: '100%',
        height: '100%',
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
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
    topUnderCard: {
        height: '400px',
        width: '300px',
        backgroundColor: '#fff',
        margin: '0 auto',
        boxShadow: '0 0 8px #696969',
        borderRadius: '10px',
        position: 'relative',
    },
    topSecondUnderCard: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        margin: '0 auto',
        transform: 'rotate(20deg)',
        overflow: 'hidden',
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
    textAnime: {
        ...textAnime,
        fontSize: '1em',
        marginTop: '-230px',
    },
    spTextAnime: {
        ...textAnime,
        fontSize: '1.2em',
        marginTop: '80px',
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
    '@keyframes fadeIn': {
        from: {
            opacity: '0',
        },
        to: {
            opacity: '1',
        },
    },
    '@keyframes tilt-in-tr': {
        '0%': {
            opacity: '0',
        },
        '50%': {
            transform:
                'rotateY(-3deg) rotateX(2deg) translate(25px, -25px) skew(-1deg, -1deg)',
            opacity: '0',
        },
        '100%': {
            transform:
                'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)',
            opacity: '1',
        },
    },
}))
