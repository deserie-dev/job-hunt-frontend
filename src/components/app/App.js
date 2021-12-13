import React, { useState, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../header/Header';
import SearchForm from '../searchForm/SearchForm';
import Footer from '../footer/Footer';
import Page_404 from '../page_404/Page_404';
import Preloader from '../preloader/Preloader';
import api from '../..ThirdPartyAPI';

function App() {


  return (
    <>
    <Header />
    <SearchForm />
    <Footer />
    </>
  );
}

export default App;