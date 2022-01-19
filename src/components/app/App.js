import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Header from '../header/Header';
import About from '../about/About';
import Services from '../services/Services'
import SearchForm from '../searchForm/SearchForm';
import Footer from '../footer/Footer';

function App() {

  return (
    <div className='page'>
      <Header />
      <Switch>
        <Route  exact path='/about'>
          <About />
        </Route>
        <Route exact path='/services'>
          <Services />
        </Route>
        <Route exact path='/'>
          <SearchForm />
          <About />
          <Services />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;