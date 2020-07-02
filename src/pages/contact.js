import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
//components
import { ContactLogo } from '../components/common/topLogoSection'
import { Template } from '../components/common/Template'
import UserForms from '../components/form/UserForm'

export default function Contact() {
    const classes = useStyles()

    return (
        <>
            <Template color="linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)">
                <ContactLogo />
                <Container>
                    <Grid className={classes.mainContent}>
                        <div style={{ paddingTop: '50px' }}>
                            <Grid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="center"
                            >
                                <UserForms />
                            </Grid>
                        </div>
                    </Grid>
                </Container>
            </Template>
        </>
    )
}

const useStyles = makeStyles({
    mainContent: {
        backgroundColor: '#f8f8f8',
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        boxShadow: '1px 1px 5px #fff',
    },
})
