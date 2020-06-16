import React from 'react'
import Link from 'next/link'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Home, BurstMode, Info, Mail } from '@material-ui/icons'
import UseAnimations from 'react-useanimations'

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
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
))

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem)

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
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const Content = ({ href = {}, text = {}, icon = {} }) => (
        <Link href={href} passHref>
            <StyledMenuItem onClick={handleClose}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
            </StyledMenuItem>
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
                    href="/about"
                    text="About"
                    icon={<Info fontSize="small" />}
                />
                <Content
                    href="/contact"
                    text="Contact"
                    icon={<Mail fontSize="small" />}
                />
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
