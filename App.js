import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './components/HomePage';
import ValuesPage from './components/ValuesPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import ContactPage from './components/ContactPage';
import DocHome from './components/DocHome';
import Testimonials from './components/Testimonials';

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData().then((data) => {
  //     setData(data);
  //     console.log(`This is my useEffect data:`, data);
  //   });
  // }, [data])
  
  
  return (
    <div className='App-header'>
    
      <Navigation />




      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/values" element={<ValuesPage />} />
        <Route path="testimony" element={<Testimonials />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/doctrine' element={<DocHome />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      

      <Footer />
    </div>
  );
}

export default App;