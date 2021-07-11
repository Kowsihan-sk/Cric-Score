import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import { Typography } from '@material-ui/core';

const Navbar = () => {
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#171717", color: "#fff" }}>
                <Toolbar>
                    <SportsCricketIcon fontSize="large" />
                    <Typography variant="h4" style={{ margin: "10px", padding: "10px" }} >
                        Cric Score
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
