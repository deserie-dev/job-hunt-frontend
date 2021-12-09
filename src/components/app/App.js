import React, { useState, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../header/Header';
import SearchHero from '../search-hero/SearchHero';
import Footer from '../footer/Footer';
import Page_404 from '../Page_404/Page_404';
import Preloader from '../preloader/Preloader';
import api from '../..ThirdPartyAPI';

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <>
    <Header />
    <SearchHero />
    <Footer />
    </>
  );
}

export default App;