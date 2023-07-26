import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route,HashRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AdmissionForm from './Components/Admission/AdmissionForm';


function App() {
  return(
      <div>
        <Header/>
        <AdmissionForm/>
        <Footer/>
      </div>

  
  );
}

export default App;
