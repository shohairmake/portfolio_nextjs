import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Tabs, Tab } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: theme.palette.background.paper,
        width: 'auto',
    },
}));

export default function Header() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Grid
                className={classes.header}
                container
                width={1}
                direction="row"
                justify="flex-end"
                alignItems="flex-start"
            >
                <Tabs value={value} onChange={handleChange}>
                    <Link href="/about" passHref>
                        <Tab label="Home" component="a">
                            Home
                        </Tab>
                    </Link>
                    <Tab label="Work" />
                    <Tab label="About">
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </Tab>
                    <Tab label="Contact" />
                </Tabs>
            </Grid>
        </>
    );
}
