import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import themeparkImage from '../../assets/Logos/themepark.png';
import './Navigation.css'

const drawerWidth = 240;
const navItems = ['Favourites', 'About'];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false); // for mobile
  const location = useLocation(); // Use useLocation to get the current URL path


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Check if user is on home page - if not, add 'Home' pathway to nav bar array so user can go back home
  const modifiedNavItems = location.pathname !== '/' && location.pathname !== '/home' ? ['Home', ...navItems] : navItems;


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      </Typography>
      <Divider />
      <List>
        {modifiedNavItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton component={Link} to={`/${item.toLowerCase()}`} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className="nav-bar-custom" data-testid="main-nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, margin: 0 }}
          > <img src={themeparkImage} alt="Theme Park" style={{ height: '40px' }} /> 

          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {modifiedNavItems.map((item) => (
              <Button key={item} component={Link} to={`/${item.toLowerCase()}`} className="nav-button" data-testid={`nav-item-${item.toLowerCase()}`}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}


export default NavBar;