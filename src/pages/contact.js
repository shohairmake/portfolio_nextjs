import React from 'react'
import HeaderList from '../components/header/HeaderList'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import SwipeDrawer from '../components/header/SwipeDrawer'
import contactLogo from '../../static/img/CONTACT.png'
import { Container, Grid, Hidden, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6),
        minHeight: '800px',
        width: '100%',
        background: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
        overflow: 'hidden',
    },
    mainContent: {
        backgroundColor: '#f8f8f8',
        width: '100%',
        height: '100%',
        minHeight: '1000px',
        borderRadius: '20px',
        boxShadow: '1px 1px 5px #fff',
    },
    gap: {
        width: '100%',
        height: '13rem',
        display: 'table',
        textAlign: 'center',
        '@media (max-width:600px)': {
            height: '8rem',
        },
        '& div': {
            display: 'table-cell',
            verticalAlign: 'middle',
            '& img': {
                zIndex: 1,
                position: 'relative',
                opacity: 0.7,
                animation:
                    '$fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
            },
            '& hr': {
                width: '100%',
                height: '1.5em',
                backgroundColor: '#fff',
                borderWidth: 'inherit',
                borderStyle: 'none',
                transform: 'translateY(-65px)',
                zIndex: 0,
                opacity: 0.7,
                '@media (max-width:600px)': {
                    height: '1em',
                    transform: 'translateY(-50px)',
                },
            },
        },
    },
    imgLogo: {
        width: '18em',
        height: 'auto',
        '@media (max-width:600px)': {
            width: '13em',
        },
    },
    '@keyframes fade-in-top': {
        '0%': {
            transform: 'translateY(-30px)',
            opacity: 0,
        },
        '100%': {
            transform: 'translateY(0)',
            opacity: 0.7,
        },
    },
}))

export default function contact() {
    const classes = useStyles()
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
                <div className={classes.heroContent}>
                    <Grid className={classes.gap}>
                        <Grid>
                            <img
                                className={classes.imgLogo}
                                src={contactLogo}
                                alt="contact_logo"
                            />
                            <hr />
                        </Grid>
                    </Grid>
                    <Container>
                        <Grid className={classes.mainContent}>
                            <div style={{ paddingTop: '50px' }}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-evenly"
                                    alignItems="center"
                                >
                                    <Button
                                        variant="outlined"
                                        color="default"
                                        style={{ borderRadius: '30px' }}
                                    >
                                        Hair
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        style={{ borderRadius: '30px' }}
                                    >
                                        Web
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        style={{ borderRadius: '30px' }}
                                    >
                                        Other
                                    </Button>
                                </Grid>
                            </div>
                        </Grid>
                    </Container>
                </div>
            </main>
            <Footer description="Hair and Web designer" />
        </>
    )
}
