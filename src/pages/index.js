import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
//components
import TopContainer from '../components/index/TopContainer'
import WorkContainer from '../components/index/WorkContainer'
import AboutContainer from '../components/index/AboutContainer'
import LogoContainer from '../components/index/LogoContainer'
import LottiePostBox from '../components/Lottie/postbox/postbox'
import { IndexTemplate } from '../components/common/Template'
import { VisibleContainer } from '../components/helper/animationHelper'
// image file
import topImg from '../../public/static/img/uyuniSaltLakemono.jpg'
import workLogo from '../../public/static/img/WORK.png'
import blogLogo from '../../public/static/img/BLOG.png'
import aboutLogo from '../../public/static/img/ABOUT.png'
import contactLogo from '../../public/static/img/CONTACT.png'

export default function Index({ images, blogs }) {
    const classes = useStyles()
    const [state, setState] = useState({
        fadeInWork: classes.hide,
        fadeInBlog: classes.hide,
        fadeInAbout: classes.hide,
        fadeInContact: classes.hide,
    })
    const [isActiveWorkInner, setIsActiveWorkInner] = useState(false)
    const [isActiveAboutInner, setIsActiveAboutInner] = useState(false)
    const [isActiveContact, setIsActiveContact] = useState(false)
    const [isMaxWidth, setIsMaxWith] = useState(false)

    useEffect(() => {
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
                    fadeInWork: classes.imgLogo,
                })
            }
            if (
                document.documentElement.scrollTop > 1200 ||
                document.body.scrollTop > 1200
            ) {
                setState({
                    ...state,
                    fadeInAbout: classes.imgLogo,
                    fadeInBlog: classes.imgLogo,
                })
            }
            if (
                document.documentElement.scrollTop > 1800 ||
                document.body.scrollTop > 1800
            ) {
                setState({
                    ...state,
                    fadeInContact: classes.imgLogoContact,
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
            <IndexTemplate>
                <main>
                    <TopContainer />
                    <Container>
                        <LogoContainer
                            logo={workLogo}
                            alt="work_logo"
                            state={state.fadeInWork}
                        />
                        <VisibleContainer
                            state={isActiveWorkInner}
                            setState={setIsActiveWorkInner}
                        >
                            <WorkContainer
                                images={images}
                                isActiveWorkInner={isActiveWorkInner}
                            />
                        </VisibleContainer>
                        <LogoContainer
                            logo={blogLogo}
                            alt="blog_logo"
                            state={state.fadeInBlog}
                        />
                        <Grid className={classes.container}>blog</Grid>
                        <LogoContainer
                            logo={aboutLogo}
                            alt="about_logo"
                            state={state.fadeInAbout}
                        />
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
                        <LogoContainer
                            logo={contactLogo}
                            alt="contact_logo"
                            state={state.fadeInContact}
                        />
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
            </IndexTemplate>
        </>
    )
}

const useStyles = makeStyles({
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
        animation:
            '$fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        '@media (max-width:600px)': {
            width: '11em',
        },
    },
    imgLogoContact: {
        width: '18em',
        height: 'auto',
        animation:
            '$fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        '@media (max-width:600px)': {
            width: '15em',
        },
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
})

export async function getStaticProps() {
    const key = {
        headers: { 'X-API-KEY': process.env.API_KEY },
    }
    const imageRes = await fetch(
        `${process.env.API_END_POINT}/image?limit=30`,
        key
    )
    const blogRes = await fetch(`${process.env.API_END_POINT}/blogs`, key)
    const imageData = await imageRes.json()
    const blogData = await blogRes.json()

    return {
        props: {
            images: imageData.contents,
            blogs: blogData.contents,
        },
    }
}
