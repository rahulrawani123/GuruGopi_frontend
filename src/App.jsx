import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './componants/HomeFolder/HomePage';
import LayOut from './componants/LayOut';
import About from './componants/Aboutfolder/About';
import Centres from './componants/Centres';
import Orthopaedics from './componants/HomeFolder/Orthopaedics';
import Gastro from './componants/HomeFolder/Gastro';
import Neuro from './componants/HomeFolder/Neuro';
import Cardiology from './componants/HomeFolder/Cardiology';
import Ent from './componants/HomeFolder/Ent';
import Contact from './componants/Contactusfolder/Contact';
import Contact_data from './componants/Contact_data';
import Login_Contact_data from './componants/Login_Contact_data';
import Protected_ContactUs from './componants/Protected_ContactUs';
import BookAppointement from './componants/BookAppointement/BookAppointement';
import Appointement from './componants/BookAppointement/Appointement';



const App = () => {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/centres" element={<Centres />} />
            <Route path="/orthopaedics" element={<Orthopaedics />} />
            <Route path="/gastro" element={<Gastro />} />
            <Route path="/neuro" element={<Neuro />} />
            <Route path="/cardiology" element={<Cardiology />} />
            <Route path="/ent" element={<Ent />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact_data" element={<Protected_ContactUs Component={Contact_data} />} />
            <Route path="/login_contact_data" element={<Login_Contact_data />} />
            <Route path="/book_appointement" element={<BookAppointement/>} />
            <Route path="/appointment/:id" element={<Appointement/>} />
            </Route>
        </Routes>
      </Router>
    
  );
};

export default App;
