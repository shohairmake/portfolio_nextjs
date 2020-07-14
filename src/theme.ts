import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#26c6da',
            dark: '#1a8a98',
            light: '#51d1e1',
        },
        secondary: {
            main: '#eeccef',
        },
        text: {
            primary: '#212121',
            secondary: '＃4D4D4D',
        },
    },
})

theme.typography.h2 = {
    fontSize: '2.75rem',
    '@media (max-width:600px)': {
        fontSize: '1.5rem',
    },
}

theme.typography.h3 = {
    fontSize: '3rem',
    '@media (max-width:600px)': {
        fontSize: '1.2rem',
    },
}

theme.typography.h5 = {
    fontSize: '1.5rem',
    fontWeight: 400,
    '@media (max-width:600px)': {
        fontSize: '0.7rem',
    },
}

theme.typography.h6 = {
    fontSize: '1.25rem',
}

export default theme
