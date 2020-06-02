import React from 'react';
import { Container, Grid, Hidden } from '@material-ui/core';
import HeaderList from '../components/header/HeaderList';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import SwipeDrawer from '../components/header/SwipeDrawer';

export default function about() {
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
                    <h1>About</h1>
                    <Grid />
                </Container>
            </main>
            <Footer />
        </>
    );
}
