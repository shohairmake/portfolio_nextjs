import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { GridList, GridListTile } from '@material-ui/core'
import { tileData } from './tileData'
import Link from 'next/link'
import { ImageAnimation } from '../helper/animationHelper'

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

export default function Album(props) {
    const classes = useStyles()

    React.useEffect(() => {
        if (props.isActive) {
            ImageAnimation('.line', '.img', 1, 0)
        }
    }, [props.isActive])

    return (
        <Link href="/work" passHref prefetch={false}>
            <div className={classes.root}>
                <GridList
                    cellHeight={300}
                    className={classes.gridList}
                    cols={5}
                >
                    {tileData.map((tile) => (
                        <GridListTile
                            className={'imgBox'}
                            key={tile.img}
                            cols={tile.cols || 1}
                        >
                            <span className={`${classes.line} line`}></span>
                            <img
                                className={`${tile.title} img`}
                                src={tile.img}
                                alt={tile.title}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </Link>
    )
}
