import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import { Grid } from '@mui/material';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [dataContact, setDataContact] = useState(contactsJSON)

  const addNewContact = (newContact)=>{
    let data = [...dataContact]
    data = [...data,{name:newContact.name,phone:newContact.phone,email:newContact.email,photo:newContact.photo}]
    setDataContact(data)
  }

  return (
    <div className="App">
      <Header/>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <ContactForm data={addNewContact}/>
        </Grid>
        <Grid item xs={6}>
          <Contact data={dataContact} />
        </Grid> 
      </Grid>
    </div>
  );
};

export default App;
