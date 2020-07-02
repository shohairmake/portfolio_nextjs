import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import PropTypes from 'prop-types'
import Link from 'next/link'

const imgEscapeUrl =
    'https://images.microcms-assets.io/protected/ap-northeast-1:ce724cba-2fc5-43d8-8189-04c7e1e5975e/service/strad/media/hair9.jpg'

export default function BlogContainer({ blogs }) {
    const classes = useStyles()

    return (
        <>
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {blogs.map((blog) => (
                            <Grid item key={blog.id} xs={12} sm={4} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={
                                            typeof blog.image === 'undefined'
                                                ? imgEscapeUrl
                                                : blog.image.url
                                        }
                                        title="blog.title"
                                    />
                                    <Link
                                        href="/blogs/[id]"
                                        as={`blogs/${blog.id}`}
                                        passHref
                                    >
                                        <CardContent
                                            className={classes.cardContent}
                                        >
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h3"
                                                className={classes.blogTitle}
                                            >
                                                {blog.title}
                                            </Typography>
                                            {/* 本文
                                            <Typography>
                                                {blog.body.replace(
                                                    /<("[^"]*"|'[^']*'|[^'">])*>/g,
                                                    ''
                                                )}
                                            </Typography> */}
                                        </CardContent>
                                    </Link>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '100%',
        // paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
        cursor: 'pointer',
    },
    blogTitle: {
        fontSize: '1.5rem',
        fontWeight: '400',
        '@media (max-width:600px)': {
            fontSize: '1rem',
        },
    },
}))

BlogContainer.propTypes = {
    blogs: PropTypes.array.isRequired,
}
