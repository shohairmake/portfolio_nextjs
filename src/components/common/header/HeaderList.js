import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Home, BurstMode, Info, Mail, MenuBook } from '@material-ui/icons'
import UseAnimations from 'react-useanimations'
import PropTypes from 'prop-types'

const StyledMenu = (props = {}) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
)

const useStyles = makeStyles({
    menu: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        color: '#4d4d4d',
    },
    menuIcon: {
        display: 'inline',
        textAlign: 'center',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontSize: '0.8em',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        cursor: 'pointer',
    },
    icon: {
        color: '#4d4d4d',
        marginTop: '10px',
        cursor: 'pointer',
    },
})

export default function CustomizedMenus() {
    const initAnchorEl = null

    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(initAnchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(initAnchorEl)
    }

    const Content = ({ href = {}, text = {}, icon = {} }) => (
        <Link href={href} passHref>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
            </MenuItem>
        </Link>
    )

    const Icon = ({ href = {}, animationKey = {} }) => (
        <Link href={href} passHref prefetch={false}>
            <a className={classes.icon}>
                <UseAnimations animationKey={animationKey} size={40} />
            </a>
        </Link>
    )

    return (
        <div className={classes.menu}>
            <div className={classes.menuIcon} onClick={handleClick}>
                <UseAnimations animationKey="archive" size={40} />
                Menu
            </div>
            <StyledMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {/* Use div as buffer for ref */}
                <div>
                    <Content
                        href="/"
                        text="Home"
                        icon={<Home fontSize="small" />}
                    />
                    <Content
                        href="/work"
                        text="Work"
                        icon={<BurstMode fontSize="small" />}
                    />
                    <Content
                        href="/blog"
                        text="Blog"
                        icon={<MenuBook fontSize="small" />}
                    />
                    <Content
                        href="/about"
                        text="About"
                        icon={<Info fontSize="small" />}
                    />
                    <Content
                        href="/contact"
                        text="Contact"
                        icon={<Mail fontSize="small" />}
                    />
                </div>
            </StyledMenu>
            <Icon
                href="https://www.instagram.com/shotanaka.hair/"
                animationKey="instagram"
            />
            <Icon
                href="https://www.facebook.com/taku.hair"
                animationKey="facebook"
            />
            <Icon
                href="https://twitter.com/shoon75443247"
                animationKey="twitter"
            />
        </div>
    )
}

StyledMenu.propTypes = {
    props: PropTypes.object,
}
