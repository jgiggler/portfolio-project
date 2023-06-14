
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav.js';
import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
import LogPage from './pages/LogPage.js';
import products from './data/products.js';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
// import ContactPage from './pages/ContactPage';


function App() {
  const [patient, setPatient] = useState([])

  return (
    <div className="App">
      <BrowserRouter>

        <header>
          <h1>Joel Gilger</h1>
        </header>

        <Nav />

        <main>
          <section>
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path='/log' element={<LogPage setPatient={setPatient}/>}/>
                <Route path='/add-patient' element={<CreatePage/>} />
                <Route path='/edit-patient' element={<EditPage patient={patient}/>}/>
                
                <Route path='/topics' element={<TopicsPage/>}/>
                <Route path="/gallery" element={<GalleryPage />} /> 
                <Route path="/staff" element= {<StaffPage/>} />
                <Route path="/order" element={<OrderPage products={products}/>} />
                {/* <Route path="/contact" element={<ContactPage/>}/> */}
            </Routes>
          </section>

        </main>
        
        <footer>
          <p><cite>&copy; 2023 Joel Gilger</cite></p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;
