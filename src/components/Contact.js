// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { List,ListItem,ListItemAvatar,Avatar,ListItemText,Typography } from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
    <>
        {data.map((val,i)=>{
            return (
                <List key={i} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={val.photo} />
                        </ListItemAvatar>
                        <ListItemText
                        primary={val.name}
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {val.phone}
                            </Typography>
                            {val.email}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </List>
            )
           
        })}
    </>
    );
};

export default Contact;
