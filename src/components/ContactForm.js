// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { Box} from "@mui/system";
import { TextField,Button } from "@mui/material";
import { useState } from "react";

const ContactForm = ({data}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact,setnewContact] = useState({
        name : "",
        phone : "",
        email : "",
        photo : ""
    })

    const handleChange= (e)=>{
        setnewContact({
            ...newContact,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        data(newContact)
        setnewContact({name:"",phone : "",email : "", photo : ""})
    }
    
    return (
        <> 
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField 
                    required 
                    id="filled-basic" 
                    label="Name" 
                    variant="filled" 
                    name="name" 
                    value={newContact.name} 
                    onChange={handleChange} 
                 />
                <TextField 
                    required 
                    id="filled-basic" 
                    label="phone" 
                    variant="filled" 
                    name="phone"
                    value={newContact.phone} 
                    onChange={handleChange}  
                />
                <TextField 
                    required 
                    id="filled-basic" 
                    label="email" 
                    variant="filled" 
                    name="email"
                    value={newContact.email} 
                    onChange={handleChange}  
                />
                <TextField 
                    required 
                    id="filled-basic" 
                    label="photo url" 
                    variant="filled" 
                    name="photo"
                    value={newContact.photo} 
                    onChange={handleChange}  
                />
                <Button variant="contained" onClick={handleSubmit} >Add New</Button>
            </Box>
        </>
    );
}

export default ContactForm;