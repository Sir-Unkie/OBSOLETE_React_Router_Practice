import { Route, useParams, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../comments/Comments';
import HighlightedQuote from '../quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Zhdi', text: 'My 1st quote' },
  { id: 'q2', author: 'Zhdi', text: 'My 2nd quote' },
  { id: 'q3', author: 'Zhdi', text: 'My 3rd quote' },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const quote = DUMMY_QUOTES.find(elem => {
    return elem.id === params.quoteId;
  });
  if (!quote) {
    return <p>No quotes found...</p>;
  }
  return (
    <section>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      <Route path={match.url} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.url}/comments`}>
        <Comments></Comments>
      </Route>
    </section>
  );
};

export default QuoteDetail;
