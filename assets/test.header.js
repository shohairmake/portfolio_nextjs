import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TypoGraphy from '@material-ui/core/Typography'
import { Collections, Home, AccountBox } from '@material-ui/icons'

export default function PrimarySearchAppBar() {
    return (
        <AppBar position="flexed">
            <List component="nav">
                <ListItem component="div">
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            Home <Home />
                        </TypoGraphy>
                    </ListItemText>
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            Work <Collections />
                        </TypoGraphy>
                    </ListItemText>

                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="title">
                            Contact <AccountBox />
                        </TypoGraphy>
                    </ListItemText>
                </ListItem>
            </List>
        </AppBar>
    )
}
