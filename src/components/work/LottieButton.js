import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core'
import PropTypes from 'prop-types'
//Lottie
import LottieCamera from '../Lottie/camera/camera'
import LottiePc from '../Lottie/pcScreen/pcScreen'
import LottieNoteAndPen from '../Lottie/noteAndPen/noteAndPen'

export default function LottieButton({ onClickHandler }) {
    const classes = useStyles()
    return (
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
                    startIcon={<LottieCamera />}
                    className={classes.button}
                    onClick={onClickHandler(0)}
                >
                    Hair
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<LottiePc />}
                    className={classes.button}
                    onClick={onClickHandler(1)}
                >
                    Web
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<LottieNoteAndPen />}
                    className={classes.button}
                    onClick={onClickHandler(2)}
                >
                    Other
                </Button>
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: '30px',
        border: '2px solid',
        fontSize: '1em',
        '@media (max-width:600px)': {
            fontSize: '0.875em',
            transform: 'scale(0.8)',
        },
    },
}))

LottieButton.prototypes = {
    onClickHandler: PropTypes.func.isRequired,
}
