import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { GridList, GridListTile } from '@material-ui/core'
import Link from 'next/link'

export default function WorkContainer({ images, isActiveWorkInner }) {
    const classes = useStyles()
    const hair = images
        .filter((hair) => {
            return hair.imageTags[0].tags == 'Black_and_White' && !undefined
        })
        .slice(0, 6)
    return (
        <Link href="/work" passHref prefetch={false}>
            <div className={classes.root}>
                <GridList
                    cellHeight={300}
                    className={classes.gridList}
                    cols={2}
                >
                    {hair.map((img) => (
                        <GridListTile
                            className={
                                isActiveWorkInner
                                    ? classes.fadeIn
                                    : classes.hidden
                            }
                            key={img.id}
                            cols={1}
                        >
                            <img src={`${img.image.url}`} alt={img.id} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </Link>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        cursor: 'pointer',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: 865,
        overflow: 'hidden',
    },
    hidden: {
        opacity: 0,
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
}))
