import React from 'react';
import { Container, Grid, Hidden } from '@material-ui/core';
import HeaderList from '../components/header/HeaderList';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import SwipeDrawer from '../components/header/SwipeDrawer';
import { makeStyles } from '@material-ui/core/styles';
import anime from 'animejs';
import workLogo from '../../static/img/WORK.png';

const useStyles = makeStyles({
    ml12: {
        width: '100%',
        height: '100%',
        '& .ml11': {
            fontWeight: 700,
            fontSize: '3.5em',
            '& .text-wrapper': {
                position: 'relative',
                display: 'inline-block',
                paddingTop: '0.1em',
                paddingRight: '0.05em',
                paddingBottom: '0.15em',
                overflow: 'hidden',
            },
            '& .line': {
                opacity: 0,
                position: 'absolute',
                left: 0,
                height: '100%',
                width: '10px',
                backgroundColor: '#000',
                transformOrigin: '0 50%',
                zIndex: 100,
            },
            '& .letter': {
                display: 'inline-block',
                lineHeight: '1em',
                zIndex: 0,
            },
        },
    },
    gap: {
        width: '100%',
        height: '200px',
        display: 'table',
        textAlign: 'center',
        '& div': {
            display: 'table-cell',
            verticalAlign: 'middle',
        },
    },
    imgLogo: {
        width: '200px',
        height: 'auto',
        opacity: '0.7',
    },
});

export default function work() {
    const ref = React.useRef(null);
    const inputEl = React.useRef(null);
    const onButtonClick = () => {
        console.log('inputEl', inputEl);
        // inputEl.current.focus();
    };

    const ImageAnimation = (line, element) => {
        anime
            .timeline({ loop: true })
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
                width: element.getBoundingClientRect().width + 10,
                easing: 'easeOutExpo',
                duration: 700,
                delay: 100,
            })
            .add({
                targets: line,
                right: 0,
                translateX: element.getBoundingClientRect().width + 10,
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

    React.useEffect(() => {
        const ml11 = ref.current;
        const line = ref.current.children[0].children[0];
        const letters = ref.current.children[0].children[1];
        ImageAnimation(line, letters);
    }, []);

    const classes = useStyles();
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
                <Container>
                    <Grid className={classes.gap}>
                        <Grid>
                            <img
                                className={classes.imgLogo}
                                src={workLogo}
                                alt="work_logo"
                            />
                        </Grid>
                    </Grid>
                    <Grid />
                    <div className={classes.ml12}>
                        <h1 ref={ref} className="ml11">
                            <span className="text-wrapper">
                                <span className="line"></span>
                                <span className="letters">Hello Goodbye</span>
                            </span>
                        </h1>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}
