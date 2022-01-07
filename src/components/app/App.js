import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../header/Header';
import SearchForm from '../searchForm/SearchForm';
import PageNotFound from '../pageNotFound/PageNotFound';
import Footer from '../footer/Footer';
import ScrollToTop from '../scrollToTop/ScrollToTop';

function App() {

  return (
    <div className='page'>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/">
          <SearchForm/>
        </Route>
        <Route path="*">
          <PageNotFound/> 
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;