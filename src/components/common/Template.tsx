import * as React from 'react'
import HeaderList from './header/HeaderList'
import Header from './header/Header'
import Footer from './Footer'
import SwipeDrawer from './header/SwipeDrawer'
import { Hidden } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

type Props = {
    children: React.ReactNode
    color?: string
}

export const IndexTemplate: React.FC<Props> = ({ children }) => (
    <>
        <Header>
            <Hidden smUp>
                <SwipeDrawer />
            </Hidden>
            <Hidden xsDown>
                <HeaderList />
            </Hidden>
        </Header>
        {children}
        <Footer description="Hair and Web designer" />
    </>
)

export const Template: React.FC<Props> = ({ children, color }) => {
    const classes = useStyles()
    return (
        <>
            <IndexTemplate>
                <main>
                    <div
                        className={classes.heroContent}
                        style={{ background: color }}
                    >
                        {children}
                    </div>
                </main>
            </IndexTemplate>
        </>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6),
        minHeight: '800px',
        width: '100%',
        overflow: 'hidden',
    },
}))

IndexTemplate.prototype = {
    children: PropTypes.object.isRequired,
}
Template.prototype = {
    children: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
}
