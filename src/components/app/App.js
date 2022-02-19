import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import Header from '../header/Header';
import About from '../about/About';
import Services from '../services/Services'
import SearchForm from '../searchForm/SearchForm';
import JobCardList from '../jobCardList/JobCardList';
import Footer from '../footer/Footer';
import Preloader from '../preloader/Preloader';
import PageNotFound from '../pageNotFound/PageNotFound';
import jobsApi from '../../utils/JobsApi';

function App() {

  const [query, setQuery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  function handleSearchSubmit ({ query }) {
    setIsLoading(true);
    setQuery({})
    jobsApi
    .getJobs(query)
      .then((data) => {
        console.log(data)
        setQuery(data);
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
            onSearch={handleSearchSubmit}
          />

          {query.status === "ok" ? (
            <JobCardList
              jobs={query.jobCards}
            />
          ) : (
            ""  
          )}          
          {isLoading ? <Preloader /> : ""}
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