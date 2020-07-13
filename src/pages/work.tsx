import React, { useEffect, useState } from 'react'
import { NextPage, GetStaticProps } from 'next'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import fetch from 'isomorphic-unfetch'
//components
import { ImageAnimation } from '../components/helper/animationHelper'
import LottieButton from '../components/work/LottieButton'
import { WorkLogo } from '../components/common/topLogoSection'
import { Template } from '../components/common/Template'

// type Prop = Array<{ [key: string]: string }>
type Props = {
    images: { [key: string]: any }[]
}

export const Work: NextPage<Props> = ({ images }) => {
    const [switchImages, setSwitchImages] = useState(0)

    const onClickHandler = (num: number) => (
        event: React.MouseEvent<HTMLInputElement>
    ) => {
        setSwitchImages(num)
    }
    useEffect(() => {
        ImageAnimation('.line', '.image', 0.95, 0)
    }, [switchImages])

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
            <Template color="linear-gradient(to right, #ddd6f3, #faaca8)">
                <WorkLogo />
                <Container>
                    <Grid className={classes.mainContent}>
                        <LottieButton onClickHandler={onClickHandler} />
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
}))

export const getStaticProps: GetStaticProps = async () => {
    const key: { headers: { [key: string]: string | undefined } } | any = {
        headers: { 'X-API-KEY': process.env.API_KEY },
    }
    const res = await fetch(`${process.env.API_END_POINT}/image?limit=30`, key)
    const data = await res.json()

    return {
        props: {
            images: data.contents,
        },
    }
}

export default Work
