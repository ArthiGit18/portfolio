// LeftSidebar.js
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;

const LeftSidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem button>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Item 2" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Item 3" />
        </ListItem>
        {/* Add more items as needed */}
      </List>
    </Drawer>
  );
};

export default LeftSidebar;
