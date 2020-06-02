import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { tileData } from './tileData';
import Link from 'next/link';
import anime from 'animejs';

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
}));

const ImageAnimation = (box, line, element) => {
    anime
        .timeline({ loop: false })
        .add({
            targets: line,
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: 'easeOutExpo',
            duration: 700,
        })
        .add({
            targets: line,
            left: 0,
            width: '100%',
            easing: 'easeOutExpo',
            duration: 700,
            delay: 100,
        })
        .add({
            targets: line,
            right: 0,
            translateX: '100%',
            easing: 'easeOutExpo',
            duration: 700,
            delay: 100,
        })
        .add(
            {
                targets: element,
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 600,
            },
            '-=1000'
        )
        .add({
            targets: line,
            opacity: 0,
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 1000,
        });
};

export default function Album(props) {
    const classes = useStyles();

    React.useEffect(() => {
        if (props.isActive) {
            ImageAnimation('.imgBox', '.line', '.img');
        }
    }, [props.isActive]);

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
    );
}
