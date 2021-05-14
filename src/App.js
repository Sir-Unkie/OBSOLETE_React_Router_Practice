import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './components/Pages/AllQuotes';
import NewQuote from './components/Pages/NewQuote';
import QuoteDetail from './components/Pages/QuoteDetail';
import Layout from './components/layout/Layout';
import NotFound from './components/Pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
