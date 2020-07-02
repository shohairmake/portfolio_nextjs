import React from 'react'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
//components
import { BlogLogo } from '../components/common/topLogoSection'
import { Template } from '../components/common/Template'
import BlogContainer from '../components/blog/BlogContainer'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'

export default function Blog({ blogs }) {
    const classes = useStyles()
    return (
        <>
            <Template color="linear-gradient(to left, #efefbb, #d4d3dd)">
                <BlogLogo />
                <Container>
                    <Grid className={classes.mainContent}>
                        <BlogContainer blogs={blogs} />
                    </Grid>
                </Container>
            </Template>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    mainContent: {
        backgroundColor: '#f8f8f8',
        width: '100%',
        height: '100%',
        minHeight: '1000px',
        borderRadius: '20px',
        boxShadow: '1px 1px 5px #fff',
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

Blog.propTypes = {
    blogs: PropTypes.array.isRequired,
}
