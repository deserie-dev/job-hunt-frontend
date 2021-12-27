import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../header/Header';
import SearchForm from '../searchForm/SearchForm';
import PageNotFound from '../pageNotFound/PageNotFound';
import Footer from '../footer/Footer';

function App() {

  return (
    <div className='page'>
      <Header />
      <Switch>
        <Route exact path="/">
          <SearchForm />
        </Route> 
        <Route path="*">
          <PageNotFound />
        </Route>  
      </Switch>
      <Footer />
    </div>
  );
}

export default App;