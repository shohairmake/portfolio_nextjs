import React from 'react'
import Lottie from 'react-lottie'
import coffeeAndMan from './coffeeAndMan.json'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { motion } from 'framer-motion'
import Link from 'next/link'

const useStyle = makeStyles({
    message: {
        letterSpacing: '0.2em',
        fontWeight: '100',
    },
})

export default function CoffeeAndMan({ isVisibleCoffeeMan }) {
    const classes = useStyle()

    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.3,
                delay: 2,
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

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: coffeeAndMan,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return (
        <Link href="/contact" passHref prefetch={false}>
            <Grid style={{ cursor: 'pointer' }}>
                {isVisibleCoffeeMan ? (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={list}
                    >
                        <motion.div variants={item}>
                            <Typography
                                variant="h3"
                                align="center"
                                className={classes.message}
                            >
                                Please contact me !!
                            </Typography>
                        </motion.div>
                        <motion.div variants={item}>
                            <Lottie
                                options={defaultOptions}
                                height={'60%'}
                                width={'70%'}
                                clickToPause={true}
                            />
                        </motion.div>
                    </motion.div>
                ) : (
                    ''
                )}
            </Grid>
        </Link>
    )
}
