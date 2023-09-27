import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Sidebar({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: '200px' }}>
          {links.map((link, i) => (
            <ListItemButton key={i} onClick={() => setOpen(false)}>
              <ListItemText sx={{ textTransform: 'capitalize' }}>
                {link}
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Sidebar;
