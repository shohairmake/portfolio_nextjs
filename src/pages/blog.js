import React from 'react'
import fetch from 'isomorphic-unfetch'
import HeaderList from '../components/header/HeaderList'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import SwipeDrawer from '../components/header/SwipeDrawer'
import BlogContainer from '../components/blog/BlogContainer'
import workLogo from '../../public/static/img/WORK.png'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Hidden } from '@material-ui/core'

export default function blog({ blogs }) {
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
                            <BlogContainer blogs={blogs} />
                        </Grid>
                    </Container>
                </div>
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
        background: 'linear-gradient(to left, #efefbb, #d4d3dd)',
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

export const getStaticProps = async () => {
    const key = {
        headers: { 'X-API-KEY': process.env.API_KEY },
    }
    const res = await fetch(`${process.env.API_END_POINT}/blogs`, key)
    const data = await res.json()

    return {
        props: {
            blogs: data.contents,
        },
    }
}
