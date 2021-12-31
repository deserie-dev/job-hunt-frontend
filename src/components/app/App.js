import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../header/Header';
import SearchForm from '../searchForm/SearchForm';
import PageNotFound from '../pageNotFound/PageNotFound';
import Footer from '../footer/Footer';

function App() {

  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route exact path="/" element={<SearchForm/>}/>
        <Route path="*" element={<PageNotFound/>}/> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;