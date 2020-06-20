import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LottieMail from '../Lottie/lottieMail/lottieMail'

const useStyles = makeStyles((theme) => ({
    textCenter: {
        textAlign: 'center',
        height: '450px',
    },
}))

export const Success = () => {
    const classes = useStyles()
    return (
        <div className={classes.textCenter}>
            <LottieMail />
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email from us</p>
        </div>
    )
}
