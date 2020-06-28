import React, { useState, useEffect } from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
//components
import { AboutLogo } from '../components/common/topLogoSection'
import { Template } from '../components/common/Template'
import LottiePcDeskTop from '../components/Lottie/pcDeskTop/pcDeskTop'
import CoffeeAndMan from '../components/Lottie/coffeeAndMan/coffeeAndMan'
import {
    ImageAnimation,
    VisibleContainer,
} from '../components/helper/animationHelper'
import {
    HeroText,
    Description,
    SkillList,
    MessageText,
} from '../components/about/InnerText'

export default function about() {
    const [isVisible, setIsVisible] = useState(false)
    const [isVisibleSkills, setIsVisibleSkills] = useState(false)
    const [isVisibleCoffeeMan, setIsVisibleCoffeeMan] = useState(false)
    const classes = useStyles()

    useEffect(() => {
        ImageAnimation('.line', '.text', 1, 1000)
        console.log(isVisibleSkills)
    }, [])
    return (
        <>
            <Template color="linear-gradient(to left, #a8edea 0%, #fed6e3 100%)">
                <AboutLogo />
                <Container>
                    <Grid className={classes.mainContent}>
                        <HeroText />
                        <Grid container justify="flex-end" alignItems="center">
                            <LottiePcDeskTop />
                        </Grid>
                        <VisibleContainer
                            state={isVisible}
                            setState={setIsVisible}
                            animeClass={classes.fadeIn}
                        >
                            <Description />
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
                            <SkillList isVisibleSkills={isVisibleSkills} />
                        </Grid>
                        <Grid>
                            <VisibleContainer
                                state={isVisibleCoffeeMan}
                                setState={setIsVisibleCoffeeMan}
                            >
                                <MessageText />
                            </VisibleContainer>
                        </Grid>
                        <CoffeeAndMan isVisibleCoffeeMan={isVisibleCoffeeMan} />
                    </Grid>
                </Container>
            </Template>
        </>
    )
}

const useStyles = makeStyles({
    mainContent: {
        backgroundColor: '#fff',
        opacity: '0.9',
        width: '100%',
        height: '100%',
        minHeight: '1000px',
        borderRadius: '20px',
        boxShadow: '1px 1px 5px #fff',
    },
    skillWrapper: {
        marginBottom: '10em',
        '@media (max-width:600px)': {
            marginBottom: '5em',
        },
    },
    fadeIn: {
        animation: '$fadeIn 2s ease-in-out',
    },
    '@keyframes fadeIn': {
        from: {
            opacity: '0',
        },
        to: {
            opacity: '1',
        },
    },
})
