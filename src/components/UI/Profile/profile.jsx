import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'

export default function ProfileList() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Name: Đoàn Thị Yến
                </ListSubheader>
            }
        >
            <ListItemButton>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <Link to='/profile/updateInfo'>
                    <ListItemText primary="Profile Update" />
                </Link>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <Link to='/profile/updateInfoOrder'>
                    <ListItemText primary="Order information" />
                </Link>
            </ListItemButton>
        </List>
    );
}