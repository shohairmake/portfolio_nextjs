import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Button, List, ListItem, Typography, Grid } from '@material-ui/core/'
import fetch from 'isomorphic-unfetch'

const useStyles = makeStyles((theme) => ({
    container: {
        width: '80%',
        '& div': {
            textAlign: 'center',
            marginBottom: '2em',
            '& h4': {
                margin: theme.spacing(2),
                fontWeight: '200',
                lineHeight: '2',
                letterSpacing: '0.1em',
            },
        },
    },
    buttonWrapper: {
        textAlign: 'center',
        marginTop: '5em',
        height: '200px',
    },
    button: {
        margin: theme.spacing(2),
        fontSize: '1.5em',
        fontWeight: '100',
        opacity: '0.8',
    },
}))

export const Confirm = ({ formData, prevStep, nextStep }) => {
    const classes = useStyles()
    const { firstName, lastName, email, message } = formData

    const onClickHandler = (e) => {
        e.preventDefault()
        const data = { firstName, lastName, email, message }
        fetch(`${process.env.API_END_POINT}/contacts`, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'X-WRITE-API-KEY': process.env.WRITE_API_KEY,
            },
        }).catch((err) => {
            console.log(err)
        })
        nextStep()
    }

    return (
        <>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.container}
            >
                <Grid>
                    <Typography variant={'h4'}>First Name</Typography>
                    <Typography variant={'h6'}>{firstName}</Typography>
                </Grid>
                <Grid>
                    <Typography variant={'h4'}>Last Name</Typography>
                    <Typography variant={'h6'}>{lastName}</Typography>
                </Grid>
                <Grid>
                    <Typography variant={'h4'}>Email</Typography>
                    <Typography variant={'h6'}>{email}</Typography>
                </Grid>
                <Grid>
                    <Typography variant={'h4'}>Message</Typography>
                    <Typography variant={'h6'}>{message}</Typography>
                </Grid>
            </Grid>
            <div className={classes.buttonWrapper}>
                <Button
                    color="primary"
                    variant="contained"
                    className={classes.button}
                    onClick={onClickHandler}
                >
                    Confirm & Continue
                </Button>
                <Button
                    color="secondary"
                    variant="contained"
                    className={classes.button}
                    onClick={() => prevStep()}
                >
                    Back
                </Button>
            </div>
        </>
    )
}

Confirm.propTypes = {
    formData: PropTypes.object.isRequired,
    prevStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
}
