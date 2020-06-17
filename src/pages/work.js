import React from 'react'
import HeaderList from '../components/header/HeaderList'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import SwipeDrawer from '../components/header/SwipeDrawer'
import LottieCamera from '../components/Lottie/camera/camera'
import LottiePc from '../components/Lottie/pcScreen/pcScreen'
import workLogo from '../../public/static/img/WORK.png'
import { Container, Grid, Hidden, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LottieNoteAndPen from '../components/Lottie/noteAndPen/noteAndPen'
import fetch from 'isomorphic-unfetch'
import { ImageAnimation } from '../components/helper/animationHelper'

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6),
        minHeight: '800px',
        width: '100%',
        background: 'linear-gradient(to right, #ddd6f3, #faaca8)',
        overflow: 'hidden',
    },
    mainContent: {
        backgroundColor: '#f8f8f8',
        width: '100%',
        height: '100%',
        minHeight: '1000px',
        borderRadius: '20px',
        boxShadow: '1px 1px 5px #fff',
    },
    gap: {
        width: '100%',
        height: '13rem',
        display: 'table',
        textAlign: 'center',
        '@media (max-width:600px)': {
            height: '8rem',
        },
        '& div': {
            display: 'table-cell',
            verticalAlign: 'middle',
            '& img': {
                zIndex: 1,
                position: 'relative',
                opacity: 0.7,
                animation:
                    '$fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
            },
            '& hr': {
                width: '100%',
                height: '1.5em',
                backgroundColor: '#fff',
                borderWidth: 'inherit',
                borderStyle: 'none',
                transform: 'translateY(-60px)',
                zIndex: 0,
                opacity: 0.7,
                '@media (max-width:600px)': {
                    height: '1em',
                    transform: 'translateY(-50px)',
                },
            },
        },
    },
    imgLogo: {
        width: '14em',
        height: 'auto',
        '@media (max-width:600px)': {
            width: '11em',
        },
    },
    images: {
        width: '100%',
        height: '100%',
        marginTop: '100px',
        marginBottom: '50px',
        paddingBottom: '100px',
        overflow: 'hidden',
    },
    image: {
        margin: '10px 0',
    },
    line: {
        opacity: 0,
        position: 'absolute',
        left: 0,
        height: '100%',
        width: '5px',
        backgroundColor: '#9e9e9e',
        transformOrigin: '0 50%',
        zIndex: 100,
    },
    button: {
        borderRadius: '30px',
        border: '2px solid',
        fontSize: '1em',
        '@media (max-width:600px)': {
            fontSize: '0.875em',
            transform: 'scale(0.8)',
        },
    },
    '@keyframes fade-in-top': {
        '0%': {
            transform: 'translateY(-30px)',
            opacity: 0,
        },
        '100%': {
            transform: 'translateY(0)',
            opacity: 0.7,
        },
    },
}))

export default function work({ images }) {
    const [switchImages, setSwitchImages] = React.useState(0)

    React.useEffect(() => {
        ImageAnimation('.line', '.image', 0.95, 0)
    }, [switchImages])

    const onClickHandler = (num) => (event) => {
        setSwitchImages(num)
    }

    const hair = images.filter((hair) => {
        return hair.imageTags[0].tags == 'Black_and_White' && !undefined
    })
    const web = images.filter((web) => {
        return web.imageTags[0].tags == 'color' && !undefined
    })
    const other = images.filter((other) => {
        return other.imageTags[0].tags == 'other' && !undefined
    })
    const imageStore = [hair, web, other]
    const classes = useStyles()
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
                    <Grid className={classes.gap}>
                        <Grid>
                            <img
                                className={classes.imgLogo}
                                src={workLogo}
                                alt="work_logo"
                            />
                            <hr />
                        </Grid>
                    </Grid>
                    <Container>
                        <Grid className={classes.mainContent}>
                            <div style={{ paddingTop: '50px' }}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-evenly"
                                    alignItems="center"
                                >
                                    <Button
                                        variant="outlined"
                                        color="default"
                                        startIcon={<LottieCamera />}
                                        className={classes.button}
                                        onClick={onClickHandler(0)}
                                    >
                                        Hair
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        startIcon={<LottiePc />}
                                        className={classes.button}
                                        onClick={onClickHandler(1)}
                                    >
                                        Web
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        startIcon={<LottieNoteAndPen />}
                                        className={classes.button}
                                        onClick={onClickHandler(2)}
                                    >
                                        Other
                                    </Button>
                                </Grid>
                            </div>
                            <Grid
                                container
                                justify="space-evenly"
                                direction="row"
                                className={`${classes.images} imageContainer`}
                            >
                                {imageStore[switchImages].map((img) => (
                                    <div
                                        style={{
                                            position: 'relative',
                                            width: '300px',
                                            height: '320px',
                                            overflow: 'hidden',
                                        }}
                                        key={img.id}
                                    >
                                        <span
                                            className={`${classes.line} line`}
                                        ></span>
                                        <img
                                            className={`${classes.image} image`}
                                            src={`${img.image.url}?fit=crop&${
                                                img.imageTags[1]
                                                    ? 'w=600&h=400'
                                                    : 'w=300&h=300'
                                            }`}
                                            alt={img.id}
                                        />
                                    </div>
                                ))}
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>
            <Footer description="Hair and Web designer" />
        </>
    )
}

export async function getStaticProps() {
    const key = {
        headers: { 'X-API-KEY': `153a760c-581f-4ed2-8864-46407e0d8d54` },
    }
    const res = await fetch(
        `https://strad.microcms.io/api/v1/image?limit=30`,
        key
    )
    const data = await res.json()

    return {
        props: {
            images: data.contents,
        },
    }
}
