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
import jobsApi from '../../utils/JobsApi';

function App() {

  const [params, setParams] = useState({});
  const [cards, setCards] = useState([]);
  const [displayedCards, setDisplayedCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  function searchJobs (value) {
    setIsLoading(true);
    jobsApi
    .getJobs(value)
      .then((res) => {
        setCards(res);
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
            params={params}
            setParams={setParams}
            onSubmit={searchJobs}
          />
          <DisplayJobsList
            cards={cards}
            displayedCards={displayedCards}
            setDisplayedCards={setDisplayedCards}
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