import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'transparent',
        boxShadow: 'none',
        animation: 'fadeIn',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'inherit',
    },
    navColor: {
        width: '35%',
        justifyContent: 'flex-end',
    },
}));

export default function Header({ children }) {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.root}>
            <Toolbar className={classes.navColor}>{children}</Toolbar>
        </AppBar>
    );
}
