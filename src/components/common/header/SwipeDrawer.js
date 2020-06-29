import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {
    Home,
    BurstMode,
    MenuBook,
    Info,
    Mail,
    Facebook,
    Instagram,
    Twitter,
} from '@material-ui/icons'
import { HamburgerSlider } from 'react-animated-burgers'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    paper: {
        background: 'linear-gradient(to left, #fafafa, #eef2f3)',
        opacity: '0.8',
    },
})

const Contet = ({ href = {}, text = {}, icon = {} }) => (
    <Link href={href} passHref>
        <ListItem button key={text}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    </Link>
)

export default function SwipeDrawer({ children }) {
    const classes = useStyles()
    const [isActive, setIsActive] = React.useState(false)

    const toggleDrawer = (open) => (event) => {
        setIsActive(open)
    }

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <Contet href="/" text="Home" icon={<Home />} />
                <Contet href="/work" text="Work" icon={<BurstMode />} />
                <Contet href="/blog" text="blog" icon={<MenuBook />} />
                <Contet href="/about" text="About" icon={<Info />} />
                <Contet href="/contact" text="Contact" icon={<Mail />} />
            </List>
            <Divider />
            <List>
                <Contet href="/" text="Instagram" icon={<Instagram />} />
                <Contet href="/" text="Facebook" icon={<Facebook />} />
                <Contet href="/" text="Twitter" icon={<Twitter />} />
            </List>
        </div>
    )

    return (
        <div>
            <>
                <div onClick={toggleDrawer(true)}>
                    <HamburgerSlider
                        onClick={() => setIsActive(!isActive)}
                        isActive={isActive}
                        buttonStyle={{ margin: '0 auto' }}
                        barColor="white"
                        buttonWidth={30}
                    />
                </div>
                <SwipeableDrawer
                    anchor="right"
                    open={isActive}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    classes={{ paper: classes.paper }}
                >
                    {list()}
                </SwipeableDrawer>
            </>
        </div>
    )
}
