import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    menu: {
        width: '100%',
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0 10px',
        '& ul': {
            width: '40%',
            '& li': {
                display: 'inline',
                textAlign: 'center',
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                fontSize: '1em',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                '& a': {
                    display: 'inline-block',
                    width: '25%',
                    padding: '0.75rem 0 0',
                    margin: '0',
                    textDecoration: 'none',
                    color: '#808080',
                },
            },
            '& :hover ': {
                color: '#fff',
            },
        },
    },
});

export default function HeaderList() {
    const classes = useStyles();
    return (
        <nav className={classes.menu}>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/work">
                        <a>Work</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
