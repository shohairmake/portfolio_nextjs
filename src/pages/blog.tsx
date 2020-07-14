import React from 'react'
import fetch from 'isomorphic-unfetch'
import { GetStaticProps } from 'next'
//components
import { BlogLogo } from '../components/common/topLogoSection'
import { Template } from '../components/common/Template'
import BlogContainer from '../components/blog/BlogContainer'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'

type Props = {
    blogs: {
        id: string
        createdAt: Date
        updatedAt: Date
        publishedAt: string
        title: string
        body: string
        tags: string[]
        image: {
            url: string
        }
    }[]
}

export const Blog = ({ blogs }: Props) => {
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

const useStyles = makeStyles({
    mainContent: {
        backgroundColor: '#f8f8f8',
        width: '100%',
        height: '100%',
        minHeight: '1000px',
        borderRadius: '20px',
        boxShadow: '1px 1px 5px #fff',
    },
})

export const getStaticProps: GetStaticProps = async () => {
    const key: any = {
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

export default Blog
