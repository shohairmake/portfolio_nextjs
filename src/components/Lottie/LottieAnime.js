import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/styles';
import animationData from './35-loader.json';

const useStyles = makeStyles({
    animation: {
        transform: 'translate(-40%, 265%)',
    },
});

export default function LottieAnime() {
    const classes = useStyles();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className={classes.animation}>
            <Lottie options={defaultOptions} height={100} width={100} />
        </div>
    );
}
