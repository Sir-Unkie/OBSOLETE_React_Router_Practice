import { Route, useParams } from 'react-router-dom';
import Comments from '../comments/Comments';
import HighlightedQuote from '../quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Zhdi', text: 'My 1st quote' },
  { id: 'q2', author: 'Zhdi', text: 'My 2nd quote' },
  { id: 'q3', author: 'Zhdi', text: 'My 3rd quote' },
];

const QuoteDetail = () => {
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
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </section>
  );
};

export default QuoteDetail;
