import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import "./Header.css"

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='Header_BG'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Link to={"/"}><ShoppingCartIcon /></Link>

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {/* News */}
                    </Typography>
                    <Link to={"/signin"}>
                        <Button variant="contained" color="inherit">Sign In</Button>
                    </Link>
                    <br />
                    &nbsp;
                    <Link to={"/signup"}>
                        <Button variant="contained" color="inherit">Sign Up</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}