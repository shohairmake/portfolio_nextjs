import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { GridList, GridListTile } from '@material-ui/core'
import Link from 'next/link'
import { ImageAnimation } from '../../helper/animationHelper'

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
    line: {
        opacity: 0,
        position: 'absolute',
        left: 0,
        height: '100%',
        width: '5px',
        backgroundColor: '#000',
        transformOrigin: '0 50%',
        zIndex: 100,
    },
}))

export default function Album({ isActive, images }) {
    const classes = useStyles()

    const hair = images
        .filter((hair) => {
            return hair.imageTags[0].tags == 'Black_and_White' && !undefined
        })
        .slice(0, 6)

    React.useEffect(() => {
        ImageAnimation('.line', '.img', 1, 3000)
    }, [isActive])

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
                            className={`imgBox`}
                            key={img.id}
                            cols={1}
                        >
                            <span className={`${classes.line} line`}></span>
                            <img
                                className="img"
                                src={`${img.image.url}`}
                                alt={img.id}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </Link>
    )
}
