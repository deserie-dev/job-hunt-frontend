import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import Header from '../header/Header';
import About from '../about/About';
import Services from '../services/Services'
import SearchForm from '../searchForm/SearchForm';
import DisplayJobsList from '../displayJobsList/DisplayJobsList';
import Footer from '../footer/Footer';
import Preloader from '../preloader/Preloader';
import PageNotFound from '../pageNotFound/PageNotFound';
import Job from '../jobCard/JobCard';
import getJobs from '../../utils/getJobs';

function App() {

  const [params, setParams] = useState({});
  const { jobs } = getJobs(params);
  const [isLoading, setIsLoading] = useState(false);
  // const [hasResults, setHasResults] = useState(false);
  const [hasError, setHasError] = useState(false);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;

    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

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
          <SearchForm
            params={params}
            onParamChange={handleParamChange}
          />
          {isLoading && <Preloader />}
          <PageNotFound hasError={hasError} />
          <About />
          <Services />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;