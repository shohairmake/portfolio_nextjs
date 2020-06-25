import React from 'react'
import HeaderList from '../components/header/HeaderList'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import SwipeDrawer from '../components/header/SwipeDrawer'
import aboutLogo from '../../public/static/img/ABOUT.png'
import { Container, Grid, Hidden, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LottiePcDeskTop from '../components/Lottie/pcDeskTop/pcDeskTop'
import CoffeeAndMan from '../components/Lottie/coffeeAndMan/coffeeAndMan'
import {
    ImageAnimation,
    ImageAnimationWrapper,
    VisibleContainer,
} from '../components/helper/animationHelper'
import { motion } from 'framer-motion'

const skills = [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Vue.js',
    'Next.js',
    'Gatsby.js',
    'Node.js',
    'Redux',
    'Flutter',
    'WordPress etc.',
]

export default function about() {
    const [isVisible, setIsVisible] = React.useState(false)
    const [isVisibleSkills, setIsVisibleSkills] = React.useState(false)
    const [isVisibleCoffeeMan, setIsVisibleCoffeeMan] = React.useState(false)
    const classes = useStyles()
    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.3,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: 'afterChildren',
            },
        },
    }

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }

    React.useEffect(() => {
        ImageAnimation('.line', '.text', 1, 1000)
        console.log(isVisibleSkills)
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
                <motion.div anime className={classes.heroContent}>
                    <Grid className={classes.gap}>
                        <Grid>
                            <img
                                className={classes.imgLogo}
                                src={aboutLogo}
                                alt="about_logo"
                            />
                            <hr />
                        </Grid>
                    </Grid>
                    <Container>
                        <Grid className={classes.mainContent}>
                            <Grid className={classes.heroText}>
                                <Typography variant={'h2'}>
                                    shaping your Identity <br />
                                    with design.
                                </Typography>
                                <ImageAnimationWrapper
                                    width="70%"
                                    height="100%"
                                    color="#000"
                                >
                                    <Typography
                                        variant={'h5'}
                                        className={'text'}
                                        noWrap={true}
                                    >
                                        アイデンティティをデザインする
                                    </Typography>
                                </ImageAnimationWrapper>
                            </Grid>
                            <Grid
                                container
                                justify="flex-end"
                                alignItems="center"
                            >
                                <LottiePcDeskTop />
                            </Grid>
                            <VisibleContainer
                                state={isVisible}
                                setState={setIsVisible}
                                animeClass={classes.fadeIn}
                            >
                                <Grid>
                                    <Typography
                                        variant={'h5'}
                                        className={classes.description}
                                    >
                                        美容師、ヘアメイク、エンジニア
                                        <br />
                                        全て 探究心が必要な職業
                                        <br />
                                        日々、自己研鑽が必要な職業
                                        <br />
                                        この職人気質な世界に僕は魅了された
                                        <br />
                                        異色のパラレルキャリア
                                        <br />
                                        貴方の仕事のお手伝いをさせて下さい。
                                        <br />
                                    </Typography>
                                </Grid>
                            </VisibleContainer>
                            <Grid className={classes.skillWrapper}>
                                <Grid
                                    container
                                    justify="center"
                                    alignItems="center"
                                    style={{ marginBottom: '2em' }}
                                >
                                    <VisibleContainer
                                        state={isVisibleSkills}
                                        setState={setIsVisibleSkills}
                                    >
                                        <Typography variant={'h2'}>
                                            SKILL
                                        </Typography>
                                    </VisibleContainer>
                                </Grid>
                                <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                >
                                    {isVisibleSkills ? (
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            variants={list}
                                        >
                                            {skills.map((skill) => (
                                                <Typography
                                                    variant={'h6'}
                                                    align="center"
                                                    className={
                                                        classes.skillDescription
                                                    }
                                                >
                                                    <motion.div
                                                        variants={item}
                                                        key={item}
                                                    >
                                                        {skill}
                                                    </motion.div>
                                                </Typography>
                                            ))}
                                        </motion.div>
                                    ) : (
                                        ''
                                    )}
                                </Grid>
                            </Grid>
                            <Grid>
                                <VisibleContainer
                                    state={isVisibleCoffeeMan}
                                    setState={setIsVisibleCoffeeMan}
                                >
                                    <Typography
                                        variant={'h5'}
                                        className={classes.description}
                                    >
                                        基本的にはフロントエンドエンジニア
                                        <br />
                                        ですが、容貌次第でなんでもやります。
                                        <br />
                                        提案力、コミュニケーション能力には
                                        <br />
                                        自信があります。
                                        <br />
                                        一度、ご相談ください。
                                    </Typography>
                                </VisibleContainer>
                            </Grid>
                            <CoffeeAndMan
                                isVisibleCoffeeMan={isVisibleCoffeeMan}
                            />
                        </Grid>
                    </Container>
                </motion.div>
            </main>
            <Footer description="Hair and Web designer" />
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6),
        minHeight: '800px',
        width: '100%',
        background: 'linear-gradient(to left, #a8edea 0%, #fed6e3 100%)',
        overflow: 'hidden',
    },
    mainContent: {
        backgroundColor: '#fff',
        opacity: '0.9',
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
    heroText: {
        paddingTop: '20px',
        paddingLeft: '30px',
        animation: '$fadeIn 1s ease-in-out',
        '& h2': {
            fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '0.2em',
            marginBottom: '1em',
        },
        '& h5': {
            zIndex: 1,
            letterSpacing: '0.5em',
            '@media (max-width:600px)': {
                letterSpacing: '0',
            },
        },
    },
    description: {
        letterSpacing: '0.5em',
        lineHeight: 4,
        marginLeft: '1.5em',
        marginTop: '2.5em',
        paddingBottom: '6em',
    },
    skillWrapper: {
        marginBottom: '10em',
        '@media (max-width:600px)': {
            marginBottom: '5em',
        },
    },
    skillDescription: {
        letterSpacing: '0.3em',
        fontWeight: 400,
        lineHeight: '2.5em',
        '@media (max-width:600px)': {
            fontSize: '0.7em',
        },
    },
    fadeIn: {
        animation: '$fadeIn 2s ease-in-out',
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
    '@keyframes scale-in': {
        '0%': {
            transform: 'scale(2,0.5)',
            opacity: 0,
        },
        '50%': {
            transform: 'scale(1.5,1)',
            opacity: 0.4,
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
}))
