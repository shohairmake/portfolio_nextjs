import React from 'react'
import { Container, Grid, Hidden, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import HeaderList from '../components/header/HeaderList'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import TopContainer from '../components/index/TopContainer'
import SwipeDrawer from '../components/header/SwipeDrawer'
import WorkContainer from '../components/index/WorkContainer'
import AboutContainer from '../components/index/AboutContainer'
import LottiePostBox from '../components/Lottie/postbox/postbox'
import fetch from 'isomorphic-unfetch'
import { VisibleContainer } from '../components/helper/animationHelper'
// image file
import topImg from '../../public/static/img/uyuniSaltLakemono.jpg'
import workLogo from '../../public/static/img/WORK.png'
import aboutLogo from '../../public/static/img/ABOUT.png'
import contactLogo from '../../public/static/img/CONTACT.png'

export default function Index({ images }) {
    const classes = useStyles()
    const [state, setState] = React.useState({
        fadeInWork: classes.hide,
        fadeInAbout: classes.hide,
        fadeInContact: classes.hide,
    })
    const [isActiveWorkInner, setIsActiveWorkInner] = React.useState(false)
    const [isActiveAboutInner, setIsActiveAboutInner] = React.useState(false)
    const [isActiveContact, setIsActiveContact] = React.useState(false)
    const [isMaxWidth, setIsMaxWith] = React.useState(false)

    React.useEffect(() => {
        if (window.innerWidth < 600) {
            setIsMaxWith(true)
        }
        const scrollAction = () => {
            if (
                document.documentElement.scrollTop > 240 ||
                document.body.scrollTop > 240
            ) {
                setState({
                    ...state,
                    fadeInWork: `${classes.imgLogo} ${classes.fadeInDown}`,
                })
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
                    <VisibleContainer
                        state={isActiveWorkInner}
                        setState={setIsActiveWorkInner}
                    >
                        <WorkContainer
                            images={images}
                            isActiveWorkInner={isActiveWorkInner}
                        />
                    </VisibleContainer>
                    <Grid className={classes.gap}>
                        <Grid>
                            <img
                                className={state.fadeInAbout}
                                src={aboutLogo}
                                alt="about_logo"
                            />
                        </Grid>
                    </Grid>
                    <Grid className={classes.container}>
                        <VisibleContainer
                            state={isActiveAboutInner}
                            setState={setIsActiveAboutInner}
                        >
                            <AboutContainer
                                isActiveAboutInner={isActiveAboutInner}
                            />
                        </VisibleContainer>
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
                    <Grid className={classes.container}>
                        <Grid className={classes.inner}>
                            <VisibleContainer
                                state={isActiveContact}
                                setState={setIsActiveContact}
                            >
                                <LottiePostBox
                                    isMaxWidth={isMaxWidth}
                                    isActiveContact={isActiveContact}
                                />
                            </VisibleContainer>
                        </Grid>
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
    container: {
        width: '100%',
        height: 'auto',
    },
    inner: {
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

export async function getStaticProps() {
    const key = {
        headers: { 'X-API-KEY': process.env.API_KEY },
    }
    const res = await fetch(`${process.env.API_END_POINT}/image?limit=30`, key)
    const data = await res.json()

    return {
        props: {
            images: data.contents,
        },
    }
}
