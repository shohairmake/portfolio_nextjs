import React from 'react'
import fetch from 'isomorphic-unfetch'
import HeaderList from '../../components/header/HeaderList'
import Header from '../../components/header/Header'
import Footer from '../../components/Footer'
import SwipeDrawer from '../../components/header/SwipeDrawer'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Hidden, Typography } from '@material-ui/core'

export default function blogId({ blog }) {
    const classes = useStyles()
    const Image = ({ image }) => (
        <img src={image.url} className={classes.image} />
    )
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
                    <Container>
                        <Grid
                            container
                            alignItems="center"
                            justify="center"
                            className={classes.mainContent}
                        >
                            <Grid className={classes.mainContentInner}>
                                <Grid
                                    container
                                    alignItems="center"
                                    justify="center"
                                >
                                    {typeof blog.image === 'undefined' ? (
                                        ''
                                    ) : (
                                        <Image image={blog.image} />
                                    )}
                                </Grid>
                                <div>
                                    <Typography
                                        variant={'h2'}
                                        align="center"
                                        className={classes.title}
                                    >
                                        {blog.title}
                                    </Typography>
                                    <div>
                                        {blog.tags.map((tag) => (
                                            <React.Fragment key={tag.id}>
                                                <Typography
                                                    variant={'h6'}
                                                    align="right"
                                                    className={classes.tag}
                                                >
                                                    {tag.name}
                                                </Typography>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <Typography
                                        variant={'h4'}
                                        align="center"
                                        className={classes.body}
                                    >
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: `${blog.body}`,
                                            }}
                                        ></div>
                                    </Typography>
                                </div>
                            </Grid>
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
        paddingTop: '8%',
        width: '100%',
        background: 'linear-gradient(to left, #efefbb, #d4d3dd)',
        overflow: 'hidden',
    },
    mainContent: {
        backgroundColor: '#f8f8f8',
        width: '100%',
        height: '100%',
        minHeight: '40rem',
        borderRadius: '20px',
        boxShadow: '1px 1px 5px #fff',
    },
    mainContentInner: {
        width: '90%',
        height: '90%',
        overflowWrap: 'break-word',
    },
    title: {
        paddingTop: '1em',
    },
    tag: {
        paddingTop: '1em',
        paddingRight: '10em',
    },
    body: {
        paddingBottom: '10rem',
        paddingTop: '5rem',
        letterSpacing: '0.1em',
        lineHeight: '2em',
    },
    image: {
        width: '30%',
        marginTop: '3em',
    },
}))

export const getStaticPaths = async () => {
    const key = {
        headers: { 'X-API-KEY': process.env.API_KEY },
    }

    const res = await fetch(`${process.env.API_END_POINT}/blogs`, key)
    const repos = await res.json()

    const paths = repos.contents.map((repo) => `/blogs/${repo.id}`)
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const id = context.params.id

    const key = {
        headers: { 'X-API-KEY': process.env.API_KEY },
    }

    const res = await fetch(`${process.env.API_END_POINT}/blogs/${id}`, key)
    const blog = await res.json()

    return {
        props: {
            blog: blog,
        },
    }
}
