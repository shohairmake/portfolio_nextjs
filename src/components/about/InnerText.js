import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ImageAnimationWrapper } from '../helper/animationHelper'
import { motion } from 'framer-motion'

export const HeroText = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.heroText}>
            <Typography variant={'h2'}>
                shaping your Identity <br />
                with design.
            </Typography>
            <ImageAnimationWrapper width="70%" height="100%" color="#000">
                <Typography variant={'h5'} className={'text'} noWrap={true}>
                    アイデンティティをデザインする
                </Typography>
            </ImageAnimationWrapper>
        </Grid>
    )
}

export const Description = () => {
    const classes = useStyles()
    return (
        <Grid>
            <Typography variant={'h5'} className={classes.description}>
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
    )
}

export const SkillList = ({ isVisibleSkills }) => {
    const classes = useStyles()
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
    return (
        <Grid container direction="column" justify="center" alignItems="center">
            {isVisibleSkills ? (
                <motion.div initial="hidden" animate="visible" variants={list}>
                    {skills.map((skill) => (
                        <Typography
                            variant={'h6'}
                            align="center"
                            className={classes.skillDescription}
                        >
                            <motion.div variants={item} key={item}>
                                {skill}
                            </motion.div>
                        </Typography>
                    ))}
                </motion.div>
            ) : (
                ''
            )}
        </Grid>
    )
}

export const MessageText = () => {
    const classes = useStyles()
    return (
        <Typography variant={'h5'} className={classes.description}>
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
    )
}

const useStyles = makeStyles((theme) => ({
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
    skillDescription: {
        letterSpacing: '0.3em',
        fontWeight: 400,
        lineHeight: '2.5em',
        '@media (max-width:600px)': {
            fontSize: '0.7em',
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
