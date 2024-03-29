import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

export default function LogoContainer({ logo, alt, state }) {
    const classes = useStyles()
    return (
        <Grid className={classes.gap}>
            <Grid>
                <img className={state} src={logo} alt={alt} />
            </Grid>
        </Grid>
    )
}

const useStyles = makeStyles({
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
})

LogoContainer.prototype = {
    logo: PropTypes.object.isRequired,
    alt: PropTypes.string.isRequired,
    state: PropTypes.func.isRequired,
}
